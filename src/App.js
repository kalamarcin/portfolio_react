import { Route, Routes } from 'react-router'
import Contact from './view/Contact/Contact'
import './App.scss'
import Hero from './components/Hero/Hero'
import Nav from './components/Nav/Nav'
import Skills from './components/Skills/Skills'

function App() {
	return (
		<>
		
       <Routes>
            <Route path="/dashboard" component={Contact} />
			</Routes>
       
       
			<Nav />
			<Hero />
			<Skills />
			
		</>
	)
}

export default App
