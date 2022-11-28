import React, { createContext, useState } from 'react'

export const GlobalStoreContext = createContext({
	theme: null,
	toggleTheme: () => {},
})

export const GlobalStore = props => {
	const [theme, setTheme] = useState('light')
	const toggleTheme = () => {
		setTheme(curr => (curr === 'dark' ? 'dark' : 'light'))
	}

	const providerValue = {
		theme,
		toggleTheme,
	}

	return <GlobalStoreContext.Provider value={providerValue}>{props.children}</GlobalStoreContext.Provider>
}

export default GlobalStore
