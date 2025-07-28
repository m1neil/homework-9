import { apiBackend } from '@/api/apiBackend'
import useFetch from '@/hooks/useFetch'
import unpackingObject from '@/utils/unpackingObject'
import { useEffect } from 'react'
import 'swiper/css/effect-fade'
import { EffectFade, Pagination, Parallax } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ErrorMessage from '../ErrorMessage'
import Loader from '../Loader/Loader'
import ProductSlide from '../shop/ProductSlide/ProductSlide'
import './Promo.scss'

function Promo() {
	const { data: products, isLoading, error, getData } = useFetch([], true)

	useEffect(() => {
		getData(apiBackend.products(5))
	}, [])

	let info
	if (isLoading) info = <Loader />
	else if (error) info = <ErrorMessage>Failed to get goods!</ErrorMessage>

	return (
		<div className="promo">
			<div className="promo__container">
				{!isLoading && !error && products.length > 0 && (
					<Swiper
						className="promo__slider slider-promo"
						speed={600}
						effect={'fade'}
						parallax={true}
						loop={true}
						modules={[Pagination, Parallax, EffectFade]}
						spaceBetween={50}
						slidesPerView={1}
						pagination={{ clickable: true }}
					>
						{products.map(({ id, name, price, imageUrl }) => (
							<SwiperSlide key={id}>
								<ProductSlide
									key={id}
									id={id}
									name={name}
									price={price}
									imageUrl={imageUrl}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				)}
				{(isLoading || error) && <div className="promo__info">{info}</div>}
			</div>
		</div>
	)
}

export default Promo
