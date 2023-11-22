import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://restaurant-food-project-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;