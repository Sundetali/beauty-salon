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
				masters: [
						{
							master1: 'Master1',
							master2: 'Master2',
							master3: 'Master3',
						}
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
				masters: [
						{
							master1: 'Master1',
							master2: 'Master2',
							master3: 'Master3',
						}
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
				masters: [
						{
							master1: 'Master1',
							master2: 'Master2',
							master3: 'Master3',
						}
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
				masters: [
						{
							master1: 'Master1',
							master2: 'Master2',
							master3: 'Master3',
						}
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
				masters: [
						{
							master1: 'Master1',
							master2: 'Master2',
							master3: 'Master3',
						}
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
				masters: [
						{
							master1: 'Master1',
							master2: 'Master2',
							master3: 'Master3',
						}
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