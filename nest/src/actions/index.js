import axios from 'axios';

const ROOT_URL = `https://reqres.in/api/users?page=2`;

export const FETCH_DATA = 'FETCH_DATA';

export function fetchData() {
    const url = ROOT_URL;
    const request = axios.get(url);

    return {
        type: FETCH_DATA,
        payload: request
    };
}