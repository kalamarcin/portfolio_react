import './Skills.scss'

const Skills = ({ skills }) => {
  
  return (
    <>
      <section className="skill-section">
        
        <div className="skill-grid">
          {skills.map(item => (
            
            <div className="cell" key={item.id}>
              <p>
                
                <img src={item.name} alt="" />
              </p>
              <p>{item.ex}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Skills
