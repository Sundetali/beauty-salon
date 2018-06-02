import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import MainContent from './components/MainContent.vue';
import Contacts from './components/Contacts.vue';
import SignUp from './components/Signup.vue';
import Signin from './components/Signin.vue';
import ForgotPassword from './components/ForgotPassword.vue';
import Salon from './components/Salon.vue';
import Manual from './components/Manual.vue';
import SalonData from './components/SalonData.vue';



const routes = [
	{
		path: '',
		redirect: {name: 'main'}
	},
	{
		name: 'main',
		path: '/main',
		component: MainContent,
		/*beforeEnter(to, from, next) {

		},*/
	},
	{
		name: 'contacts',
		path: '/contacts',
		component: Contacts
	},
	{
		name: 'signup',
		path: '/sign-up',
		component: SignUp,
	},
	{
		name: 'signin',
		path: '/signin',
		component: Signin,
	},
	{
		name: 'forgotpassword',
		path: '/forgot-password',
		component: ForgotPassword,
	},
	{
		name: 'salon',
		path: '/salon/:id/reservations',
		component: Salon,
	},
	{
		name: 'manual',
		path: '/manual',
		component: Manual,
	},
	{
		name: 'salondata',
		path: '/salon/:nameId',
		component: SalonData,
	},
];

export const router = new VueRouter({
	routes,
	mode: 'history'
});
