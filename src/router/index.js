import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';

import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostListView from '@/views/posts/PostListView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import NestedView from '@/views/nested/NestedView.vue';
import NestedTwo from '@/views/nested/NestedTwo.vue';
import NestedOne from '@/views/nested/NestedOne.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomeView,
	},
	{
		path: '/about',
		name: 'About',
		component: AboutView,
	},
	{
		path: '/posts',
		name: 'PostList',
		component: PostListView,
	},
	{
		path: '/posts/create',
		name: 'PostCreate',
		component: PostCreateView,
	},
	{
		path: '/posts/:id',
		name: 'PostDetail',
		component: PostDetailView,
	},
	{
		path: '/posts/:id/edit',
		name: 'PostEdit',
		component: PostEditView,
	},
	{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },
	{
		path: '/nested',
		name: 'Nested',
		component: NestedView,
		children: [
			{
				path: 'one',
				name: 'NestedOne',
				component: NestedOne,
			},
			{
				path: 'two',
				name: 'NestedTwo',
				component: NestedTwo,
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
