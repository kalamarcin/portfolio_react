import { useTranslation } from 'react-i18next'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
// style
import './Project.scss'
// img
import project1 from '../../assets/images/project1.png'
import project2 from '../../assets/images/project2.png'
import project3 from '../../assets/images/project3.jpg'

const Project = () => {
	const { t } = useTranslation()
	const control = useAnimation()
	const control1 = useAnimation()
	const [ref, inView] = useInView()
	const [ref1, inView1] = useInView()

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

	return (
		<div className="project-wrapper">
			<h2>{t('project')}</h2>
			<div className="project-grid">
				<motion.div ref={ref} variants={boxVariant} initial="hidden" animate={control} className="cell">
					<div className="middle">
						<img src={project1} alt="" />
						<div className="fragment">
							<div className="text">
								<a href="/" className="text__p">
									<p>VIEW PROJECT</p>
								</a>
								<a
									href="https://github.com/kalamarcin/portfolio_react"
									target="_blank"
									rel="noopener noreferrer"
									className="text__p">
									<p>VIEW CODE</p>
								</a>
							</div>
						</div>
					</div>
					<h3 className="cell__h3">PORTFOLIO</h3>
					<p className="cell__p">HTML SCSS JAVASCRIPT REACT</p>
					<div className="hidden-box">
						<a href="/" className="hidden-txt">
							VIEW PROJECT
						</a>
						<a
							href="https://github.com/kalamarcin/portfolio_react"
							target="_blank"
							rel="noopener noreferrer"
							className="hidden-txt">
							VIEW CODE
						</a>
					</div>
				</motion.div>

				<motion.div ref={ref} variants={boxVariant} initial="hidden" animate={control} className="cell">
					<div className="middle">
						<img src={project3} alt="" />
						<div className="fragment">
							<div className="text">
								<a
									href="https://devfinder-mk.netlify.app"
									target="_blank"
									rel="noopener noreferrer"
									className="text__p">
									VIEW PROJECT
								</a>
								<a
									href="https://github.com/kalamarcin/github-user-search"
									target="_blank"
									rel="noopener noreferrer"
									className="text__p">
									VIEW CODE
								</a>
							</div>
						</div>
					</div>
					<h3 className="cell__h3">GITHUB USER SEARCH APP</h3>
					<p className="cell__p">HTML SCSS JAVASCRIPT REACT API</p>
					<div className="hidden-box">
						<a
							href="https://devfinder-mk.netlify.app/"
							target="_blank"
							rel="noopener noreferrer"
							className="hidden-txt">
							VIEW PROJECT
						</a>
						<a
							href="https://github.com/kalamarcin/github-user-search"
							target="_blank"
							rel="noopener noreferrer"
							className="hidden-txt">
							VIEW CODE
						</a>
					</div>
				</motion.div>

				<motion.div ref={ref1} variants={boxVariant} initial="hidden" animate={control1} className="cell">
					<div className="middle">
						<img src={project2} alt="" />
						<div className="fragment">
							<div className="text">
								<a
									href="https://kalamarcin.github.io/PickaShop"
									target="_blank"
									rel="noopener noreferrer"
									className="text__p">
									VIEW PROJECT
								</a>
								<a
									href="https://github.com/kalamarcin/PickaShop"
									target="_blank"
									rel="noopener noreferrer"
									className="text__p">
									VIEW CODE
								</a>
							</div>
						</div>
					</div>
					<h3 className="cell__h3">ORDER FORM WITH VALIDATION</h3>
					<p className="cell__p">HTML CSS JAVASCRIPT</p>
					<div className="hidden-box">
						<a
							href="https://kalamarcin.github.io/PickaShop"
							target="_blank"
							rel="noopener noreferrer"
							className="hidden-txt">
							VIEW PROJECT
						</a>
						<a
							href="https://github.com/kalamarcin/PickaShop"
							target="_blank"
							rel="noopener noreferrer"
							className="hidden-txt">
							VIEW CODE
						</a>
					</div>
				</motion.div>
				{/* <motion.div ref={ref1} variants={boxVariant} initial="hidden" animate={control1} className="cell">
					<div className="middle">
						<img src={project4} alt="" />
						<div className="fragment">
							<div className="text">
								<a href="/" className="text__p">
									VIEW PROJECT
								</a>
								<a href="/" className="text__p">
									VIEW CODE
								</a>
							</div>
						</div>
					</div>
					<h3 className="cell__h3">ORDER FORM WITH VALIDATION</h3>
					<p className="cell__p">HTML CSS JAVASCRIPT</p>
					<div className="hidden-box">
						<a href="/" className="hidden-txt">
							VIEW PROJECT
						</a>
						<a href="/" className="hidden-txt">
							VIEW CODE
						</a>
					</div>
				</motion.div> */}
			</div>
		</div>
	)
}

export default Project
