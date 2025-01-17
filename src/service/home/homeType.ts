export interface XSearchSuggest {
	id: string;
	defaultKey: string;
	configKey: any[];
}

export interface XBanner {
	id: number;
	picStr?: string;
	backendPicStr?: string;
}
export interface XCategory {
	cid: number;
	picStr?: string;
	title?: string;
	backendPicStr?: string;
	tabIndex?: number;
	targetUrl?: string;
	count?: number;
	desc?: string;
	type?: number;
}
export interface XRecommend {
	id: number;
	picStr?: string;
	title?: string;
}

export interface XHomeInfo {
	banners?: XBanner[];
	categorys?: XCategory[];
	recommends?: XRecommend[];
	digitalData?: any[];
}
