import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router";


const axiosSecure = axios.create({
    baseURL: 'https://react-car-doctor-server-five.vercel.app',
    withCredentials: true
})

const useAxios = () => {
    const { Logout } = useContext(AuthContext);
    const navigate = useNavigate()

    axiosSecure.interceptors.response.use(res => {
        return res
    }, error => {
        // console.log("Error Tracked On The Interceptor: ", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
            // console.log("User Logged Out");
            Logout()
                .then(res => {
                    navigate("/login");
                })
                .catch(err => {
                    console.log(err);
                })
        }
    })


    return axiosSecure
};

export default useAxios;