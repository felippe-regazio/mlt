import axios, { Axios } from 'axios';

const HttpClient: Axios = axios.create({
	timeout: 30000,
	withCredentials: true,
	baseURL: process.env.REACT_APP_API_URL
});

HttpClient.interceptors.request.use(
	config => {
		const token = localStorage.getItem('mlt') || 'None';
		config.headers['Content-Type'] = `application/json`;
		config.headers['Authorization'] = `Bearer ${token}`;
		return config;
  },

  error => Promise.reject(error)
);

export const API = HttpClient;