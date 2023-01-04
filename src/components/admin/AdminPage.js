import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminPage = () => {
    const [commitMessage, setCommitMessage] = useState('');
    return (
        <>
            <div className='container'>
                <h1>Learn with Vinod</h1>
                <p>Admin options</p>
                <div className='row'>
                    <div className='col-10'>
                        <Link to='/admin/tutorials/new'>New tutorial</Link> |
                        <Link to='/admin/tutorials/list'>List tutorials</Link> |
                        <Link to='/admin/posts/new'>New post</Link> |
                        <Link to='/admin/posts/list'>List posts</Link>
                    </div>
                    <div className='col-2 text-end'>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='commit message'
                            name='commitMessage'
                            value={commitMessage}
                            onChange={(e) => setCommitMessage(e.target.value)}
                        />
                        <button
                            className='btn btn-primary'
                            onClick={() => {
                                fetch(
                                    'http://localhost:4000/api/publish-to-git',
                                    {
                                        method: 'post',
                                        body: JSON.stringify({ commitMessage }),
                                    }
                                ).then(() => alert('Publish to git started'));
                            }}
                        >
                            Publish Site
                        </button>
                    </div>
                </div>
                <hr />
                <Outlet />
            </div>
        </>
    );
};

export default AdminPage;
