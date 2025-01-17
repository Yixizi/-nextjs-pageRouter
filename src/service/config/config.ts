import ClassXRequset from './server';

const BASE_URL = 'http://codercba.com:9060/music-next/api';
const TIME_OUT = 1000 * 6;

export const XRequset = new ClassXRequset({
	baseURL: BASE_URL,
	timeout: TIME_OUT,
});
