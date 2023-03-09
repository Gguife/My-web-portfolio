import {Social} from './Social'
import {Data} from './Data'
import './Home.css'
import { ScrollDown } from './ScrollDown'



export const Home = () => {
  return (
    <section className="home section" id='home'>
      <div className="home-container container grid">
        <div className="home-content grid">
          <Social />

            <div className="home-img"></div>

          <Data />
        </div>

        <ScrollDown />
      </div>
    </section>
  )
}

