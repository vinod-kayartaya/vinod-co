import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import CurrentPost from './CurrentPost';

const Posts = () => {
    const { source } = useParams();

    return (
        <div className='row'>
            {source && (
                <>
                    <div className='col-md-8 col-xs-12' style={styles.outlet}>
                        <CurrentPost />
                    </div>
                    <div className='col-md col-xs-12' style={styles.sidebar}>
                        <Sidebar />
                    </div>
                </>
            )}

            {!source && (
                <div className='col' style={styles.sidebar}>
                    <Sidebar />
                </div>
            )}
        </div>
    );
};

export default Posts;
const styles = {
    sidebar: {
        height: '90vh',
        overflow: 'auto',
    },
    outlet: {
        height: '90vh',
        overflow: 'auto',
    },
};
