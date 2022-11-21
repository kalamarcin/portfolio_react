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
						<div className="text">
							<h3 className='text-overflow'>ghfj</h3>
						</div>
					</div>

			
					<h3>ORDER FORM WITH VALIDATION</h3>
					<p>HTML CSS JAVASCRIPT</p>
				</div>
			</div>
		</div>
	)
}

export default Project
