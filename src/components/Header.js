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
                    Posts
                </Link>{' '}
                |
                <a
                    href='https://snippets-3d494.firebaseapp.com'
                    target='_blank'
                    rel='noreferrer'
                    className='no-underline'
                >
                    Snippets
                </a>
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
