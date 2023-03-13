import './Projects.css'
import {FaGithub} from 'react-icons/fa'
import projectVideo from '../../images/netflix-clone.mp4'

export const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Ultimo projeto</span>

      <div className="project-last">
        <video controls autoPlay loop src={projectVideo}/>
        <a href="https://gguife-net-clone-jbgd.vercel.app/">Netflix Clone</a>
      </div>
      <div className="projects-total">
        <a href="https://github.com/Gguife"> <FaGithub /><br/></a>
      </div>

    </section>
  )
}
