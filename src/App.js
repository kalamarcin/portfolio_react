import { Route, Routes } from 'react-router'
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
//component
import Contact from './view/Contact/Contact'
import Nav from './components/Nav/Nav'
import Home from './view/Home/Home'

//style
import './App.scss'

function App() {
	const [ref, inView ] = useInView()
	const control = useAnimation()
	const boxVariant = {
		visible: { 
			y:0,
			opacity: 1 ,
			transition: { duration: 0.6 } 
		},
		hidden: { 
			y: -50,
			opacity: 0,  
		},
		
	}
	useEffect(() => {
		if (inView) {
		  control.start("visible");
		} else {
		  control.start("hidden");
		}
	  }, [control, inView]);
	return (
		
		<>
			<motion.div
			ref={ref}
			variants={boxVariant} 
			initial="visible" 
			animate={control} 
			><Nav title="marcinkala" /></motion.div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>

			<div className="footer">
				<Nav title="marcinkala" />
			</div>
		</>
	)
}

export default App
 