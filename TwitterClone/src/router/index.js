import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		mainMenu: true,
		iconClass: 'fas fa-home'
	},
	{
		path: '/explore',
		name: 'Explore',
		component: Home,
		mainMenu: true,
		iconClass: 'fas fa-search'
	},
	{
		path: '/notifications',
		name: 'Notifications',
		component: Home,
		mainMenu: true,
		iconClass: 'fas fa-bell'
	},
	{
		path: '/messages',
		name: 'Messages',
		component: Home,
		mainMenu: true,
		iconClass: 'fas fa-envelope'
	},
	{
		path: '/profile',
		name: 'Profile',
		component: Home,
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
