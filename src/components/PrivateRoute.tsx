import React from 'react'
import { Redirect, Route } from 'react-router-dom'

interface PrivateRouteProps {
    path: string,
    Component: React.FC,
    redirectTo: string
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ path, Component, redirectTo }) => {
    return (
        <Route path={path}>
            {
                localStorage.getItem('logged_in') === 'true' ?
                    <Component /> :
                    <Redirect to={redirectTo} />
            }
        </Route>
    )
}