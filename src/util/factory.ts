import axios, { AxiosRequestConfig } from 'axios';
import { ReqConfigHandler, RequestConfiguration } from './reqConfig';

interface ResponseBody {
    status?: string | number;
    body?: Object;
    message?: string;
}

const factory = async (
    url: string,
    config: RequestConfiguration = {},
    reqConfig: AxiosRequestConfig = {}
) => {
    try {
        let res: any = await axios.get(
            url + ReqConfigHandler(config),
            reqConfig
        );

        let body: ResponseBody = {};

        if (res.response?.status == 429) {
            body.message = res.response?.statusText;
        }

        body = {
            status: res.status,
            body: res.data.docs,
        };

        return body;
    } catch (error: any) {
        return error;
    }
};

export default factory;
