import { Outlet } from "react-router";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Main = () => {
    return (
        <div className="max-w-7xl mx-auto px-2 text-center">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;