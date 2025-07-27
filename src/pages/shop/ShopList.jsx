import { useLocation } from 'react-router'

function ShopList() {
	const { state } = useLocation()
	if (state?.search) console.log(state.search)
	else console.log('Просто перешли на страницу магазина')

	return <section className="shop-list">Shop list</section>
}

export default ShopList
