import React, { useEffect, useRef, useState } from 'react';
import FileUpload from './FileUpload';

const ListPosts = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPostMeta, setSelectedPostMeta] = useState({});
    const [selectedPost, setSelectedPost] = useState('');
    const taRef = useRef();

    useEffect(() => {
        fetch('/posts/meta.json')
            .then((resp) => resp.json())
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

    const updateHandler = (e) => {
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
    const addHandler = (e) => {
        const options = {
            method: 'POST',
            body: JSON.stringify({
                meta: selectedPostMeta,
                selectedPost,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        fetch('http://localhost:4000/api/posts', options)
            .then((resp) => resp.text())
            .then(() => alert('Added'))
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
                        <label htmlFor='postDescription' className='form-label'>
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
                            ref={taRef}
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
                    <div className='mb-3'>
                        <FileUpload
                            onSuccess={(resp) => {
                                const textarea = taRef.current;
                                const start = textarea.selectionStart;
                                const end = textarea.selectionEnd;
                                const currentValue = textarea.value;
                                const value = '![](' + resp.filename + ')';
                                // const value = resp.filename;

                                // Insert the value at the cursor position
                                const newValue =
                                    currentValue.substring(0, start) +
                                    value +
                                    currentValue.substring(end);

                                // Update the value of the textarea
                                // textarea.value = newValue;
                                // textarea.setSelectionRange(
                                //     start + value.length,
                                //     start + value.length
                                // );

                                setSelectedPost(newValue);
                            }}
                            onError={console.log}
                        />
                    </div>
                    <div className='mb-3'>
                        <button
                            type='button'
                            onClick={updateHandler}
                            className='btn btn-primary'
                        >
                            Update
                        </button>
                        <button
                            type='button'
                            onClick={addHandler}
                            className='btn btn-primary'
                        >
                            Add as new
                        </button>
                    </div>
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
        minHeight: 100,
        maxHeight: 100,
    },
    postContent: {
        minHeight: 250,
        maxHeight: 250,
    },
};
