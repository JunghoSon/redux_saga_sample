import { useCallback } from 'react';
import {
    useDispatch,
    useSelector,
} from 'react-redux';
import { RootState } from '../store/modules';
import counterSlice from '../store/modules/counter';

export default function useCounter(): {
    num: number;
    increase: () => void;
    decrease: () => void;
} {
    const { num } = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch();

    const increase = useCallback(() => {
        dispatch(counterSlice.actions.increase());
    }, [dispatch]);
    const decrease = useCallback(() => {
        dispatch(counterSlice.actions.decrease());
    }, [dispatch]);

    return {
        num,
        increase,
        decrease,
    }
}
