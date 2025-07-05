import { repositoryPodcast } from "../repositories/podcasts-repository";
import { ResponsePodcastModel } from "../model/response-podcast-model";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<ResponsePodcastModel> => {

    const responseFormat: ResponsePodcastModel = {
        statusCode: 0,
        body: []
    };

    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);

    if (data.length !== 0) {
        responseFormat.statusCode = StatusCode.OK;
    } else {
        responseFormat.statusCode = StatusCode.NO_CONTENT;
    }

    responseFormat.body = data;

    return responseFormat;
}