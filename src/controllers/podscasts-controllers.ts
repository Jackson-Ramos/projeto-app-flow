import { IncomingMessage, ServerResponse } from 'http';
import { serviceListEpisodes } from '../services/list-episodes-service'
import { serviceFilterEpisodes } from '../services/filter-episodes-service';

const statusCondeOK: number = 200;

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

    const data = await serviceListEpisodes();

    res.writeHead(statusCondeOK, { 'content-type': 'application/json' });
    res.end(JSON.stringify(data));
};

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

    const content = await serviceFilterEpisodes(req.url);

    res.writeHead(statusCondeOK, { 'content-type': 'aplication/json' });
    res.end(JSON.stringify(content));
}
