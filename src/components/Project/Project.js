import { useTranslation } from 'react-i18next'
// style
import './Project.scss'
// img
import project1 from '../../assets/images/thumbnail-project-1-large.webp'
import project2 from '../../assets/images/thumbnail-project-2-large.webp'
import project3 from '../../assets/images/thumbnail-project-3-large.webp'
import project4 from '../../assets/images/thumbnail-project-4-large.webp'

const Project = () => {
	const { t } = useTranslation()
	return (
		<div className="project-wrapper">
			<h2>{t('project')}</h2>
			<div className="project-grid">
				<div className="cell">
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
				</div>

				<div className="cell">
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
				</div>

				<div className="cell">
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
				</div>

				<div className="cell">
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
				</div>
			</div>
		</div>
	)
}

export default Project
