import { apiBackend } from '@/api/apiBackend'
import ErrorMessage from '@/components/ErrorMessage'
import Loader from '@/components/Loader/Loader'
import useFetch from '@/hooks/useFetch'
import frontRoutes from '@/routes/frontRoutes'
import { useEffect } from 'react'
import { Link } from 'react-router'
import ProductsList from '../ProductsList/ProductsList'
import './ShopLates.scss'

function ShopLates({ title }) {
	const { data: products, isLoading, error, getData } = useFetch([], true)

	useEffect(() => {
		getData(apiBackend.products)
	}, [])

	let info
	if (isLoading) info = <Loader />
	else if (error) info = <ErrorMessage>Failed to load goods</ErrorMessage>

	return (
		<section className="shop-latest">
			<div className="shop-latest__container">
				<div className="shop-latest__top">
					<h2 className="shop-latest__title title">{title}</h2>
					<Link
						to={frontRoutes.navigate.shop.index}
						className="shop-latest__link"
					>
						View All
					</Link>
				</div>
				<div className="shop-latest__list list-shop"></div>
				<ProductsList suffixClass="shop-latest__list" list={products} />
				{(isLoading || error) && (
					<div className="shop-latest__info">{info}</div>
				)}
			</div>
		</section>
	)
}

export default ShopLates
