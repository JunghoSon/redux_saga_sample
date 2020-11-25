import { createSlice } from "@reduxjs/toolkit";

interface Counter {
    num: number;
}

const initialState: Counter = {
    num: 0,
};

const reducers = {
    increase: (state: Counter): void => {
        state.num = state.num + 1;
    },
    decrease: (state: Counter): void => {
        state.num = state.num - 1;
    },
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers,
});

export default counterSlice;
