import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './pages/home.vue';
import Projects from './pages/projects.vue';
import WritingMy from "./pages/writingApp.vue";

Vue.use(VueRouter);

const routes = [
    { path: '/', component: App },
    { path: '/projects', component: Projects },
    { path: '/writing', component: WritingMy }
];

const router = new VueRouter({
    routes,
    mode: 'history' // enable HTML5 history mode
});

export default router;
