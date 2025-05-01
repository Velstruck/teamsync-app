import { PermissionType } from "@/constant";
import { useAuthContext } from "@/context/auth-provider";
import useWorkspaceId from "@/hooks/use-workspace-id";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const withPermission = (
  WrappedComponent: React.ComponentType,
  requiredPermission: PermissionType,
) => {
  const WithPermission = (props:any)=>{
    const { user, hasPermission, isLoading } = useAuthContext();
    const navigate = useNavigate();
    const workspaceId = useWorkspaceId();

    useEffect(() => {
      if(!user || !hasPermission(requiredPermission) ){
        navigate(`/workspace/${workspaceId}`);
      }
    },[user, hasPermission, navigate, workspaceId]);

    if(isLoading) {
      return <div className="w-full h-full flex items-center justify-center">Loading...</div>;
    }

    //checking if the user has the required permission
    if(!user || !hasPermission(requiredPermission)) {
      return;
    }
    // Render the wrapped component if the user has the required permission
    return <WrappedComponent {...props} />;
  }
  return WithPermission;
}

export default withPermission;
