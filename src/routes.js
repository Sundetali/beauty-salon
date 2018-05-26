import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Content from './components/Content.vue';
import Kontakty from './components/Kontakti.vue';
import SignUp from './components/Signup.vue';
import Vhod from './components/Vhod.vue';
import ForgotPassword from './components/ForgotPassword.vue';
import Salon from './components/Salon.vue';

const routes = [
	{
		path: '',
		redirect: {name: 'content'}
	},
	{
		name: 'content',
		path: '/main',
		component: Content
	},
	{
		path: '/kontakty',
		component: Kontakty
	},
	{
		path: '/sign-up',
		component: SignUp,
	},
	{
		path: '/vhod',
		component: Vhod,
	},
	{
		path: '/forgot-password',
		component: ForgotPassword,
	},
	{
		path: '/salon/:id/reservations',
		component: Salon,
	},
	{
		path: '*',
		components: 'E404'
	}
];

export const router = new VueRouter({
	routes,
	mode: 'history'
});
