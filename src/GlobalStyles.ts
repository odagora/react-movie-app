import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
	* {
	box-sizing: border-box;
	}

	:root {
		--purple-light-1: #fbfafb;
		--purple-light-2: #eeeaf2;
		--purple-medium-1: #aa83c8;
		--purple-medium-2: #8b48bf;
		--purple-medium-3: #5c218a;
		--purple-dark-1: #3e0f64;
		--purple-dark-2: #2a0646;

		--yellow: #eecc75;
		--green: #cad297;
		--aqua: #b7eac5;
		--lightBlue: #a2eee5;
		--darkBlue: #8ea2ea;
		--red: #f09d9d;

		--font-family-titles: 'Dosis', sans-serif;
		--font-family-text: 'Red Hat Display', sans-serif;
		--font-weight-title1: 800;
		--font-weight-title2: 700;
		--font-weight-text1: 400;
		--font-weight-text2: 500;

		--max-width: 600px;
	}

	#root {
		max-width: var(--max-width);
		margin: 0 auto;
		padding: 0;
	}

	html {
		background-color: var(--purple-medium-3);
	}

	body {
		background-color: var(--purple-light-1);
		color: var(--purple-dark-2);
		font-family: var(--font-family-text);
		font-weight: var(--font-weight-text1);
		font-size: 16px;
		margin: 4px auto;
		max-width: var(--max-width);
		padding: 0;
	}

	h1,
	h2,
	h3 {
		margin: 0;
		padding: 0;
	}

	h1,
	h2 {
		font-size: 24px;
		color: var(--purple-dark-2);
		font-family: var(--font-family-titles);
		font-weight: var(--font-weight-title1);
		margin: 0;
		padding: 0;
	}

	h2 {
		font-size: 18px;
		color: var(--purple-dark-1);
		font-weight: var(--font-weight-title2);
	}

	h3 {
		color: var(--purple-dark-2);
		font-weight: var(--font-weight-text2);
		font-size: 16px;
	}

	input {
		background-color: var(--purple-light-2);
		color: var(--purple-medium-2);
		border: none;
		font-size: 18px;
		padding-left: 16px;
	}

	input::placeholder {
		color: var(--purple-medium-1);
		font-family: var(--font-family-text);
	}

	button {
		background-color: var(--purple-dark-1);
		border: none;
		color: var(--purple-light-2);
		font-weight: var(--font-weight-text2);
		font-size: 14px;
		cursor: pointer;
	}
`
