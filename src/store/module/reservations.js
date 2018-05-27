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
						price: "4000 T",
						masters: {
							master1: "Anna",
							master2: "Nastya",
							master3: "Natasha",
						},
					},
					{
						name: "bla bla",
						minute: 60,
						price: "4000 T",
						masters: {
							master2: "Nastya",
							master3: "Natasha",
						},
					},
					{
						name: "Лаконы",
						minute: 60,
						price: "4000 T",
						masters: {
							master1: "Anna",
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
					},
					{
						name: "Лаконы",
						minute: 60,
						price: "4000 T",
					},
					{
						name: "Лаконы",
						minute: 60,
						price: "4000 T",
					},
					{
						name: "Кератиновое выпрямление волос",
						minute: 60,
						price: "4000 T",
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
					},
					{
						name: "Лаконы",
						minute: 60,
						price: "4000 T",
					},
					{
						name: "Лаконы",
						minute: 60,
						price: "4000 T",
					},
					{
						name: "Кератиновое выпрямление волос",
						minute: 60,
						price: "4000 T",
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
					},
					{
						name: "Лаконы",
						minute: 60,
						price: "4000 T",
					},
					{
						name: "Лаконы",
						minute: 60,
						price: "4000 T",
					},
					{
						name: "Кератиновое выпрямление волос",
						minute: 60,
						price: "4000 T",
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
					},
					{
						name: "Лаконы",
						minute: 60,
						price: "4000 T",
					},
					{
						name: "Лаконы",
						minute: 60,
						price: "4000 T",
					},
					{
						name: "Кератиновое выпрямление волос",
						minute: 60,
						price: "4000 T",
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
					},
					{
						name: "Лаконы",
						minute: 60,
						price: "4000 T",
					},
					{
						name: "Лаконы",
						minute: 60,
						price: "4000 T",
					},
					{
						name: "Кератиновое выпрямление волос",
						minute: 60,
						price: "4000 T",
					},
				],
			},
		],
		selectedServices: [],
	},
	getters: {
		itemsReservation(state) {
			return state.itemsReservation;
		},
		selectedServices(state) {
			return state.selectedServices;
		}
	},
	mutations: {
		addType(state, data) {
			return state.selectedServices.push(data);
		},
		deleteService(state, index) {
			return state.selectedServices.splice(index, 1);
		}
	},
	actions: {
		addType(store, data) {
			return store.commit('addType', data);
		},
		deleteService(store, index) {
			return store.commit('deleteService', index);
		}
	}
}