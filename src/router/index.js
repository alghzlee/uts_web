import Vue from 'vue'
import Router from 'vue-router'

// User
import User from '../views/user/list'
import AddUser from '../views/user/add'
import EditUser from '../views/user/edit'
import DetailUser from '../views/user/detail'

// Product
import Product from '../views/product/list'

// Plannogram
import Plannogram from '../views/plannogram/list'
import CreatePlannogram from '../views/plannogram/create'
import EditPlannogram from '../views/plannogram/edit'
import DetailPlannogram from '../views/plannogram/detail'


Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'list-user',
			component: User
		},
		{
			path: '/list-user',
			name: 'list-user',
			component: User
		},
		{
			path: '/add-user',
			name: 'add-user',
			component: AddUser
		},
		{
			path: '/edit-user',
			name: 'edit-user',
			component: EditUser
		},
		{
			path: '/detail-user',
			name: 'detail-user',
			component: DetailUser
		},
		{
			path: '/list-product',
			name: 'list-product',
			component: Product
		},

		//Plannogram
		{
			path: '/list-plannogram',
			name: 'list-plannogram',
			component: Plannogram
		},
		{
			path: '/create-plannogram',
			name: 'create-plannogram',
			component: CreatePlannogram
		},
		{
			path: '/edit-plannogram',
			name: 'edit-plannogram',
			component: EditPlannogram
		},
		{
			path: '/detail-plannogram',
			name: 'detail-plannogram',
			component: DetailPlannogram
		}
	]
})
