import React from 'react'
import { Redirect, Route } from 'react-router-dom'

interface PrivateRouteProps {
    path: string,
    component: JSX.Element,
    redirectTo: string
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ path, component, redirectTo }) => {
    return (
        <Route path={path}>
            {
                localStorage.getItem('logged_in') === 'true' ?
                    component :
                    <Redirect to={redirectTo} />
            }
        </Route>
    )
}