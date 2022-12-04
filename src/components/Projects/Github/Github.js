import '../Projects.scss'

const Github = props => {
  return (
    <>
      <div className="middle">
        <img src={props.imgSrc} alt="" />
        <div className="fragment">
          <div className="text">
            <a href="https://devfinder-mk.netlify.app" target="_blank" rel="noopener noreferrer" className="text__p">
              VIEW PROJECT
            </a>
            <a
              href="https://github.com/kalamarcin/github-user-search"
              target="_blank"
              rel="noopener noreferrer"
              className="text__p">
              VIEW CODE
            </a>
          </div>
        </div>
      </div>
      <h3 className="cell__h3">{props.name}</h3>
      <p className="cell__p">{props.tech}</p>
      <div className="hidden-box">
        <a href="https://devfinder-mk.netlify.app/" target="_blank" rel="noopener noreferrer" className="hidden-txt">
          VIEW PROJECT
        </a>
        <a
          href="https://github.com/kalamarcin/github-user-search"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden-txt">
          VIEW CODE
        </a>
      </div>
    </>
  )
}

export default Github
