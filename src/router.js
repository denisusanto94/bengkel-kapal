import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './components/page/Dashboard';
import Tugboat from './components/page/Tugboat';
import Spareparts from './components/page/Spareparts';

Vue.use(Router);


const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Dashboard
        },
        {
            path: '/dashboard',
            name:'Dashboard',
            component: Dashboard
        },
        {
            path: '/tugboat',
            name:'Tugboat',
            component: Tugboat
        },
        {
            path: '/spare-parts',
            name:'Spareparts',
            component: Spareparts
        },
    ]
});

export default router;