import { UserDocuments } from "../models/user.model";

declare global {
    namespace Express {
        interface User extends UserDocuments {
            _id?: any;
        };
    }
}
