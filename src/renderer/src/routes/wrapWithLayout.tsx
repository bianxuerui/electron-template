import React, { ReactElement, LazyExoticComponent, Suspense } from 'react';
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';

const SuspenseWrapper = (Component: LazyExoticComponent<React.FC>): ReactElement => (
    <Suspense fallback={<div>Loading...</div>}>
        <Component />
    </Suspense>
);

export const wrapWithMainLayout = (Component: LazyExoticComponent<React.FC>): ReactElement => (
    <MainLayout>{SuspenseWrapper(Component)}</MainLayout>
);

export const wrapWithAuthLayout = (Component: LazyExoticComponent<React.FC>): ReactElement => (
    <AuthLayout>{SuspenseWrapper(Component)}</AuthLayout>
);
