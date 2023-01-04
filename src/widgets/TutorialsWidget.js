import Markdown from 'markdown-to-jsx';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const TutorialsWidget = () => {
    const [tutorials, setTutorials] = useState([]);
    const [currentTutorialContent, setCurrentTutorialContent] = useState('');
    let { location, source } = useParams();

    useEffect(() => {
        fetch('/tutorials/meta.json')
            .then((resp) => resp.json())
            .then(setTutorials);
    }, []);

    useEffect(() => {
        if (!location && tutorials[0]) {
            console.log('tutorials.length', tutorials.length);
            if (tutorials && tutorials.length) {
                location = tutorials[0].location;
                source = tutorials[0].toc[0].source;
            } else {
                return;
            }
        }

        if (!source) {
            if (tutorials[0]) {
                source = tutorials[0].toc[0].source;
                fetch(`/tutorials/${location}/${source}.md`)
                    .then((resp) => resp.text())
                    .then(setCurrentTutorialContent);
            }
        } else {
            fetch(`/tutorials/${location}/${source}.md`)
                .then((resp) => resp.text())
                .then(setCurrentTutorialContent);
        }
    }, [source, location, tutorials]);

    const tutorialsJsx = tutorials.map((t) => (
        <li style={styles.li} key={t.id}>
            <h5>{t.title}</h5>
            <ul>
                {t.toc.map((c) => (
                    <li style={styles.li} key={c.id}>
                        <Link
                            className='no-underline'
                            to={'/tutorials/' + t.location + '/' + c.source}
                        >
                            {c.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </li>
    ));
    return (
        <div>
            <div className='row'>
                <div className='col'>
                    <ul>{tutorialsJsx}</ul>
                </div>
                <div className='col-7'>
                    <Markdown>{currentTutorialContent}</Markdown>
                </div>
            </div>
        </div>
    );
};

export default TutorialsWidget;

const styles = {
    li: {
        paddingBottom: 15,
    },
};
