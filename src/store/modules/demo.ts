import { createSlice } from '@reduxjs/toolkit';

export interface DemoInitialState {
	counter: number;
}

const initialState: DemoInitialState = {
	counter: 10,
};

const demoSlice = createSlice({
	name: 'demo',
	initialState,
	reducers: {
		setCounter(state, action) {
			state.counter = action.payload;
		},
	},
});

export default demoSlice.reducer;
