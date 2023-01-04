import React from 'react';
import Footer from './Footer';
import Header from './Header';
const ErrorPage = () => {
    return (
        <>
            <Header />
            <div style={styles.mainBody} className='text-center text-danger'>
                <h3>Whoops!</h3>
                <p>The URL you are trying to visit does not exist.</p>
            </div>
            <Footer />
        </>
    );
};

export default ErrorPage;
const styles = {
    mainBody: {
        minHeight: 650,
    },
};
