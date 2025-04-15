import mongoose, {Schema, Document} from 'mongoose'; 
import { ProviderEnum, ProviderEnumType } from '../enums/account-provider.enum';

export interface AccountDocument extends Document {
    provider: ProviderEnumType;
    providerId: string; //store email, googleId, githubId, facebookId etc for this onee
    userId: mongoose.Types.ObjectId;
    refreshToken: string | null;
    tokenExpiry: Date | null;
    createdAt: Date;
}



const accountSchema = new Schema<AccountDocument>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        provider: {
            type: String,
            enum: Object.values(ProviderEnum),
            required: true,
        },
        providerId: {
            type: String,
            unique: true,
            required: true,
        },
        refreshToken: {
            type: String,
            default: null,
        },
        tokenExpiry: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true,
        toJSON:{
            transform(doc, ret) {
                delete ret.refreshToken;
            },
        }
    }
)


const AccountModel = mongoose.model<AccountDocument>('Account', accountSchema);
export default AccountModel;