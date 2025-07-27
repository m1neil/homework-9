import { apiBackend } from '@/api/apiBackend'
import ErrorMessage from '@/components/ErrorMessage'
import Loader from '@/components/Loader/Loader'
import ProductsList from '@/components/shop/ProductsList/ProductsList'
import useFetch from '@/hooks/useFetch'
import { useEffect } from 'react'
import { useLocation } from 'react-router'
import './Shop.scss'

function Shop() {
	const { state } = useLocation()
	const { data: products, isLoading, error, getData } = useFetch([], true)

	useEffect(() => {
		getData(apiBackend.products)
	}, [])

	let info
	if (isLoading) info = <Loader />
	else if (error) info = <ErrorMessage>Failed to load goods</ErrorMessage>

	return (
		<section className="shop">
			<div className="shop__container">
				<h1 className="shop__title title">Shop</h1>
				<ProductsList suffixClass="shop__list" list={products} />
				{(isLoading || error) && <div className="shop__info">{info}</div>}
			</div>
		</section>
	)
}

export default Shop
