import Vue from 'vue';
import Vuex from 'vuex';
import articleFeedsModule from './modules/articleFeeds';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        articleFeeds: articleFeedsModule,
    }
});