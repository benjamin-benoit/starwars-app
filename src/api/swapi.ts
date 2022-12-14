import axios from 'axios';
import { People } from './types';

const instance = axios.create({
  baseURL: 'https://swapi.dev/api',
});

const getPeople = (page: string) => {
  return instance.get<People>(`/people/${page}`).then(res => res.data);
};

const swapiService = {
  getPeople,
};

export default swapiService;
