import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import HomePage from './components/HomePage';
import ErrorPage from './components/ErrorPage';
import Posts from './components/Posts';
import Tutorials from './components/Tutorials';
import AdminPage from './components/admin/AdminPage';
import NewTutorial from './components/admin/NewTutorial';
import ListTutorials from './components/admin/ListTutorials';
import NewPost from './components/admin/NewPost';
import ListPosts from './components/admin/ListPosts';
import CurrentTutorial from './components/CurrentTutorial';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '',
                element: <HomePage />,
            },
            {
                path: '/posts/:source?',
                element: <Posts />,
            },
            {
                path: '/tutorials',
                element: <Tutorials />,
                children: [
                    {
                        path: ':location/:source?',
                        element: <CurrentTutorial />,
                    },
                ],
            },
        ],
        errorElement: <ErrorPage />,
    },
    {
        path: '/admin',
        element: <AdminPage />,
        children: [
            {
                path: 'tutorials',
                children: [
                    {
                        path: 'new',
                        element: <NewTutorial />,
                    },
                    {
                        path: 'list',
                        element: <ListTutorials />,
                    },
                ],
            },
            {
                path: 'posts',
                children: [
                    {
                        path: 'new',
                        element: <NewPost />,
                    },
                    {
                        path: 'list',
                        element: <ListPosts />,
                    },
                ],
            },
        ],
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
