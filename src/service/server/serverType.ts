export interface XSearchParam {
	limit: number;
	offset: number;
	key?: string;
}

export interface XSearchProductResult {
	code: number;
	more: boolean;
	products?: any[];
}
