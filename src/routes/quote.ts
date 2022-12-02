import factory from '../util/factory';
import { RequestConfiguration } from '../util/reqConfig';
import setAuthConfig from '../util/setAuthConfig';

const URL = `https://the-one-api.dev/v2`;
const QUOTE = `/quote`;

export const get = async (auth: string, config: RequestConfiguration = {}) => {
    try {
        const url = `${URL}${QUOTE}`;

        const quote = await factory(url, config, setAuthConfig(auth));

        return quote;
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
        const url = `${URL}${QUOTE}/${id}`;

        const quote = await factory(url, config, setAuthConfig(auth));

        return quote;
    } catch (error) {
        return error;
    }
};
