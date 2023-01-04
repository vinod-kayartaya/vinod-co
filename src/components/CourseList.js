import React, { useEffect, useState } from 'react';
import './CourseList.css';

export default function CourseList() {
    const [content, setContent] = useState([]);

    useEffect(() => {
        fetch('/courses/course-data.json')
            .then((resp) => resp.json())
            .then((data) => data.content)
            .then(setContent);
    }, []);

    return (
        <>
            <div className='container'>
                {content.length > 0 && (
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='text-center h3'>
                                Get my courses on <em>Udemy</em> for maximum
                                discount!
                            </h3>
                        </div>
                        {content.map((c, index) => (
                            <div
                                key={index}
                                className='col-sm-6 col-xs-12 card'
                            >
                                <a
                                    href={c.courseUrl}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <img
                                        className='card-img-top'
                                        src={c.imageUrl}
                                        alt={c.altText}
                                    />
                                </a>
                                <div className='card-body'>
                                    <h5 className='text-center card-title'>
                                        {c.title}
                                    </h5>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
