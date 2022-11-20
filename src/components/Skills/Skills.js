import './Skills.scss'

//translation
import { useTranslation } from 'react-i18next';

const Skills = () => {
	const { t } = useTranslation();
	return (
		<>
			<section className="skill-section">
				<div className="skill-grid">
					<div className="cell">
						<p>HTML</p>
						<p>1 {t('exp.3')}</p>
					</div>
					<div className="cell">
						<p>CSS</p>
                        <p>1 {t('exp.3')}</p>
					</div>
					<div className="cell">
						<p>Javascript</p>
						<p>1 {t('exp.3')}</p>
					</div>
					<div className="cell">
						<p>React</p>
						<p>6 {t('exp.2')}</p>
					</div>
					<div className="cell">
						<p>Sass</p>
						<p>1 {t('exp.3')}</p>
					</div>
					<div className="cell">
						<p>GIT</p>
						<p>1 {t('exp.3')}</p>
					</div>
				</div>
			</section>
		</>
	)
}

export default Skills
