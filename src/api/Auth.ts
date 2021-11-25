import axios, {AxiosResponse} from "axios";
import {IUser} from "../Models/IUser";

export const auth = async ():Promise<AxiosResponse<IUser[]>> => {
    return axios.get<IUser[]>('./mock.users.json')
}