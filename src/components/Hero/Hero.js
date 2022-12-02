import { useNavigate } from 'react-router-dom'
//style
import './Hero.scss'
import me from '../../assets/images/me.jpg'
import memob from '../../assets/images/me_mob.png'
//translation
import { useTranslation } from 'react-i18next'

const Hero = props => {
	const { t } = useTranslation()
	const navigate = useNavigate()
	const goToContact = () => {
		navigate('/contact')
	}

	const onButtonClick = () => {
		fetch('MarcinKalaResume.pdf').then(response => {
			response.blob().then(blob => {
				const fileURL = window.URL.createObjectURL(blob)
				let alink = document.createElement('a')
				alink.href = fileURL
				alink.download = 'MarcinKalaResume.pdf'
				alink.click()
			})
		})
	}
	return (
		<>
			<div className="photo-box">
				<img className="web-img" src={me} alt="osoba w czapce i okularach przeciwsponecznych na czarno-biało" />
				<img className="mob-img" src={memob} alt="osoba w czapce i okularach przeciwsponecznych na czarno-biało" />
			</div>
			<div className="hero-box">
				<h2>
					{t('header.2')} {props.name}.
				</h2>
				<h2>
					<span> {t('header.1')}</span>
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
							<button onClick={onButtonClick}>
								{t('buttons.download')}
								<i className="fa-sharp fa-solid fa-circle-down"></i>
							</button>
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Hero
