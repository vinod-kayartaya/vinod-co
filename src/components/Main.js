import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Main = () => (
    <div className='container'>
        <Header />
        <div style={styles.mainBody}>
            <Outlet />
        </div>
        <Footer />
    </div>
);

export default Main;

const styles = {
    mainBody: {
        minHeight: 650,
    },
};
