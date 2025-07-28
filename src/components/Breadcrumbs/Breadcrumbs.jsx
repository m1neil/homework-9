import { useMemo } from 'react'
import { Link, useMatches } from 'react-router'
import './Breadcrumbs.scss'

function Breadcrumbs({ title, idPage, suffixClass }) {
	const matches = useMatches()
	const crumbs = useMemo(
		() =>
			matches
				.filter(match => match?.handle?.crumb)
				.map(match => {
					return {
						title: match.handle?.title ?? match.handle.getTitle(title),
						link: match.handle.crumb(idPage),
					}
				}),
		[idPage]
	)
	const lastIndex = crumbs.length - 1

	const createLink = (crumb, index) => {
		let element
		if (index < lastIndex) {
			element = (
				<Link to={crumb.link} className="breadcrumbs__link">
					{crumb.title}
				</Link>
			)
		} else element = <div className="breadcrumbs__link">{crumb.title}</div>
		return element
	}

	return (
		<ul className={`${suffixClass} breadcrumbs`}>
			{crumbs.map((crumb, index) => (
				<li key={index} className="breadcrumbs__item">
					{createLink(crumb, index)}
				</li>
			))}
		</ul>
	)
}

export default Breadcrumbs
