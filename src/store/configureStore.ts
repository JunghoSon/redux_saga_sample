import {
    configureStore,
    getDefaultMiddleware,
    Middleware,
    Store,
} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules';

const sagaMiddleware = createSagaMiddleware();

const getStore = (): Store => {
    const middleware = getDefaultMiddleware({
        serializableCheck: false,
    }).concat(sagaMiddleware as Middleware);

    const store = configureStore({
        reducer: rootReducer,
        middleware,
    });

    sagaMiddleware.run(rootSaga);

    return store;
};

export default getStore;
