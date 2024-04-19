import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './GlobalStyles'
import { Router } from './routes/Router'

export function App() {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Router />
		</BrowserRouter>
	)
}
