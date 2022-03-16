<template>
	<div>
		<div class="card_list">
			<div
				class="card_item"
				v-for="card in cards"
				:id="card['Id']"
				:style="card['Background-color']"
				draggable="true"
				:ondragover = "allowDrop"
				:ondragstart = "drag"
				:ondrop = "drop"
			>
				<h3 class="card_title">{{card['Заголовок']}}</h3>
				<p class="card_text">{{card['Описание']}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				settings: JSON.parse(localStorage.getItem('settings')),
				cards: {}
			}
		},
		methods: {
			allowDrop() {
				if (this.settings['Включено перетягивание карточек']) {
					event.preventDefault();
				}
			},
			drag() {
				if (this.settings['Включено перетягивание карточек']) {
					event.dataTransfer.setData('fromIndex', event.target.id);
				}
			},
			drop() {
				if (this.settings['Включено перетягивание карточек']) {
					let cardId = event.target.parentElement.id;
					if (event.target.id) {
						cardId = event.target.id;
					}
					const fromIndex = event.dataTransfer.getData('fromIndex');

					let temp = this.cards[fromIndex];
					this.cards[fromIndex] = this.cards[cardId];
					this.cards[cardId] = temp;

					let tempId = this.cards[fromIndex]['Id'];
					this.cards[fromIndex]['Id'] = this.cards[cardId]['Id'];
					this.cards[cardId]['Id'] = tempId;
				}
			}
		},
		mounted() {
			for (let i = 0; i < this.settings['Количество']; i++) {
				this.cards[i] = {
					"Заголовок": this.settings['Заголовок'],
					"Описание": this.settings['Описание'],
					"Id": i,
					"Background-color": "background-color: rgb(" + Math.floor(Math.random() * 256) +
																									 "," + Math.floor(Math.random() * 256) +
																									 "," + Math.floor(Math.random() * 256) + ", 0.6)"
				}
			}
		}
	}
</script>

<style scoped>
.card_list {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 15px;
}

.card_item {
	padding: 15px 20px;

	background-color: gray;
}

.card_title {
	font-size: 26px;
}

.card_text {
	font-size: 16px;
	line-height: 18px;
}
</style>