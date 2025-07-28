import { apiBackend } from '@/api/apiBackend'
import ErrorMessage from '@/components/ErrorMessage'
import Loader from '@/components/Loader/Loader'
import ProductsList from '@/components/shop/ProductsList/ProductsList'
import useFetch from '@/hooks/useFetch'
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'
import './Shop.scss'

function Shop() {
	const { state } = useLocation()
	const {
		data: products,
		isLoading,
		error,
		getData,
		searchProductsByName,
	} = useFetch([], true)
	const queryRef = useRef('')

	useEffect(() => {
		if (
			products.length > 0 &&
			state?.search &&
			queryRef.current === state.search.trim()
		) {
			console.log('Тот же самый запрос')
			return
		} else if (state?.search) {
			console.log('Запрос на поиск')
			searchProductsByName(state.search.trim())
			queryRef.current = state.search.trim()
		} else {
			console.log('default')
			getData(apiBackend.products)
			queryRef.current = ''
		}
	}, [state])

	let info
	if (isLoading) info = <Loader />
	else if (error) info = <ErrorMessage>Failed to load goods</ErrorMessage>

	return (
		<section className="shop">
			<div className="shop__container">
				<h1 className="shop__title title">Shop</h1>
				{!isLoading && !error && (
					<ProductsList suffixClass="shop__list" list={products} />
				)}
				{(isLoading || error) && <div className="shop__info">{info}</div>}
			</div>
		</section>
	)
}

export default Shop
