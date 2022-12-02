import factory from '../util/factory';
import { RequestConfiguration } from '../util/reqConfig';

const URL = `https://the-one-api.dev/v2`;
const BOOK = `/book`;

export const get = async (config: RequestConfiguration = {}) => {
    try {
        const url = `${URL}${BOOK}`;

        const book = await factory(url, config);

        return book;
    } catch (error) {
        return error;
    }
};

export const getByID = async (
    id: string,
    config: RequestConfiguration = {}
) => {
    try {
        const url = `${URL}${BOOK}/${id}`;

        const book = await factory(url, config);

        return book;
    } catch (error) {
        return error;
    }
};

export const getChaptersFromABook = async (
    bookID: string,
    config: RequestConfiguration = {}
) => {
    try {
        const url = `${URL}${BOOK}/${bookID}/chapter`;

        const book = await factory(url, config);

        return book;
    } catch (error) {
        return error;
    }
};

export const getChapterCountFromABook = async (
    bookID: string,
    config: RequestConfiguration = {}
) => {
    try {
        const url = `${URL}${BOOK}/${bookID}/chapter`;

        const book = await factory(url, config);

        return {
            status: book.status,
            message: `${book.body.total} Chapters`,
        };
    } catch (error) {
        return error;
    }
};
