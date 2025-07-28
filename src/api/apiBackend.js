const BASE_API_URL = 'http://localhost:5000'

export const apiBackend = {
	products: `${BASE_API_URL}/api/products`,
	getProductById: id => `${BASE_API_URL}/api/products/${id}`,
	getProductsByName: name => `${BASE_API_URL}/api/products/search?q=${name}`,
}
