import axios, { AxiosPromise } from 'axios';
import { Post } from '../types/api/posts';

export const getTodos = (): AxiosPromise => axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
