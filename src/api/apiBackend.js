const BASE_API_URL = 'https://backend-homework-9.onrender.com'

export const apiBackend = {
	products: `${BASE_API_URL}/api/products`,
	getProductById: id => `${BASE_API_URL}/api/products/${id}`,
	getProductsByName: name => `${BASE_API_URL}/api/products/search?q=${name}`,
}
