import { AxiosResponse } from 'axios';
import apiClient from 'src/utils/api';

export async function githubRepos(): Promise<AxiosResponse> {
  return apiClient.get('/users/octocat/repos');
}
