import { Category, Home, MovieDetail, NotFound, Search, Trends } from '@/pages'
import { useRoutes } from 'react-router-dom'

export const Router = () => {
	const routes = useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/trends', element: <Trends /> },
		{ path: '/search', element: <Search /> },
		{ path: '/movie', element: <MovieDetail /> },
		{ path: '/category', element: <Category /> },
		{ path: '*', element: <NotFound /> }
	])

	return routes
}
