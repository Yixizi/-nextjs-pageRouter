import { XRequset } from '../config/config';
import { XResultData } from '../config/serverType';

export const getDetailPageInfo = (id: string) => {
	return XRequset.get<XResultData<any>>({
		url: '/special/getdetail?specialTopicId=' + id,
	});
};
