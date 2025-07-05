import { IncomingMessage, ServerResponse } from 'http';
import { serviceListEpisodes } from '../services/list-episodes-service'
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
import { StatusCode } from '../utils/status-code';
import { ResponsePodcastModel } from '../model/response-podcast-model';

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

    const data = await serviceListEpisodes();

    res.writeHead(StatusCode.OK, { 'content-type': 'application/json' });
    res.end(JSON.stringify(data));
};

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

    const content: ResponsePodcastModel = await serviceFilterEpisodes(req.url);

    res.writeHead(content.statusCode, { 'content-type': 'application/json' });
    res.end(JSON.stringify(content.body));
}
