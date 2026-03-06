import type { IRegister } from '../types/auth.type';
import { https } from './axiosClient';
export const registerUser = ({ email, password }: IRegister) => {
    return https.post("/api/register", { email, password });
}