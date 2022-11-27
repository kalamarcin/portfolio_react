import { useNavigate } from 'react-router-dom'
//style
import './Hero.scss'
import me from '../../assets/images/me.jpg'
//translation
import { useTranslation } from 'react-i18next'

const Hero = (props) => {
	const { t } = useTranslation()
	const navigate = useNavigate()
	const goToContact = () => {
		navigate('/contact')
	}
	return (
		<>
			<div className="photo-box">
				<img src={me} alt="osoba w czapce i okularach przeciwsponecznych na czarno-biało" />
			</div>
			<div className="hero-box">
				<h2>{t('header.1')}</h2>
				<h2>
					{t('header.2')} <span>{props.name}</span>.
				</h2>
				<div className="description">
					<p className="description__p">{t('description.1')}</p>

					<div className="description__contact">
						<p className="description__contact__paragraf">
							<button onClick={goToContact}>
								{t('buttons.contact')} <i className="fa-sharp fa-solid fa-address-card"></i>
							</button>
						</p>
						<p className="description__contact__paragraf">
							<button><a href={props.link} download>
								{t('buttons.download')}
								<i className="fa-sharp fa-solid fa-circle-down"></i></a>
							</button>
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Hero
