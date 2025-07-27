import ProductCard from '../ProductCard/ProductCard'
import './ProductsList.scss'

function ProductsList({ suffixClass, list }) {
	const ANIMATION_DELAY_COEFFICIENT = 0.1
	if (!list || !list.length) return null
	return (
		<div className={`${suffixClass} list-shop`}>
			{list.map(({ id, name, price, imageUrl }, index) => (
				<ProductCard
					key={id}
					id={id}
					name={name}
					price={price}
					imageUrl={imageUrl}
					suffixClass="list-shop__card"
					animationDelay={index * ANIMATION_DELAY_COEFFICIENT}
				/>
			))}
		</div>
	)
}

export default ProductsList
