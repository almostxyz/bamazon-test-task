import React, { ReactNode } from 'react'
import { Redirect, Route } from 'react-router-dom'

interface PrivateRouteProps {
    path: string,
    Component: React.FC,
    redirectTo: string,
    props?: any
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ path, Component, redirectTo, props }) => {
    return (
        <Route path={path}>
            {
                localStorage.getItem('logged_in') === 'true' ?
                    <Component {...props} /> :
                    <Redirect to={redirectTo} />
            }
        </Route>
    )
}