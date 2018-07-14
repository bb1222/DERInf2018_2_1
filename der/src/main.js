// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.config.productionTip = false

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import VueLocalization from 'vuejs-localization'

VueLocalization.requireAll(require.context('./lang', true, /\.js$/));
Vue.use(VueLocalization);

import store from './store'
import Lang from './Lang'
import Game from './components/Game'
import Result from './components/DialogResult'
import Starter from './components/Starter'
import Intro from './components/Intro'
import Error from './components/Error'

require('vue2-animate/dist/vue2-animate.css')

import LoadingImage from './components/model/LoadingImage'
Vue.component('loading-image', LoadingImage);

import Btn from './components/model/Btn'
Vue.component('m-btn', Btn);

require('vue-apparate');
VueApparate.init(Vue);

const router = new VueRouter({
    routes: [
        {
            path: '/:lang',
            component: Lang,
            children: [
                {path: '', name: 'start', component: Starter},
                {path: 'intro', name: 'intro', component: Intro},
                {path: 'game/:gameId', name: 'game', component: Game},
                {path: 'res', name: 'res', component: Result},
                {path: '*', name: 'error', component: Error}
            ]
        }
    ]
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
})

// document.onselectstart = noselect;
// document.oncontextmenu = noselect;
//
// function noselect() {
//     return false;
// };
