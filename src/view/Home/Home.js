import React from 'react'
import Hero from '../../components/Hero/Hero'
import Skills from '../../components/Skills/Skills'
import linked from '../../assets/images/icon-linkedin.svg'
import github from '../../assets/images/icon-github.svg'
const Home = () => {
	const links = [
		{
			linked: 'https://github.com/kalamarcin',
			icon: {github},
		},	
		{
			linked: 'https://www.linkedin.com/in/marcinkala',
			icon: {linked},
		},	
	]
	
	return (
		<>
			<Hero />
			<Skills />
		</>
	)
}

export default Home
