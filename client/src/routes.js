import Base from './components/Base.js'
import HomePage from './components/HomePage.js'
import LoginPage from './containers/LoginPage.js'
import SignUpPage from './containers/SignUpPage.js'

const routes = {
    component: Base,
    childRoutes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/login',
            component: LoginPage
        },
        {
            path: '/signup',
            component: SignUpPage
        }
    ]
}

export default routes