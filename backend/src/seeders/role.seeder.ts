import "dotenv/config";
import mongoose from "mongoose";
import connectDatabase from "../config/database.config";
import RoleModel from "../models/roles-permission.model";
import { RolePermissions } from "../utils/roles-permission";

const seedRoles = async () => {
    console.log('Seeding roles...');

    try {
        await connectDatabase();

        const session = await mongoose.startSession();
        session.startTransaction();

        console.log("Clearing existing data");
        await RoleModel.deleteMany({}, { session });

        for (const roleName in RolePermissions) {
            const role = roleName as keyof typeof RolePermissions;
            const permissions = RolePermissions[role];

            //check if role already exists
            const existingRole = await RoleModel.findOne({ name: role }).session(session);

            if (!existingRole) {
                const newRole = new RoleModel({
                    name: role,
                    permissions: permissions
                });
                await newRole.save({ session });
                console.log(`Role ${role} created`);
                
            } else{
                console.log(`Role ${role} already exists`);
            }
        }
        await session.commitTransaction();
        console.log("Roles seeded successfully, Transaction committed");        
        session.endSession();
        console.log("Session ended successfully");        
    } catch (error) {
        console.error("Error seeding roles:", error);
        
    }

}

seedRoles().catch((error) => 
    console.error("Error seeding roles:", error)
)