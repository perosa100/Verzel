import React from 'react'
import { Switch } from 'react-router-dom'
import { Home } from '../pages/Home'
import { SignIn } from '../pages/SignIn'
import { Task } from '../pages/Task'
import Route from './Route'

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/task" component={Task} isPrivate />
    </Switch>
)
export default Routes
