import {
	Action,
	combineReducers,
	configureStore,
	ThunkAction,
	ThunkDispatch,
} from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import homeReducer from './modules/home';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const rootReducer = combineReducers({
	home: homeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
	reducer: rootReducer,
});

const wrapper = createWrapper(() => store);
export default wrapper;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch &
	ThunkDispatch<AppState, unknown, Action>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
