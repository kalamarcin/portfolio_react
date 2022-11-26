import React, { createContext, useState } from 'react'

export const GlobalStoreContext = createContext({
	userCanLog: [],
    isLog: false,
})

const GlobalStore = props => {
	const [userCanLog] = useState(['ania', 'dmytro', 'gosia', 'marcin', 'michał', 'ola'])
	const [isLog, setIsLog] = useState(false)
	const handleCheckUser = value => value ? setIsLog(true) : setIsLog(false)
   
	const providerValue = {
		userCanLog,
		isLog,
		handleCheckUser,
	}

	return <GlobalStoreContext.Provider value={providerValue}>{props.children}</GlobalStoreContext.Provider>
}

export default GlobalStore
