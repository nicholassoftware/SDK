interface Pagination {
    limit?: number;
    page?: number;
    offset?: number;
}

interface Sorting {
    property: string;
    order: 'asc' | 'desc';
}

export interface RequestConfiguration {
    pagination?: Pagination;
    sort?: Sorting;
    filter?: string[];
}

export const ReqConfigHandler = (config: RequestConfiguration): string => {
    const configArray = [];
    const { pagination, sort, filter } = config;

    if (filter) {
        configArray.push(filter.join(','));
    }

    if (pagination) {
        const paginationArr = [];

        const { limit, page, offset } = pagination;

        if (limit) paginationArr.push(`limit=${limit}`);
        if (page) paginationArr.push(`page=${page}`);
        if (offset) paginationArr.push(`offset=${offset}`);

        configArray.push(paginationArr.join(','))
    }

    if (sort) {
        const { property, order } = sort;
        configArray.push(`sort=${property}:${order}`);
    }

    const result = configArray.length > 0 ? '?' + configArray.join('&') : '';

    return result;
};
