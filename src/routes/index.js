import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Loadable from 'react-loadable'
import routesConstants from './routesConstants'

function Loading () {
  return (<></>)
}

const routeHistory = createBrowserHistory()

window.routerHistory = routeHistory

const createRoute = (component) => Loadable({
  loader: () => component,
  loading: Loading
})

const LoginScreen = createRoute(
  import('../pages/LoginPage')
)

const HomeScreen = createRoute(
  import('../pages/HomePage')
)

const ProfileScreen = createRoute(
  import('../pages/ProfilePage')
)

const ChatScreen = createRoute(
  import('../pages/ChatPage')
)

const AppRouter = () => (
    <Router history={routeHistory}>
        <Switch>
            <Route
                path={routesConstants.loginScreen}
                component={LoginScreen}
                exact
            />
            <Route
                path={routesConstants.homeScreen}
                component={HomeScreen}
                exact
            />
            <Route
                path={routesConstants.profileScreen}
                component={ProfileScreen}
                exact
            />
            <Route
                path={routesConstants.chatScreen}
                component={ChatScreen}
                exact
            />
        </Switch>
    </Router>
)

export default AppRouter
