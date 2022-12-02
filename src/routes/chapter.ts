import factory from '../util/factory';
import { RequestConfiguration } from '../util/reqConfig';
import setAuthConfig from '../util/setAuthConfig';

const URL = `https://the-one-api.dev/v2`;
const CHAPTER = `/chapter`;

export const get = async (auth: string, config: RequestConfiguration = {}) => {
    try {
        const url = `${URL}${CHAPTER}`;

        const chapter = await factory(url, config, setAuthConfig(auth));

        return chapter;
    } catch (error) {
        return error;
    }
};

export const getByID = async (
    auth: string,
    id: string,
    config: RequestConfiguration = {}
) => {
    try {
        const url = `${URL}${CHAPTER}/${id}`;

        const chapter = await factory(url, config, setAuthConfig(auth));

        return chapter;
    } catch (error) {
        return error;
    }
};
