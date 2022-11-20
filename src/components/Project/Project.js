import { useTranslation } from 'react-i18next'
// style
import './Project.scss'
// img
import project1 from '../../assets/images/thumbnail-project-1-large.webp';
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
					<img src={project1} alt="" />
					<h3>ORDER FORM WITH VALIDATION</h3>
                    <p>HTML CSS JAVASCRIPT</p>
				</div>
                <div className="cell">
					<img src={project2} alt="" />
					<h3>COLOR GENERATOR</h3>
                    <p>HTML CSS REACT</p>
				</div>
                <div className="cell">
					<img src={project3} alt="" />
					<h3>WEATHER APP</h3>
                    <p>HTML SASS </p>
				</div>
                <div className="cell">
					<img src={project4} alt="" />
					<h3>LOREM IPSUM GENERATOR</h3>
                    <p>HTML CSS </p>
				</div>
			</div>
		</div>
	)
}

export default Project
