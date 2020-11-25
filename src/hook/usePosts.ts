import { useCallback } from 'react';
import {
    useDispatch,
    useSelector,
} from 'react-redux';
import { RootState } from '../store/modules';
import postsSlice from '../store/modules/posts';
import { Post } from '../types/api/posts';

export default function usePosts(): {
    pending: boolean;
    data: Post[];
    getPosts: () => void;
} {
    const {
        pending,
        data,
    } = useSelector((state: RootState) => state.posts);
    const dispatch = useDispatch();

    const getPosts = useCallback(() => {
        dispatch(postsSlice.actions.getPosts());
    }, [dispatch]);

    return {
        pending,
        data,
        getPosts,
    }
}
