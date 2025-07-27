import Loader from '@/components/Loader/Loader'
import frontRoutes from '@/routes/frontRoutes'
import { useState } from 'react'
import { Link } from 'react-router'
import './ProductCard.scss'

function ProductCard({
	id,
	name,
	price,
	imageUrl,
	suffixClass,
	animationDelay,
}) {
	const [isLoaded, setIsLoaded] = useState(false)

	const onLoadImage = () => {
		setIsLoaded(true)
	}

	return (
		<article
			style={{ animationDelay: `${animationDelay}s` }}
			className={`${suffixClass} card-product`}
		>
			<Link
				to={frontRoutes.navigate.shop.getProduct(id)}
				className={`card-product__img ${isLoaded ? '--loaded' : ''}`}
			>
				<img
					className="ibg"
					onLoad={onLoadImage}
					src={imageUrl}
					alt="product image"
				/>
				{!isLoaded && <Loader />}
			</Link>
			<h3 className="card-product__title">
				<Link to={frontRoutes.navigate.shop.getProduct(id)}>{name}</Link>
			</h3>
			<div className="card-product__price">$ {price}</div>
		</article>
	)
}

export default ProductCard
