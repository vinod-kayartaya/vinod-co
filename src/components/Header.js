import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className='text-center'>
                <h1 style={styles.h1}>
                    Learn with <em>Vinod</em>
                </h1>
                <Link className='no-underline' to='/'>
                    Home
                </Link>{' '}
                |
                <Link className='no-underline' to='/tutorials'>
                    Tutorials
                </Link>{' '}
                |
                <Link className='no-underline' to='/posts'>
                    posts
                </Link>
                <hr />
            </div>
        </>
    );
};

export default Header;

const styles = {
    h1: {
        marginTop: 20,
        marginBottom: 20,
    },
};
