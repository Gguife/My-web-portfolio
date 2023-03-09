import './Skills.css'
import { Frontend } from './Frontend'
import { Backend } from './Backend'

export const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className='section__title'>Skills</h2>
      <span className="section__subtitle">Minhas linguagens</span>

      <div className="skills-container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  )
}
