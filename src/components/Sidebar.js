import React from 'react';
import PostsWidget from '../widgets/PostsWidget';

const Sidebar = () => {
    return (
        <>
            <div style={styles.container}>
                <PostsWidget />
            </div>
        </>
    );
};

export default Sidebar;

const styles = {
    container: {
        paddingRight: 20,
    },
};
