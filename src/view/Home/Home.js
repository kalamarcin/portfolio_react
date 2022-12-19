import React from 'react'
import Hero from '../../components/Hero/Hero'
import Skills from '../../components/Skills/Skills'
import Project from '../../components/Projects/Projects'
import { useTranslation } from 'react-i18next'
import js from '../../assets/logo/js.png'
import html from '../../assets/logo/html-5.png'
import css from '../../assets/logo/css.png'
import react from '../../assets/logo/react.png'
import sass from '../../assets/logo/sass.png'
import git from '../../assets/logo/github.png'

const Home = () => {
  const { t } = useTranslation()

  const skillsList = [
    {
      id: 1,
      name: html,
      ex: `1 ${t('exp.3')}`,
    },
    {
      id: 2,
      name: css,
      ex: `1 ${t('exp.3')}`,
    },
    {
      id: 3,
      name: js,
      ex: `1 ${t('exp.3')}`,
    },
    {
      id: 4,
      name: react,
      ex: `6 ${t('exp.2')}`,
    },
    {
      id: 5,
      name: sass,
      ex: `1 ${t('exp.3')}`,
    },
    {
      id: 6,
      name: git,
      ex: `1 ${t('exp.3')}`,
    },
  ]

  return (
    <>
      <Hero />
      <Skills skills={skillsList} />
      <Project />
    </>
  )
}

export default Home
