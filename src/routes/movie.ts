import factory from '../util/factory';
import { RequestConfiguration } from '../util/reqConfig';
import setAuthConfig from '../util/setAuthConfig';

import * as Character from './character';

const URL = `https://the-one-api.dev/v2`;
const MOVIE = `/movie`;

export const get = async (auth: string, config: RequestConfiguration = {}) => {
    try {
        const url = `${URL}${MOVIE}`;

        const movies = await factory(url, config, setAuthConfig(auth));

        return movies;
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
        const url = `${URL}${MOVIE}/${id}`;

        const movies = await factory(url, config, setAuthConfig(auth));

        return movies;
    } catch (error) {
        return error;
    }
};

export const getQuotesFromAMovie = async (
    auth: string,
    movieID: string,
    config: RequestConfiguration = {}
) => {
    try {
        const url = `${URL}${MOVIE}/${movieID}/quote`;

        const quote = await factory(url, config, setAuthConfig(auth));

        return quote;
    } catch (error) {
        return error;
    }
};

export const getCharacterFromAMovie = async (
    auth: string,
    movieID: string,
    config: RequestConfiguration = {}
) => {
    try {
        const url = `${URL}${MOVIE}/${movieID}/quote`;

        const res = await factory(url, config, setAuthConfig(auth));
        const characterIDs = [
            ...new Set(res?.body?.docs?.map((el: any) => el.character)),
        ];
        const character = await Character.get(auth, {
            filter: [`_id=${characterIDs.join(',')}`],
        });
        return character;
    } catch (error) {
        return error;
    }
};

export const getCharacterQuoteFromAMovie = async (
    auth: string,
    movieID: string,
    config: RequestConfiguration = {}
) => {
    try {
        const url = `${URL}${MOVIE}/${movieID}/quote`;

        const res = await factory(url, config, setAuthConfig(auth));
        const quote = res.body.docs.filter((el: any) => el.movie == movieID);
        return quote;
    } catch (error) {
        return error;
    }
};
