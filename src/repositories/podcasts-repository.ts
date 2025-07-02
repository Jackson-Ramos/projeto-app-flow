import { promises } from 'dns';
import fs from 'fs';
import path from 'path';
import { PodcastModel } from '../model/Podecast-Model'

const pathData = path.join(__dirname, '../repositories/podcasts.json');

export const repositoryPodcast = async (): Promise<PodcastModel[]> => {

    const rowData = fs.readFileSync(pathData, 'utf-8');
    const jsonFile = JSON.parse(rowData);
    return jsonFile;
};