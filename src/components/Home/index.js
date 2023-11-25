import {Link} from 'react-router-dom'

import './index.css'

const Home = () => (
  <div className="bg-container">
    <nav className="nav-bar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
        alt="website logo"
        className="nav-image"
      />
    </nav>
    <div className="container">
      <h1 className="heading">Welcome to Meetup</h1>
      <p className="para">Please Register for the topic</p>
      <Link to="/register">
        <button className="button" type="button">
          Register
        </button>
      </Link>
      <img
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
      />
    </div>
  </div>
)
export default Home
