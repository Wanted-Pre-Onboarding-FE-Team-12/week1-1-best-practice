import { instance } from "./index";

export const signin = async (formData) => {
    const data = await instance.post("/auth/signin", formData);
    return data;
};

export const signup = async (formData) => {
    const data = await instance.post("/auth/signup", formData);
    return data;
};
