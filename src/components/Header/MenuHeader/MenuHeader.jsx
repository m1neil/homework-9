import { routes } from '@/routes/router'
import { useMemo } from 'react'
import { NavLink } from 'react-router'
import './MenuHeader.scss'

function MenuHeader({ suffixClass }) {
	const menuItems = useMemo(
		() =>
			routes[0]?.children
				.filter(item => item?.handle?.title)
				.map(item => ({ path: item.path, title: item.handle.title })),
		[]
	)

	const getClassLinkMenu = ({ isActive }) => {
		let className = 'menu__link'
		if (isActive) className += ' menu__link--current'
		return className
	}

	return (
		<nav className={`${suffixClass} menu`}>
			<ul className="menu__list">
				{menuItems.map((item, index) => (
					<li key={index} className="menu__item">
						<NavLink to={item.path} className={getClassLinkMenu}>
							{item.title}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default MenuHeader
