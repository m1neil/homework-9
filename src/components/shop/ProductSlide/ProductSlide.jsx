import frontRoutes from '@/routes/frontRoutes'
import { Link } from 'react-router'
import './ProductSlide.scss'

function ProductSlide({ id, name, price, imageUrl }) {
	return (
		<article className="product-slide">
			<h3
				className="product-slide__title title title--white"
				data-swiper-parallax="-20%"
				data-swiper-parallax-duration="600"
			>
				<Link to={frontRoutes.navigate.shop.getProduct(id)}>{name}</Link>
			</h3>
			<div
				className="product-slide__price"
				data-swiper-parallax="-25%"
				data-swiper-parallax-duration="600"
			>
				$ {price}
			</div>
			<div
				className="product-slide__wrapper"
				data-swiper-parallax="-32%"
				data-swiper-parallax-duration="600"
			>
				<Link
					to={frontRoutes.navigate.shop.getProduct(id)}
					className="product-slide__link button button--capitalize button--white"
				>
					View Product
				</Link>
			</div>
			<div className="product-slide__bg">
				<img src={imageUrl} alt="preview product" className="ibg" />
			</div>
		</article>
	)
}

export default ProductSlide
