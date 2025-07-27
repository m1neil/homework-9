import frontRoutes from '@/routes/frontRoutes'
import accountIcon from '@img/icons/account.svg'
import cartIcon from '@img/icons/cart.svg'
import logo from '@img/logo.svg'
import { Link } from 'react-router'
import './Header.scss'
import MenuHeader from './MenuHeader/MenuHeader'
import SearchHeader from './SearchHeader/SearchHeader'

function Header() {
	return (
		<header className="header">
			<div className="header__container">
				<Link to={frontRoutes.navigate.home} className="header__logo">
					<img src={logo} alt="Image" />
				</Link>
				<MenuHeader suffixClass="header__menu" />
				<div className="header__actions actions-header">
					<SearchHeader suffixClass="actions-header__search" />
					<Link
						to="#"
						aria-label="go to user cart"
						className="actions-header__link"
					>
						<img className="ibg ibg--contain" src={cartIcon} alt="cart icon" />
					</Link>
					<Link
						to="#"
						aria-label="go to user account"
						className="actions-header__link"
					>
						<img
							className="ibg ibg--contain"
							src={accountIcon}
							alt="account icon"
						/>
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
