import { PermissionType } from "../enums/role.enum";
import { UnauthorizedException } from "./appError";
import { RolePermissions } from "./roles-permission";

export const roleGuard = (
    role: keyof typeof RolePermissions,
    requiredPermissions: PermissionType[],
)=>{
    const permissions = RolePermissions[role]

    //if role doesnt exist or lack permissions, throw error

    const hasPermission = requiredPermissions.every((permission) =>
        permissions.includes(permission));

    if (!hasPermission) {
        throw new UnauthorizedException("WOMP WOMP! You do not have permission to perform this action");
    }
}