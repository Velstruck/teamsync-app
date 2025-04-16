import mongoose from "mongoose";
import UserModel from "../models/user.model";
import AccountModel from "../models/account.model";
import WorkspaceModel from "../models/workspace.model";
import RoleModel from "../models/roles-permission.model";
import { Roles } from "../enums/role.enum";
import { NotFoundException } from "../utils/appError";
import MemberModel from "../models/member.model";

export const loginOrCreateAccountService = async (data:{
  provider: string;
  displayName: string;
  providerId: string;
  picture?: string;
  email?: string;
})=>{
    const {provider, displayName, providerId, picture, email} = data;

    const session = await mongoose.startSession();
    try {
        session.startTransaction();
        console.log("Starting transaction....");
       
        let user  = await UserModel.findOne({email}).session(session);  

        if(!user){
            // create a user
            user = new UserModel({
                email,
                name: displayName,
                profilePicture: picture || null,
            })
            await user.save({session});

            const account =  new AccountModel({
                userId: user._id,
                provider: provider,
            })
            await account.save({session});

            //create a new workspace for the user immediately
            const workspace = new WorkspaceModel({
                name: `${user.name}'s Workspace`,
                description: `Workspace Created for ${user.name}`,
                owner: user._id,
            });
            await workspace.save({session});

            const ownerRole = await RoleModel.findOne({
                name: Roles.OWNER,
            }).session(session);

            if(!ownerRole) {
                throw new NotFoundException("Owner role not found");
            }

            const member = new MemberModel({
                userId:user._id,
                workspaceId: workspace._id,
                role: ownerRole._id,
                joinedAt: new Date(),
            })
            await member.save({session});

            user.currentWorkspace = workspace._id as mongoose.Types.ObjectId;
            await user.save({session}); 
        }
        await session.commitTransaction();
        console.log("Transaction committed successfully");
        session.endSession();       
        console.log("Session ended successfully");
        return {user};
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        throw error;
    }finally {
        session.endSession();
    }
};