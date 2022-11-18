import './Nav.scss';
import github from '../../assets/images/icon-github.svg'
import frontend from '../../assets/images/icon-frontend-mentor.svg'
import linked from '../../assets/images/icon-linkedin.svg'
const Nav = () => {
	return (
        <>
		<nav className="navbar">
			<h1>marcinkala</h1>
            <a href="https://github.com/kalamarcin" target='_blanck'><img src={github} alt="" /></a>
            <a href="https://www.linkedin.com/in/marcinkala" target='_blanck'><img src={linked} alt="" /></a>
            <a href="https://www.frontendmentor.io/profile/kalamarcin" target='_blanck'><img src={frontend} alt="" /></a>
		</nav>
        </>
	)
}

export default Nav
