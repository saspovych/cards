import { createRouter, createWebHistory } from 'vue-router'
import SettingsView from '../views/SettingsView.vue'
import CardsView from '../views/CardsView.vue'

const routes = [
	{
		path: '/',
		component: SettingsView
	},
	{
		path: '/cards',
		component: CardsView
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
