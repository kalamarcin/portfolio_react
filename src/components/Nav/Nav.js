import './Nav.scss';
import github from '../../assets/images/icon-github.svg'
import linked from '../../assets/images/icon-linkedin.svg'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'


const Nav = (props) => {
    const navigate = useNavigate()
    const goToHome = () => {
		navigate('/')
	}
const [isActive, setIsActive] = useState(true)
    const { i18n } = useTranslation();
    
    const handleClickLang = (lang) => {
        document.documentElement.setAttribute("lang", lang);
        i18n.changeLanguage(lang);
        if (lang === "pl") {
            setIsActive(false)
        } if (lang === 'en')  {
            setIsActive(true)
        }
    }
	return (
        <>
		<nav className="navbar">
			<h1 onClick={goToHome}>{props.title}</h1>
            <div className="social">
            <a href="https://github.com/kalamarcin" target='_blanck'><img src={github} alt="" /></a>
            <a href="https://www.linkedin.com/in/marcinkala" target='_blanck'><img src={linked} alt="" /></a>
            
            
            <div className="btns">
            <button className={isActive ? 'active' : 'disable' } onClick={() => handleClickLang('en')}>EN</button>
            <button className={!isActive ? 'active' : 'disable'} onClick={() => handleClickLang('pl')}>PL</button>
            </div>
            </div>
		</nav>
        </>
	)
}

export default Nav
