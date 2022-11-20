import { Link, useNavigate } from 'react-router-dom'
//style
import './Hero.scss'
import me from '../../assets/images/me4.jpg'


const Hero = () => {
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
				<h2>Nice to meet you!</h2>
				<h2>
					I'm <span>Marcin Kala</span>.
				</h2>
				<div className="description">
					<p className="description__p">
						For many years I was working as a freelance graphic designer, creating visual identification and DPT. From
						an early age, I created simple HTML and CSS websites. I am currently studying at the Software Development
						Academy. The program of the course is HTML, CSS (and SASS), JavaScript and React. During the course I got
						acquainted with the scrum methodology, I used GIT and I had the opportunity to learn the best programming
						practices. I love learning new things and getting to know new concepts. Able to effectively self-manage
						during independent projects, as well as collaborate as part of a productive team.
					</p>

					<div className="description__contact">
						<p className="description__contact__paragraf">
							<button onClick={goToContact}>CONTACT ME</button>
							
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Hero
