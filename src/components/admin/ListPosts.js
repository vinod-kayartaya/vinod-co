import React, { useEffect, useState } from 'react';

const ListPosts = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPostMeta, setSelectedPostMeta] = useState({});
    const [selectedPost, setSelectedPost] = useState('');

    useEffect(() => {
        fetch('/posts/meta.json')
            .then((resp) => resp.json())
            // .then((data) => data.posts)
            .then(setPosts);
    }, []);

    const clickHandler = (postMeta) => {
        setSelectedPostMeta(postMeta);
        fetch(`/posts/${postMeta.source}.md`)
            .then((resp) => resp.text())
            .then(setSelectedPost);
    };

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setSelectedPostMeta((oldVals) => ({ ...oldVals, [name]: value }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const options = {
            method: 'PUT',
            body: JSON.stringify({
                meta: selectedPostMeta,
                selectedPost,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        fetch(
            'http://localhost:4000/api/posts/' + selectedPostMeta.source,
            options
        )
            .then((resp) => resp.text())
            .then(() => alert('Saved'))
            .catch(alert);
    };

    return (
        <>
            <div className='row'>
                <div className='col-md-4'>
                    <ul className='list-group'>
                        {posts.map((p) => (
                            <div
                                className='list-group-item'
                                key={p.id}
                                style={styles.postTitle}
                                onClick={() => clickHandler(p)}
                            >
                                {p.title}
                            </div>
                        ))}
                    </ul>
                </div>
                <div className='col-md-8'>
                    <form onSubmit={submitHandler}>
                        <div className='mb-3'>
                            <label htmlFor='postTitle' className='form-label'>
                                Post title
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                id='postTitle'
                                placeholder='post title'
                                value={selectedPostMeta.title}
                                name='title'
                                onChange={changeHandler}
                            />
                        </div>
                        <div className='mb-3'>
                            <label
                                htmlFor='postDescription'
                                className='form-label'
                            >
                                Post description
                            </label>
                            <textarea
                                style={styles.postDescription}
                                type='text'
                                className='form-control'
                                id='postDescription'
                                placeholder='post description'
                                name='description'
                                value={selectedPostMeta.description}
                                onChange={changeHandler}
                            ></textarea>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='post' className='form-label'>
                                Post content
                            </label>
                            <textarea
                                style={styles.postContent}
                                type='text'
                                className='form-control'
                                id='post'
                                placeholder='post content'
                                name='postContent'
                                value={selectedPost}
                                onChange={(e) => {
                                    setSelectedPost(e.target.value);
                                }}
                            ></textarea>
                        </div>

                        <button className='btn btn-primary'>
                            Save changes
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ListPosts;

const styles = {
    postTitle: {
        cursor: 'pointer',
    },
    postDescription: {
        minHeight: 150,
        maxHeight: 150,
    },
    postContent: {
        minHeight: 450,
        maxHeight: 450,
    },
};
