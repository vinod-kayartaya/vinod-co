import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const Tutorials = () => {
    const [tutorials, setTutorials] = useState([]);

    const { location } = useParams();

    useEffect(() => {
        fetch('/tutorials/meta.json')
            .then((resp) => resp.json())
            .then(setTutorials);
    }, []);

    const tutorialsJsx = tutorials.map((t) => (
        <div key={t.id} className='col-sm-6 col-md-3 col-xs-12'>
            <Link className='no-underline' to={`/tutorials/${t.slug}`}>
                <div className='card'>
                    <img
                        src={`/tutorials/${t.location}/${t.poster}`}
                        alt={t.title}
                        className='card-img-top'
                    />
                    <div className='card-body'>
                        <h5 className='text-center card-title'>{t.title}</h5>
                    </div>
                </div>
            </Link>
        </div>
    ));
    return (
        <>
            {!location && (
                <div className='row' style={styles.tutorialsRow}>
                    {tutorialsJsx}
                </div>
            )}
            <Outlet />
        </>
    );
};

export default Tutorials;

const styles = {
    tutorialsRow: {
        marginBottom: 50,
        justifyContent: 'center',
    },
};
