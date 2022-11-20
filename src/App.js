import { Route, Routes } from 'react-router'
//component
import Contact from './view/Contact/Contact'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
//style
import './App.scss'

function App() {
	return (
		<>
		<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</>
	)
}

export default App
