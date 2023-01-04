import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PostsWidget = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/posts/meta.json')
            .then((resp) => resp.json())
            // .then((data) => data.posts)
            .then((posts) => posts.reverse())
            .then(setPosts);
    }, []);

    const postsJsx = posts.map((p) => (
        <div key={p.id}>
            <Link type='h3' to={'/posts/' + p.source} className='no-underline'>
                <h5>{p.title}</h5>
            </Link>
            <p style={styles.p}>{p.description}</p>
        </div>
    ));

    return <>{postsJsx}</>;
};

export default PostsWidget;

const styles = {
    p: { textAlign: 'justify', textJustify: 'interWord' },
    h3: { cursor: 'pointer' },
};
