import './Hero.scss'
import me from '../../assets/images/me.png' 

const Hero = () => {
	return (
	<>
		<div className="photo-box">
			<img src={me} alt="" />
		</div>
		<div className="hero-box">
			<h2>Nice to meet you!</h2>
			<h2>I'm <span>Marcin Kala</span>.</h2>

		</div>
		</>
	)
}

export default Hero
