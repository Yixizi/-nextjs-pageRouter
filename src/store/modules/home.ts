import { getSearchSuggest } from '@/service/home/home';
import { createSlice } from '@reduxjs/toolkit';
// import { hydrateRoot } from 'react-dom/client';
import { HYDRATE } from 'next-redux-wrapper';
import { AppThunk } from '..';
import { XSearchSuggest } from '@/service/home/homeType';

export interface HomeInitialState {
	counter: number;
	suggest?: XSearchSuggest;
}

const initialState: HomeInitialState = {
	counter: 10,
};

const homeSlice = createSlice({
	name: 'home',
	initialState,
	reducers: {
		increment(state, action) {
			state.counter += action.payload;
		},
		setSuggest(state, action) {
			state.suggest = action.payload;
		},
	},
	extraReducers(builder) {
		builder.addCase(HYDRATE, (state, action: any) => {
			return {
				...state,
				...action.payload.home,
			};
		});
	},
});

export const fetchSearchSuggest =
	(): AppThunk => async (dispatch, getState) => {
		const res = await getSearchSuggest();
		dispatch(setSuggest(res.data));
	};

export default homeSlice.reducer;

export const { increment, setSuggest } = homeSlice.actions;
