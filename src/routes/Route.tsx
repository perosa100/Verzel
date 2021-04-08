import React from 'react'
import { useSelector } from 'react-redux'
import {
    Redirect,
    Route as ReactDomRoute,
    RouteProps as ReactDOMRouterProps
} from 'react-router-dom'
import { ADD_USERS } from '../store/reducers/type'

interface RouteProps extends ReactDOMRouterProps {
    isPrivate?: boolean
    component: React.ComponentType
}

const Route: React.FC<RouteProps> = ({
    isPrivate = false,
    component: Component,
    ...rest
}) => {
    const tasks = useSelector((state: ADD_USERS) => state)

    const user = tasks.logger.id

    return (
        <ReactDomRoute
            {...rest}
            render={({ location }) => {
                return isPrivate === !!user ? (
                    <Component />
                ) : (
                    <Redirect
                        to={{
                            pathname: isPrivate ? '/signin' : '/task',
                            state: { from: location }
                        }}
                    />
                )
            }}
        />
    )
}

export default Route
