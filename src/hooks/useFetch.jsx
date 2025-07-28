import { apiBackend } from '@/api/apiBackend'
import { useCallback, useState } from 'react'

const useFetch = (initData = null, initIsLoading = false) => {
	const [data, setData] = useState(initData)
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(initIsLoading)

	const getProductById = useCallback(async id => {
		setIsLoading(true)
		setError(null)
		try {
			const response = await fetch(apiBackend.getProductById(id))
			if (!response.ok) throw new Error('Failed to get the product!')
			setData(await response.json())
		} catch (error) {
			setError(error.message)
		} finally {
			setIsLoading(false)
		}
	}, [])

	const getData = useCallback(async (url, method = 'get') => {
		setIsLoading(true)
		setError(null)
		try {
			const response = await fetch(url, { method })
			if (!response.ok) {
				throw new Error(
					`Failed to get data for the URL: ${url}, status: ${response.status}`
				)
			}
			setData(await response.json())
		} catch (error) {
			setError(error.message)
		} finally {
			setIsLoading(false)
		}
	}, [])

	const searchProductsByName = useCallback(async name => {
		setIsLoading(true)
		setError(null)
		try {
			const response = await fetch(apiBackend.getProductsByName(name), {
				method: 'get',
			})
			if (!response.ok)
				throw new Error('It was not possible to get the desired product!')
			setData(await response.json())
		} catch (error) {
			setError(error.message)
		} finally {
			setIsLoading(false)
		}
	}, [])

	return {
		data,
		isLoading,
		error,
		getData,
		getProductById,
		searchProductsByName,
	}
}

export default useFetch
