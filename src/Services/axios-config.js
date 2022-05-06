import Axios from "axios";
import { baseUrl, setHeaders} from "../Helpers/helper";

export const interceptor = () => {
    Axios.interceptors.request.use(
        (config) => {
            config.headers = setHeaders();
            config.baseURL = baseUrl;
            return config;
        },
        (error) => Promise.reject(error)
    );
};
