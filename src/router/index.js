import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../home/HomePage.vue';
import TopNavBar from '../nav/TopNavbarHome.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'Home',
        components: {
            default: HomePage,
            topNav: TopNavBar,
        }
    }],
});