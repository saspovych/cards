<template>
	<div class="settings_wrapper">
		<label for="title">Заголовок карточек</label>
		<input v-model="settings['Заголовок']" @input="localStor" id="title" type="text" placeholder="Заголовок карточек">
		<label for="text">Содержимое карточек</label>
		<input v-model="settings['Описание']" @input="localStor" id="text" type="text" placeholder="Текст карточек">
		<label for="number">Количество карточек</label>
		<input v-model="settings['Количество']" @input="isNumber" id="number" type="text" placeholder="Количество карточек">
		<label for="dnd">Drag 'n' Drop</label>
		<select v-model="settings['Включено перетягивание карточек']" @change="localStor" id="dnd">
			<option :value="true">Можно перетаскивать</option>
			<option :value="false">Нельзя перетаскивать</option>
		</select>
		<button @click="download">Скачать настройки</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				settings: {
					'Заголовок': '',
					'Описание': '',
					'Количество': '',
					'Включено перетягивание карточек': false,
				}
			}
		},
		methods: {
			localStor() {
				this.settings['Включено перетягивание карточек'] = !!this.settings['Включено перетягивание карточек'];
				localStorage.setItem('settings', JSON.stringify(this.settings));
			},
			isNumber() {
				this.settings['Количество'] = this.settings['Количество'].replace(/\D/g, "");
				localStorage.setItem('settings', JSON.stringify(this.settings));
			},
			download() {
				download(JSON.stringify(this.settings), "settings.json", "json");
			},
		},
		mounted() {
			if(JSON.parse(localStorage.getItem('settings'))) {
				this.settings = JSON.parse(localStorage.getItem('settings'));
			} else {
				localStorage.setItem('settings', JSON.stringify(this.settings));
			}
		}
	}
</script>

<style scoped>
.settings_wrapper {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 40%;
	margin: 0 auto;
}

label {
	margin: 15px 0 5px;

	font-size: 18px;
}

input {
	padding: 5px 10px;
	width: 100%;

	border: 2px solid gray;
	border-radius: 5px;

	font-size: 15px;
}

input:focus {
	outline: none;
	border: 2px solid black;
}

select {
	padding: 5px 10px;
	width: 100%;

	border: 2px solid gray;
	outline: none;
	border-radius: 5px;

	font-size: 15px;
}

button {
	align-self: center;
	margin-top: 50px;
	padding: 5px 10px;

	border: 2px solid gray;
	border-radius: 5px;
	background-color: white;

	font-size: 18px;

	transition: all 0.2s ease;

	cursor: pointer;
}

button:hover {
	background-color: gray;
	color: white;
}
</style>