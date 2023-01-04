import React, { useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';
import { Link, useParams } from 'react-router-dom';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const CurrentTutorial = () => {
    const [tutorial, setTutorial] = useState({});
    const [currentTutorialContent, setCurrentTutorialContent] = useState('');
    const { source, location } = useParams();
    const [prevSource, setPrevSource] = useState('');
    const [nextSource, setNextSource] = useState('');
    const [prevTitle, setPrevTitle] = useState('');
    const [nextTitle, setNextTitle] = useState('');

    console.log('source, location', source, location);

    useEffect(() => {
        fetch(`/tutorials/meta.json`)
            .then((resp) => resp.json())
            .then(
                (tutorials) => tutorials.filter((t) => t.slug === location)[0]
            )
            .then(setTutorial);
    }, [location]);

    useEffect(() => {
        if (tutorial.toc) {
            console.log(tutorial.toc);
            const index = tutorial.toc.findIndex((t) => t.source === source);

            if (index > 0) {
                setPrevSource(tutorial.toc[index - 1].source);
                setPrevTitle(tutorial.toc[index - 1].title);
            } else {
                setPrevTitle('');
            }
            if (index < tutorial.toc.length - 1) {
                setNextSource(tutorial.toc[index + 1].source);
                setNextTitle(tutorial.toc[index + 1].title);
            } else {
                setNextTitle('');
            }
        }

        fetch(`/tutorials/${location}/${source}.md`)
            .then((resp) => resp.text())
            .then((text) => {
                return text.startsWith('<!DOCTYPE html>')
                    ? `<div style={styles.mainBody} className='text-center text-danger'>
                <h3>Whoops!</h3>
                <p>The URL you are trying to visit does not exist.</p>
            </div>`
                    : text;
            })
            .then(setCurrentTutorialContent);
    }, [source, tutorial, location]);

    return (
        <div style={styles.container}>
            {!source && (
                <>
                    <div className='row'>
                        <div className='col-sm'></div>
                        <div className='col-sm-8'>
                            <h2>{tutorial.title}</h2>
                            <ul>
                                {tutorial.toc &&
                                    tutorial.toc.map((t) => (
                                        <li style={styles.li} key={t.id}>
                                            <Link
                                                className='no-underline'
                                                to={`/tutorials/${tutorial.location}/${t.source}`}
                                            >
                                                {t.title}
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                        <div className='col-sm'></div>
                    </div>
                </>
            )}

            {source && (
                <>
                    <div className='row' style={styles.nav}>
                        <div className='col'>
                            {prevTitle && (
                                <Link
                                    className='no-underline'
                                    to={`/tutorials/${location}/${prevSource}`}
                                >
                                    <span className='d-none d-sm-block'>
                                        <LeftOutlined /> {prevTitle}
                                    </span>
                                    <span className='d-block d-sm-none'>
                                        <LeftOutlined />
                                    </span>
                                </Link>
                            )}
                        </div>
                        <div className='col text-center'>
                            <Link
                                className='no-underline'
                                to={`/tutorials/${location}`}
                            >
                                Back to TOC
                            </Link>
                        </div>
                        <div className='col text-end'>
                            {nextTitle && (
                                <Link
                                    className='no-underline'
                                    to={`/tutorials/${location}/${nextSource}`}
                                >
                                    <span className='d-none d-sm-block'>
                                        {nextTitle} <RightOutlined />
                                    </span>
                                    <span className='d-block d-sm-none'>
                                        <RightOutlined />
                                    </span>
                                </Link>
                            )}
                        </div>
                    </div>
                    <Markdown>{currentTutorialContent}</Markdown>
                </>
            )}
        </div>
    );
};

export default CurrentTutorial;

const styles = {
    container: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    li: {
        padding: '10px 0',
    },
    nav: {
        padding: '0 0 30px 0',
    },
};
