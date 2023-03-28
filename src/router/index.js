import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from 'Views/Home.vue'

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/about',
        component: () => import('Views/About.vue'),
    },
    {
        path: '/users/:username',
        component: () => import('Views/nest/User.vue'),
        children: [
            { path: '', component: () => import('Views/nest/UserHome.vue') },
            { path: 'posts', component: () => import('Views/nest/UserPosts.vue') },
            { path: 'profile', component: () => import('Views/nest/UserProfile.vue') },
        ],
    },
];

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: import.meta.env.BASE_URL,
    routes,
});

export default router;