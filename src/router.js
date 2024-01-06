import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: () => import('./pages/home.vue') },
    { path: '/projects', component: () => import('./pages/projects.vue') },
    { path: '/writing', component: () => import('./pages/writingApp.vue') }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
