import React from 'react';
import CourseList from './CourseList';
import Sidebar from './Sidebar';
const HomePage = () => {
    return (
        <div className='row'>
            <div className='col-xs-12 col-sm-4 ' style={styles.sidebar}>
                <Sidebar />
            </div>
            <div className='col-xs-12 col-sm-8 ' style={styles.courseList}>
                <CourseList />
            </div>
        </div>
    );
};

export default HomePage;
const styles = {
    postsWidgetContainer: {
        marginRight: 20,
    },
    sidebar: {
        height: '90vh',
        overflow: 'auto',
    },
    courseList: {
        height: '90vh',
        overflow: 'auto',
    },
};
