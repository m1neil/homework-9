import Header from '@/components/Header/Header'
import { Outlet } from 'react-router'

function Layout() {
	return (
		<>
			<Header />
			<main className="page">
				<Outlet />
			</main>
		</>
	)
}

export default Layout
