export default {
	namespaced: true,
	state: {
		itemsReservation: 
		[
			{
				name: "Волосы",
				types: 
				[
					{
						name: "Лаконы",
						minute: 60,
						price: "4000-9000 T",
						masters: {
							master1: "Anna",
							master2: "Nastya",
							master3: "Natasha",
						},
					},
					{
						name: "bla bla",
						minute: 60,
						price: "3000 - 8000T",
						masters: {
							master2: "Nastya",
							master3: "Natasha",
						},
					},
					{
						name: "Лаконы",
						minute: 60,
						price: "10000 T",
						masters: {
							master1: "Anna",
							master3: "Natasha",
						},
					},
					{
						name: "Кератиновое выпрямление волос",
						minute: 60,
						price: "6000 - 7000 T",
						masters: {
							master3: "Natasha",
						},
					},
					{
						name: "Кератиновое выпрямление волос",
						minute: 60,
						price: "4000 T",
						masters: {
							master3: "Natasha",
						},
					},
					{
						name: "Кератиновое выпрямление волос",
						minute: 60,
						price: "4000 T",
						masters: {
							master3: "Natasha",
						},
					},
				],
			},
			{
				name: "Манюкюр и Педикюр",
				types: 
				[
					{
						name: "Лаконы",
						minute: 60,
						price: "4000 T",
						masters: {
							master1: "Natalya",
							master2: "Larisa",
							master3: "Tanya",
						},
					},
					{
						name: "Лаконы",
						minute: 60,
						price: "4000 T",
						masters: {
							master1: "Natalya",
							master2: "Larisa",
						},
					},
					{
						name: "Лаконы",
						minute: 60,
						price: "4000 T",
						masters: {
							master1: "Natalya",
							master3: "Tanya"
						},
					},
					{
						name: "Кератиновое выпрямление волос",
						minute: 60,
						price: "4000 T",
						masters: {
							master3: "Tanya",
						},
					},
					{
						name: "Кератиновое выпрямление волос",
						minute: 60,
						price: "4000 T",
						masters: {
							master3: "Tanya",
						},
					},
				],
			},
			{
				name: "Массаж",
				types: 
				[
					{
						name: "Лаконы",
						minute: 60,
						price: "4000 T",
						masters: {
							master1: "Zarina",
							master2: "Kamilla",
							master3: "Gaukhar",
						},
					},
					{
						name: "Лаконы",
						minute: 60,
						price: "4000 T",
						masters: {
							master1: "Zarina",
							master2: "Kamilla",
						},
					},
					{
						name: "Лаконы",
						minute: 60,
						price: "4000 T",
						masters: {
							master2: "Kamilla",
							master3: "Gaukhar",
						},
					},
					{
						name: "Кератиновое выпрямление волос",
						minute: 60,
						price: "4000 T",
						masters: {
							master1: "Zarina",
							master2: "Kamilla",
						},
					},
				],
			},
			{
				name: "Визаж",
				types: 
				[
					{
						name: "Лаконы",
						minute: 60,
						price: "4000 T",
						masters: {
							master1: "Maria",
							master2: "Natasha",
							master3: "Anna",
						},
					},
					{
						name: "Лаконы",
						minute: 60,
						price: "4000 T",
						masters: {
							master1: "Maria",
							master2: "Natasha",
						},
					},
					{
						name: "Лаконы",
						minute: 60,
						price: "4000 T",
						masters: {
							master2: "Natasha",
							master3: "Anna",
						},
					},
					{
						name: "Кератиновое выпрямление волос",
						minute: 60,
						price: "4000 T",
						masters: {
							master1: "Maria",
							master2: "Natasha",
						},
					},
				],
			},
			{
				name: "Депипляция и жпиляция",
				types: 
				[
					{
						name: "Лаконы",
						minute: 60,
						price: "4000 T",
						masters: {
							master1: "Alikhan",
							master2: "Nurs",
							master3: "Yelnar",
						},

					},
					{
						name: "Лаконы",
						minute: 60,
						price: "4000 T",
						masters: {
							master1: "Alikhan",
							master2: "Nurs",
						},
					},
					{
						name: "Лаконы",
						minute: 60,
						price: "4000 T",
						masters: {
							master2: "Nurs",
							master3: "Yelnar",
						},
					},
					{
						name: "Кератиновое выпрямление волос",
						minute: 60,
						price: "4000 T",
						masters: {
							master1: "Alikhan",
							master2: "Nurs",
							master3: "Yelnar",
						},
					},
				],
			},
			{
				name: "Косметология",
				types: 
				[
					{
						name: "Лаконы",
						minute: 60,
						price: "4000 T",
						masters: {
							master1: "Alikhan",
							master2: "Nurs",
							master3: "Yelnar",
						},
					},
					{
						name: "Лаконы",
						minute: 60,
						price: "4000 T",
						masters: {
							master1: "Alikhan",
							master3: "Yelnar",
						},
					},
					{
						name: "Лаконы",
						minute: 60,
						price: "4000 T",
						masters: {
							master1: "Alikhan",
							master2: "Nurs",
						},
					},
					{
						name: "Кератиновое выпрямление волос",
						minute: 60,
						price: "4000 T",
						masters: {
							master1: "Alikhan",
							master2: "Nurs",
							master3: "Yelnar",
						},
					},
				],
			},
		],
		selectedServices: [],
		selectedMaster: '',
		idSalon: '',
	},
	getters: {
		itemsReservation(state) {
			return state.itemsReservation;
		},
		selectedServices(state) {
			return state.selectedServices;
		},
		selectedMaster(state) {
			return state.selectedMaster;
		},
		idSalon(state) {
			return state.idSalon;
		}
	},
	mutations: {
		addType(state, data) {
			return state.selectedServices.push(data);
		},
		deleteService(state, index) {
			return state.selectedServices.splice(index, 1);
		},
		addMaster(state, masterName) {
			return state.selectedMaster = masterName;
		},
		deleteMaster(state) {
			return state.selectedMaster = '';
		},
		addData(state, id) {
			return state.idSalon = id;
		},
		clearServices(state) {
			return state.selectedServices = [];
		},
		clearMaster(state) {
			return state.selectedMaster = '';
		},
	},
	actions: {
		addType(store, data) {
			return store.commit('addType', data);
		},
		deleteService(store, index) {
			return store.commit('deleteService', index);
		},
		addMaster(store, masterName) {
			return store.commit('addMaster', masterName);
		},
		deleteMaster(store) {
			return store.commit('deleteMaster');
		},
		addData(store, id) {
			return store.commit('addData', id);
		},
		clearServices(store) {
			return store.commit('clearServices');
		},
		clearMaster(store) {
			return store.commit('clearMaster');
		}
	}
}