const frontRoutes = {
	pages: {
		home: '/',
		about: '/about',
		shop: {
			index: '/shop',
			product: ':id/detail',
		},
		contacts: '/contacts',
		account: '/account',
		blog: {
			index: '/blog',
			post: ':id',
		},
		privacyPolicy: '/privacy-policy',
		cart: '/cart',
	},
	navigate: {
		home: '/',
		about: '/about',
		shop: {
			index: '/shop',
			getProduct: id => `/shop/${id}/detail`,
		},
		contacts: '/contacts',
		account: '/account',
		blog: {
			index: '/blog',
			getPost: id => `/blog/${id}`,
		},
		privacyPolicy: '/privacy-policy',
		cart: '/cart',
	},
}

export default frontRoutes
