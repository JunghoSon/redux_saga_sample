import React, { ReactElement } from 'react';
import usePosts from '../hook/usePosts';

function PostsPage(): ReactElement {
    const {
        pending,
        data,
        getPosts,
    } = usePosts();
    return (
        <div className="App">
            <button type="button" onClick={getPosts}>posts</button>
            {pending && <div>로딩중</div>}
            {data.map(post => <li key={post.id}>{post.title}</li>)}
        </div>
    );
}

export default PostsPage;
