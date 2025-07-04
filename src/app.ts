import * as http from 'http'
import { getListEpisodes, getFilterEpisodes } from './controllers/podscasts-controllers'
import { Routes } from './routes/routes';
import { HttpMethod } from './utils/http-methods';

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {

    const [baseUrl, queryString] = request.url?.split('?') ?? ['', ''];

    if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(request, response)
    }
    else if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodes(request, response);
    }

}