import factory from '../util/factory';
import { RequestConfiguration } from '../util/reqConfig';
import setAuthConfig from '../util/setAuthConfig';

const URL = `https://the-one-api.dev/v2`;
const CHARACTER = `/character`;

type CharacterRace =
    | 'Human'
    | 'Elf'
    | 'Dwarf'
    | 'Hobbit'
    | 'Maiar'
    | 'Ent'
    | 'Orcs'
    | 'Dragon'
    | 'NaN'
    | 'Elves'
    | 'Men'
    | 'Dragons'
    | 'Great Spiders'
    | 'Black Uruk'
    | 'Ainur'
    | 'Raven'
    | 'Dwarves'
    | 'Men |Wraith'
    | 'God'
    | 'Wolfhound'
    | 'Half-elven'
    | 'Werewolves'
    | 'Goblin |Orc'
    | 'Horse'
    | 'Orc'
    | 'Eagles'
    | 'Uruk-hai'
    | 'Great Eagles'
    | 'Maiar |Balrogs'
    | 'Hobbits'
    | 'Uruk-hai |Orc'
    | 'Orc |Goblin'
    | 'Urulóki'
    | 'Ents'
    | 'Balrog'
    | 'Eagle'
    | 'Stone-trolls'
    | 'Vampire';

export const get = async (auth: string, config: RequestConfiguration = {}) => {
    try {
        const url = `${URL}${CHARACTER}`;

        const character = await factory(url, config, setAuthConfig(auth));

        return character;
    } catch (error) {
        return error;
    }
};

export const getAllByRace = async (
    auth: string,
    race: CharacterRace,
    config: RequestConfiguration = {}
) => {
    try {
        const url = `${URL}${CHARACTER}`;

        const character = await factory(
            url,
            {
                filter: [`race=${race}`],
            },
            setAuthConfig(auth)
        );

        return character;
    } catch (error) {
        return error;
    }
};

export const getAllByGender = async (
    auth: string,
    gender: 'Male' | 'Female',
    config: RequestConfiguration = {}
) => {
    try {
        const url = `${URL}${CHARACTER}s`;

        const character = await factory(
            url,
            {
                filter: [`gender=${gender}`],
            },
            setAuthConfig(auth)
        );

        return character;
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
        const url = `${URL}${CHARACTER}/${id}`;

        const character = await factory(url, config, setAuthConfig(auth));

        return character;
    } catch (error) {
        return error;
    }
};

export const getQuoteFromACharacter = async (
    auth: string,
    characterID: string,
    config: RequestConfiguration = {}
) => {
    try {
        const url = `${URL}${CHARACTER}/${characterID}/quote`;

        const quote = await factory(url, config, setAuthConfig(auth));

        return quote;
    } catch (error) {
        return error;
    }
};
