import { combineReducers } from '@reduxjs/toolkit';
import { all } from 'redux-saga/effects';
import counterSlice from './counter';
import postsSlice, { postsSaga } from './posts';

const rootReducer = combineReducers({
    counter: counterSlice.reducer,
    posts: postsSlice.reducer,
});

export function* rootSaga(): Generator {
    yield all([
        postsSaga(),
    ]);
}

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
