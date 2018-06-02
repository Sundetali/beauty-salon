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
						name: "Кератиновое выпрямление волос",
						minute: 80,
						price: "3000 - 8000T",
						masters: {
							master2: "Nastya",
							master3: "Natasha",
						},
					},
					{
						name: "Лаконы 2",
						minute: 60,
						price: "10000 T",
						masters: {
							master1: "Anna",
							master3: "Natasha",
						},
					},
					{
						name: "Мытье головы",
						minute: 75,
						price: "6000 - 7000 T",
						masters: {
							master3: "Natasha",
						},
					},
					{
						name: "Кератиновое выпрямление волос 2",
						minute: 30,
						price: "6000 T",
						masters: {
							master3: "Natasha",
						},
					},
					{
						name: "Укладка",
						minute: 90,
						price: "6000 T",
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
						name: "Аквариумное наращивание ногтей",
						minute: 45,
						price: "4000 T",
						masters: {
							master1: "Natalya",
							master2: "Larisa",
							master3: "Tanya",
						},
					},
					{
						name: "Акриловое наращивание ногтей под лак",
						minute: 70,
						price: "2000 T",
						masters: {
							master1: "Natalya",
							master2: "Larisa",
						},
					},
					{
						name: "Акриловое наращивание с гелевым покрытием",
						minute: 120,
						price: "2500 T",
						masters: {
							master1: "Natalya",
							master3: "Tanya"
						},
					},
					{
						name: "Дизайн ногтей",
						minute: 60,
						price: "100 T",
						masters: {
							master3: "Tanya",
						},
					},
					{
						name: "Коррекция нарощеных ногтей 'Аквариум'",
						minute: 80,
						price: "4000 T - 10000 T",
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
						name: "Массаж лица",
						minute: 60,
						price: "6000 T - 12000 T",
						masters: {
							master1: "Zarina",
							master2: "Kamilla",
							master3: "Gaukhar",
						},
					},
				],
			},
			{
				name: "Визаж",
				types: 
				[
					{
						name: "Коррекция бровей",
						minute: 60,
						price: "1500 T",
						masters: {
							master1: "Maria",
							master2: "Natasha",
							master3: "Anna",
						},
					},
					{
						name: "Ламинирование ресниц",
						minute: 60,
						price: "7000 T",
						masters: {
							master1: "Maria",
							master2: "Natasha",
						},
					},
					{
						name: "Микроблейдинг бровей",
						minute: 120,
						price: "15000 T",
						masters: {
							master2: "Natasha",
							master3: "Anna",
						},
					},
					{
						name: "Микроблейдинг бровей. Коррекция",
						minute: 120,
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
		clearSelectedServices(state) {
			return state.selectedServices.length = 0;
		},
		clearMaster(state) {
			return state.selectedMaster = '';
		}

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
		clearSelectedServices(store) {
			return store.commit('clearSelectedServices');
		},
		clearMaster(store) {
			return store.commit('clearMaster');
		}
	}
}