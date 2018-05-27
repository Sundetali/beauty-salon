import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import salony from './module/salony.js';
import reservations from './module/reservations.js';

export const store = new Vuex.Store({
	modules: {
		salony,
		reservations,
	}
})