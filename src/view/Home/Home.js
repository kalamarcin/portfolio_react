import React from 'react'
import Hero from '../../components/Hero/Hero'
import Skills from '../../components/Skills/Skills'
import Project from '../../components/Project/Project'
import { useTranslation } from 'react-i18next'

const Home = () => {
	const { t } = useTranslation()

	const skillsList = [
		{
			id: 1,
			name: 'HTML',
			ex: `1 ${t('exp.3')}`,
		},
		{
			id: 2,
			name: 'CSS',
			ex: `1 ${t('exp.3')}`,
		},
		{
			id: 3,
			name: 'Javascript',
			ex: `1 ${t('exp.3')}`,
		},
		{
			id: 4,
			name: 'React',
			ex: `6 ${t('exp.2')}`,
		},
		{
			id: 5,
			name: 'Sass',
			ex: `1 ${t('exp.3')}`,
		},
		{
			id: 6,
			name: 'GIT',
			ex: `1 ${t('exp.3')}`,
		},
	]

	return (
		<>
			<Hero name="Marcin" />
			<Skills skills={skillsList} />
			<Project />
		</>
	)
}

export default Home
