import { AxiosRequestConfig } from 'axios';

const setAuthConfig = (auth: string) => {
    const config: AxiosRequestConfig = {
        headers: {
            Authorization: `Bearer ${auth}`,
        },
    };

    return config;
};

export default setAuthConfig;
