import Loader from '@/components/Loader/Loader'
import Rating from '@/components/Rating/Rating'
import SocialList from '@/components/SocialList/SocialList'
import useFetch from '@/hooks/useFetch'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import './ProductDetail.scss'

function ProductDetail() {
	const { id } = useParams()
	const {
		data: product,
		isLoaded,
		error,
		getProductById,
	} = useFetch(null, true)

	useEffect(() => {
		getProductById(id)
	}, [])

	if (!product) {
		return (
			<div className="product-detail">
				<Loader suffixClass="product-detail__loader" />
			</div>
		)
	}

	console.log(product.price)

	return (
		<section className="product-detail">
			<div className="product-detail__container">
				<div className="product-detail__img">
					<img className="ibg" src={product.imageUrl} alt="Image" />
				</div>
				<div className="product-detail__content">
					<h1 className="product-detail__title title title--fz-26">
						{product.name}
					</h1>
					<div className="product-detail__price">
						$ {parseFloat(product.price).toFixed(2)}
					</div>
					<Rating
						suffixClass="product-detail__rating"
						amountStars={product.rating}
					/>
					<div className="product-detail__rating rating"></div>
					<div className="product-detail__text text">
						<p>{product.description}</p>
					</div>
					<SocialList social={product?.social} />
				</div>
			</div>
		</section>
	)
}

export default ProductDetail
