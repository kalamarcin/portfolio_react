import { useTranslation } from 'react-i18next'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
// style
import './Projects.scss'
// img
import portfolio from '../../assets/images/portfolio.png'
import githubsearch from '../../assets/images/githubsearch.jpg'
import planets from '../../assets/images/planets.jpg'
import generator from '../../assets/images/generator.jpg'
import tracker from '../../assets/images/ip-tracker.jpg'
// components
import Portfolio from './Portfolio/Portfolio'
import Github from './Github/Github'
import Generator from './Generator/Generator'
import Planets from './Planets/Planets'
import Tracker from './Tracker/Tracker'

const Project = () => {
  const { t } = useTranslation()
  const control = useAnimation()
  const control1 = useAnimation()
  const control2 = useAnimation()
  const [ref, inView] = useInView()
  const [ref1, inView1] = useInView()
  const [ref2, inView2] = useInView()

  let boxVariant = {
    visible: {
      y: -10,
      opacity: 1,
      transition: { duration: 1 },
    },
    hidden: {
      y: 100,
      opacity: 0,
    },
  }
  const isMobile = window.innerWidth <= 500

  if (isMobile) {
    boxVariant = {
      visible: {
        y: -10,
        opacity: 1,
        transition: { duration: 0 },
      },
      hidden: {
        y: -10,
        opacity: 1,
      },
    }
  }

  useEffect(() => {
    if (inView) {
      control.start('visible')
    } else {
      control.start('hidden')
    }
  }, [control, inView])

  useEffect(() => {
    if (inView1) {
      control1.start('visible')
    } else {
      control1.start('hidden')
    }
  }, [control1, inView1])

  useEffect(() => {
    if (inView2) {
      control2.start('visible')
    } else {
      control2.start('hidden')
    }
  }, [control2, inView2])

  return (
    <div className="project-wrapper">
      <h2>{t('project')}</h2>
      <div className="project-grid">
        <motion.div ref={ref} variants={boxVariant} initial="hidden" animate={control} className="cell">
          <Portfolio name="PORTFOLIO" tech="HTML SCSS JAVASCRIPT REACT" imgSrc={portfolio} />
        </motion.div>

        <motion.div ref={ref} variants={boxVariant} initial="hidden" animate={control} className="cell">
          <Github name="GITHUB USER SEARCH APP" tech="HTML SCSS JAVASCRIPT REACT API" imgSrc={githubsearch} />
        </motion.div>

        <motion.div ref={ref1} variants={boxVariant} initial="hidden" animate={control1} className="cell">
          <Planets name="PLANETS FACT SITE" tech="HTML CSS JAVASCRIPT" imgSrc={planets} />
        </motion.div>

        <motion.div ref={ref1} variants={boxVariant} initial="hidden" animate={control1} className="cell">
          <Tracker name="IP ADDRESS TRACKER" tech="HTML SCSS JAVASCRIPT REACT API" imgSrc={tracker} />
        </motion.div>

        <motion.div ref={ref2} variants={boxVariant} initial="hidden" animate={control2} className="cell">
          <Generator name="ADVICE GENERATOR" tech="HTML SCSS JAVASCRIPT REACT API" imgSrc={generator} />
        </motion.div>
      </div>
    </div>
  )
}

export default Project
