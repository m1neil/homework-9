import frontRoutes from '@/routes/frontRoutes'
import searchIcon from '@img/icons/search.svg'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import './SearchHeader.scss'

function SearchHeader({ suffixClass }) {
	const navigate = useNavigate()
	const [search, setSearch] = useState('')
	const [isShowSearch, setIsShowSearch] = useState(false)
	const [isBlockToggleSearch, setIsBlockToggleSearch] = useState(false)
	const timeoutRef = useRef(null)

	useEffect(() => {
		if (!isBlockToggleSearch) return
		timeoutRef.current = setTimeout(() => {
			setIsBlockToggleSearch(false)
		}, 300)
		return () => clearTimeout(timeoutRef.current)
	}, [isShowSearch])

	const onSubmitForm = event => {
		event.preventDefault()
		if (!search.trim()) return
		navigate(frontRoutes.navigate.shop.index, {
			state: {
				search: search.trim(),
			},
		})
		setSearch('')
	}

	const onHandleIsShowSearch = () => {
		if (isBlockToggleSearch) return
		setIsShowSearch(prevIsShow => !prevIsShow)
		setIsBlockToggleSearch(true)
	}

	const classShowForm = isShowSearch ? '--open' : ''

	return (
		<div className={`${suffixClass} search-header`}>
			<form
				onSubmit={onSubmitForm}
				className={`search-header__form ${classShowForm}`.trim()}
				method="get"
				action="#"
			>
				<input
					name="search"
					value={search}
					type="text"
					className="search-header__input"
					placeholder="Search..."
					onChange={e => setSearch(e.target.value)}
				/>
			</form>
			<button
				onClick={onHandleIsShowSearch}
				aria-label="open search"
				className="search-header__button"
			>
				<img src={searchIcon} alt="search icon" />
			</button>
		</div>
	)
}

export default SearchHeader
