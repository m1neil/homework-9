import frontRoutes from '@/routes/frontRoutes'
import searchIcon from '@img/icons/search.svg'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import './SearchHeader.scss'

function SearchHeader({ suffixClass }) {
	const navigate = useNavigate()
	const [search, setSearch] = useState('')
	const [isShowSearch, setIsShowSearch] = useState(false)
	const isBlockToggleSearchRef = useRef(false)
	const timeoutRef = useRef(null)

	const onClickAllDoc = event => {
		if (isBlockToggleSearchRef.current) return

		const target = event.target
		if (!target.closest('.search-header')) {
			setIsShowSearch(false)
			isBlockToggleSearchRef.current = true
		}
	}

	useEffect(() => {
		if (!isBlockToggleSearchRef.current) return

		timeoutRef.current = setTimeout(() => {
			isBlockToggleSearchRef.current = false
		}, 300)

		return () => clearTimeout(timeoutRef.current)
	}, [isShowSearch])

	useEffect(() => {
		if (isShowSearch) document.addEventListener('click', onClickAllDoc)
		else document.removeEventListener('click', onClickAllDoc)
		return () => document.removeEventListener('click', onClickAllDoc)
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
		if (isBlockToggleSearchRef.current) return
		setIsShowSearch(prevIsShow => !prevIsShow)
		isBlockToggleSearchRef.current = true
	}

	const classShowForm = isShowSearch ? '--open' : ''

	return (
		<div className={`${suffixClass} search-header`}>
			<button
				onClick={onHandleIsShowSearch}
				aria-label="open search"
				className="search-header__button"
			>
				<img className="ibg ibg--contain" src={searchIcon} alt="search icon" />
			</button>
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
					className="search-header__input input input--small"
					placeholder="Search..."
					onChange={e => setSearch(e.target.value)}
				/>
			</form>
		</div>
	)
}

export default SearchHeader
