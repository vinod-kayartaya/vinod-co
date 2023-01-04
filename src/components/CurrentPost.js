import React, { useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';
import { useParams } from 'react-router-dom';

const CurrentPost = () => {
    const [currentPostContent, setCurrentPostContent] = useState('');

    const { source } = useParams();

    useEffect(() => {
        fetch('/posts/' + source + '.md')
            .then((resp) => resp.text())
            .then((text) => {
                return text.startsWith('<!DOCTYPE html>')
                    ? `<div style={styles.mainBody} className='text-center text-danger'>
                <h3>Whoops!</h3>
                <p>The URL you are trying to visit does not exist.</p>
            </div>`
                    : text;
            })
            .then(setCurrentPostContent);
    }, [source]);

    return (
        <div style={styles.container}>
            <Markdown>{currentPostContent}</Markdown>
        </div>
    );
};

export default CurrentPost;

const styles = {
    container: {
        paddingLeft: 20,
        paddingRight: 20,
    },
};
