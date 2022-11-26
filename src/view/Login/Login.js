import React, { useContext, useRef } from 'react'
import { GlobalStoreContext } from '../../components/Store/GlobalStore'
import './Login.scss'

const Login = () => {
	const GlobalStore = useContext(GlobalStoreContext)
	const inputName = useRef(null)
	const inputValToLower = inputName.current.value.toLowerCase()
	const handleislogIn = () => {
		// GlobalStore.userCanLog.includes(inputName.current.value.toLowerCase()) ? GlobalStore.handleCheckUser(true) : GlobalStore.handleCheckUser(false)
		if (GlobalStore.userCanLog.includes(inputValToLower)) {
			GlobalStore.handleCheckUser(true)
		} else {
			GlobalStore.handleCheckUser(false)
		}
	}

	return (
		<>
			<div className="section-login">
				<h1>Log-in</h1>
				<input ref={inputName} type="text" />
				<button onClick={handleislogIn}>Login</button>
				{GlobalStore.isLog ? (
					<p style={{ color: 'green' }}>Użytkownik jest na liscie</p>
				) : (
					<p style={{ color: 'red' }}>Użytkownika nie ma na liscie</p>
				)}
			</div>
		</>
	)
}

export default Login
