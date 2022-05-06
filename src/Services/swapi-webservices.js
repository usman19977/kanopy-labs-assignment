import Axios from "axios";
import { interceptor } from "./axios-config";

export const getAllPeople = () => async (
    dispatch
) => {
    try {
        interceptor();

        const { data } = await Axios.get("/api/people");

console.log(data);
    } catch (e) {

        console.log(e.message());


    }
};