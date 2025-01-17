import { XRequset } from '../config/config';
import { XResultData } from '../config/serverType';
import { XHomeInfo, XSearchSuggest } from './homeType';

export const getSearchSuggest = () => {
	return XRequset.get<XResultData<XSearchSuggest>>({
		url: '/searchSuggest/get',
	});
};

export const getHomeInfo = () => {
	return XRequset.get<XResultData<XHomeInfo>>({
		url: '/home/info',
	});
};
