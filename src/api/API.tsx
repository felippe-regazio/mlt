import axios, { Axios } from 'axios';

export const API: Axios = axios.create({
	timeout: 30000,
	withCredentials: true,
	baseURL: process.env.REACT_APP_API_URL
});