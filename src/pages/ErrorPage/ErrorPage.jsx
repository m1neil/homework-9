import frontRoutes from '@/routes/frontRoutes'
import { Link } from 'react-router'
import './ErrorPage.scss'

function ErrorPage() {
	return (
		<section className="error-page">
			<div className="error-page__container">
				<h1 className="error-page__title title">Error Page</h1>
				<Link
					className="error-page__link button"
					to={frontRoutes.navigate.home}
				>
					Go home page
				</Link>
			</div>
		</section>
	)
}

export default ErrorPage
