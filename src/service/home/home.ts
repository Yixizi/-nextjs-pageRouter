import { XRequset } from '../config/config';
import { XResultData } from '../config/serverType';
import { XAllProduct, XHomeInfo, XHotProduct, XHotProductV2, XSearchSuggest } from './homeType';

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

export const getHotProduct_v2 = () => {
	return XRequset.get<XResultData<XHotProductV2>>({
		url: '/hotproduct_v2/gets',
	});
};

export const getAllProduct = () => {
	return XRequset.get<XResultData<XAllProduct>>({
		url: '/allProduct/gets',
	});
};
