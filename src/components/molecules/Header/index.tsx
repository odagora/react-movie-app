import { DropdownMenu, SearchInput } from '@/components/atoms'
import packageJson from '@package'
import { Div } from './styles'

const defaultTitle = packageJson.displayName
const defaultText = 'Search for a movie'

export const Header = ({ title = defaultTitle, placeholder = defaultText }) => {
	return (
		<header>
			<Div>
				<h1>{title}</h1>
				<DropdownMenu />
			</Div>
			<SearchInput placeholder={placeholder} />
		</header>
	)
}
