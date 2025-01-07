import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivetRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if (user?.email) {
        return children;
    }


    return <Navigate to="/login" state={location.pathname} replace></Navigate>;
};

export default PrivetRoute;