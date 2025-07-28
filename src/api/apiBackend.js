const BASE_API_URL = 'https://jewelry-shop-api-production.up.railway.app'

export const apiBackend = {
	products: (amount = null) => {
		let path
		if (amount) path = `/api/Product/GetProductList?count=${amount}`
		else path = `/api/Product/GetProductList`
		return `${BASE_API_URL}${path}`
	},
	getProductById: id => `${BASE_API_URL}/api/Product/GetProductById/${id}`,
	getProductsByName: name => `${BASE_API_URL}/api/Product/Search?term=${name}`,
}
