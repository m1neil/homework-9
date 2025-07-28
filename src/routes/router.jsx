import Layout from '@/layouts/Layout'
import About from '@/pages/About'
import Account from '@/pages/Account'
import BlogList from '@/pages/blog/BlogList'
import Cart from '@/pages/Cart'
import Contacts from '@/pages/Contacts'
import ErrorPage from '@/pages/ErrorPage'
import Home from '@/pages/Home'
import Page404 from '@/pages/Page404'
import Post from '@/pages/Post'
import ProductDetail from '@/pages/ProductDetail/ProductDetail'
import Rules from '@/pages/Rules'
import Shop from '@/pages/shop/Shop'
import { createBrowserRouter } from 'react-router'
import frontRoutes from './frontRoutes'

export const routes = [
	{
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Home />,
				path: frontRoutes.pages.home,
			},
			{
				path: frontRoutes.pages.about,
				element: <About />,
				handle: {
					title: 'About',
				},
			},
			{
				path: frontRoutes.pages.shop.index,
				handle: {
					crumb: () => frontRoutes.navigate.shop.index,
					title: 'Shop',
				},
				children: [
					{
						index: true,
						element: <Shop />,
					},
					{
						path: frontRoutes.pages.shop.product,
						element: <ProductDetail />,
						handle: {
							crumb: id => frontRoutes.navigate.shop.getProduct(id),
							getTitle: title => title,
						},
					},
				],
			},
			{
				path: frontRoutes.pages.contacts,
				element: <Contacts />,
				handle: {
					title: 'Contacts',
				},
			},
			{
				path: frontRoutes.pages.account,
				element: <Account />,
			},
			{
				path: frontRoutes.pages.blog.index,
				element: <BlogList />,
				handle: {
					crumb: () => frontRoutes.navigate.blog.index,
					title: 'Blog',
				},
				children: [
					{
						path: frontRoutes.pages.blog.post,
						element: <Post />,
						handle: {
							crumb: id => frontRoutes.navigate.blog.getPost(id),
							getTitle: title => title,
						},
					},
				],
			},
			{
				path: frontRoutes.pages.privacyPolicy,
				element: <Rules />,
				handle: {
					title: 'Privacy Policy',
				},
			},
			{
				path: frontRoutes.pages.cart,
				element: <Cart />,
			},
			{
				path: '*',
				element: <Page404 />,
			},
		],
	},
]
const router = createBrowserRouter(routes)
export default router
