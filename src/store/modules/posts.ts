import { createSlice } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { Post } from '../../types/api/posts';
import * as api from '../../api';

interface Posts {
    data: Post[];
    pending: boolean;
    error: boolean;
}

const initialState: Posts = {
    data: [],
    pending: false,
    error: false,
};

const reducers = {
    getPosts: (state: Posts): void => {
        state.pending = true;
        state.error = false;
    },
    fulfilled: (state: Posts, action: any): void => {
        state.pending = false;
        state.data = action.payload.data;
    },
    rejected: (state: Posts): void => {
        state.pending = false;
        state.error = true;
    },
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers,
});

const {
    getPosts,
    fulfilled,
    rejected,
} = postsSlice.actions;

function* getPostsSaga(): Generator {
    try {
        const data = yield call(api.getTodos);
        yield put(fulfilled(data));
    } catch (err) {
        console.log(err);
        yield put(rejected());
    }
}

export function* postsSaga(): Generator {
    yield takeLatest(getPosts, getPostsSaga);
}

export default postsSlice;
