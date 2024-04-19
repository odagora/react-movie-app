import { MouseEvent, useState } from 'react'
import { Button, Form, Input } from './styles'

interface Props {
	placeholder: string
}

export const SearchInput = ({ placeholder }: Props) => {
	const [value, setValue] = useState<string>('')

	function onClick(
		event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
	) {
		event.preventDefault()
		console.log('click')
	}

	function onChange(e: React.ChangeEvent<HTMLInputElement>) {
		setValue(e.target.value)
	}

	return (
		<Form>
			<Input
				type='text'
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
			<Button onClick={(event) => onClick(event)}>🔍</Button>
		</Form>
	)
}
