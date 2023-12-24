// router.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './pages/home.vue';
import Projects from './pages/projects.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: App },
    { path: '/projects', component: Projects }
];

const router = new VueRouter({
    routes
});

export default router;