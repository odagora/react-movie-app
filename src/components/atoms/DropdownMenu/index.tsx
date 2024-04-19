import { languages } from '@/utils/constants'
import { Select } from './style'

export const DropdownMenu = () => {
	const languageOptions = Object.entries(languages)
	return (
		<Select name='language' id='language'>
			{languageOptions.map(([key, value]) => (
				<option key={value} value={key}>
					{value}
				</option>
			))}
		</Select>
	)
}
