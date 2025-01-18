import { XRequset } from '../config/config';
import { XSearchParam, XSearchProductResult } from './serverType';

export const getProductSearchData = (params: XSearchParam) => {
	return XRequset.get<XSearchProductResult>({
		url: '/store/api/product/search',
		params,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	});
};
