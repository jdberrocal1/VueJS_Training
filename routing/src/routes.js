import Home from './components/Home.vue';
import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';

export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/user',
        component: User,
        children: [
            {
                path: '',
                component: UserStart
            },
            {
                path: ':id',
                component: UserDetail
            },
            {
                path: ':id/edit',
                component: UserEdit,
                name: 'userEdit',
                beforeEnter: (to, from, next) => {
                    // this is used to check user authentication and other stuff
                    console.log('before enter to edit view');
                    // here you can pass false to avoid the redirect,
                    // true or nothing to redirect as normal
                    // a location object {path: '/', name: ..., params: {...}} to redirect to other route
                    next(false);  
                }
            }
        ]
    },
    {
        path: '*',
        redirect: '/'
    }
]