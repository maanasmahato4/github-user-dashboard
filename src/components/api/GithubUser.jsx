import axios from "axios";

export const userApi = axios.create({
    baseURL: "https://api.github.com"
})

export const fetchUser = async (path) => {
    const res = await userApi.get(path);
    return res;
}