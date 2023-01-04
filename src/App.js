import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import HomePage from './components/HomePage';
import ErrorPage from './components/ErrorPage';
import Posts from './components/Posts';
import Tutorials from './components/Tutorials';
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
        errorElement: <ErrorPage />
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
