import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import { wrapWithMainLayout, wrapWithAuthLayout } from './wrapWithLayout';

const HomePage = lazy(() => import('../pages/homePage'));
const Login = lazy(() => import('../pages/signIn'));
const Mine = lazy(() => import('../pages/privatePage/mine'));
const Settings = lazy(() => import('../pages/privatePage/settings'));
const State = lazy(() => import('../pages/privatePage/state'));
const NotFound = lazy(() => import('../pages/notFound'));

const routesConfig: RouteObject[] = [
    {
        path: '/',
        element: wrapWithMainLayout(HomePage),
    },
    {
        path: '/login',
        element: wrapWithMainLayout(Login),
    },
    {
        path: '/privatePage',
        element: (
            <PrivateRoute>
                {wrapWithMainLayout(Mine)}
            </PrivateRoute>
        ),
        children: [
            {
                path: 'settings',
                element: wrapWithMainLayout(Settings),
            },
            {
                path: 'state',
                element: wrapWithMainLayout(State),
            },
        ],
    },
    {
        path: '*',
        element: wrapWithMainLayout(NotFound),
    },
];

export default routesConfig;
