import { PodcastModel } from "./Podcast-Model";

export interface ResponsePodcastModel {
    statusCode: number,
    body: PodcastModel[]
}