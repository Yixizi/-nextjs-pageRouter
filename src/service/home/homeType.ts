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

export interface XProduct {
	id: number;
	name?: string;
	type?: number;
	minPrice?: number;
	maxPrice?: number;
	originalCost?: number;
	couponLabelDesc?: string;
	coverUrl?: string;
}

export interface XHotProduct {
	id: number;
	products?: XProduct;
}

export interface XHotProductV2 {
	count?: number;
	hasMore?: boolean;
	hotProduct?: XHotProduct[];
}

export interface XAllProduct {
	count?: number;
	allProduct?: XProduct[];
}
