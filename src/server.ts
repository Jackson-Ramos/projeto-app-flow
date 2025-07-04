import * as http from 'http'
import { getListEpisodes, getFilterEpisodes } from './controllers/podscasts-controllers'

const server = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse) => {

    const [baseUrl, queryString] = req.url?.split('?') ?? ['', ''];

    if (req.method === 'GET' && baseUrl === '/api/list') {
        await getListEpisodes(req, res)
    }
    else if (req.method === 'GET' && baseUrl === baseUrl) {
        await getFilterEpisodes(req, res);
    }

});

const port = process.env.PORT;
server.listen(port, () => {
    console.log(`O servido esta rodando na porta: ${port}`)
});