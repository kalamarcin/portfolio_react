import '../Projects.scss'

const Portfolio = props => {
  return (
    <>
      <div className="middle">
        <img src={props.imgSrc} alt="" />
        <div className="fragment">
          <div className="text">
            <a href="/" className="text__p">
              <p>VIEW PROJECT</p>
            </a>
            <a
              href="https://github.com/kalamarcin/portfolio_react"
              target="_blank"
              rel="noopener noreferrer"
              className="text__p">
              <p>VIEW CODE</p>
            </a>
          </div>
        </div>
      </div>
      <h3 className="cell__h3">{props.name}</h3>
      <p className="cell__p">{props.tech}</p>
      <div className="hidden-box">
        <a href="/" className="hidden-txt">
          VIEW PROJECT
        </a>
        <a
          href="https://github.com/kalamarcin/portfolio_react"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden-txt">
          VIEW CODE
        </a>
      </div>
    </>
  )
}

export default Portfolio
