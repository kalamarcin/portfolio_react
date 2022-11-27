import { useTranslation } from 'react-i18next'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
// style
import './Project.scss'
// img
import project1 from '../../assets/images/thumbnail-project-1-large.webp'
import project2 from '../../assets/images/thumbnail-project-2-large.webp'
import project3 from '../../assets/images/thumbnail-project-3-large.webp'
import project4 from '../../assets/images/thumbnail-project-4-large.webp'


const Project = () => {
	const { t } = useTranslation()
	const control = useAnimation()
	const control1 = useAnimation()
	const [ref, inView] = useInView()
	const [ref1, inView1] = useInView()

	const boxVariant = {
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
				</motion.div>

				<motion.div variants={boxVariant} initial="hidden" animate={control} className="cell">
					<div className="middle">
						<img src={project2} alt="" />
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
				</motion.div>

				<motion.div ref={ref1} variants={boxVariant} initial="hidden" animate={control1} className="cell">
					<div className="middle">
						<img src={project3} alt="" />
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
				</motion.div>
				<motion.div ref={ref1} variants={boxVariant} initial="hidden" animate={control1} className="cell">
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
				</motion.div>
			</div>
		</div>
	)
}

export default Project
