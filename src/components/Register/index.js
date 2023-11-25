import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {userInput: '', selectItem: topicsList[0].id, isTrue: false}

  onChangeNameInput = event => {
    this.setState({userInput: event.target.value})
  }

  onSelectForm = event => {
    this.setState({selectItem: event.target.value})
  }

  onSubmitForm = () => {
    const {userInput} = this.state
    if (userInput === '') {
      this.setState({isTrue: true})
    }
  }

  onSelectForm = event => {
    this.setState({selectItem: event.target.value})
  }

  getHomeRoute = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const {userInput, selectItem, isTrue} = this.state
    console.log(isTrue)
    return (
      <div className="main-container">
        <nav className="nav-bar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
            className="image-logo"
          />
        </nav>
        <div className="card-container">
          <div className="sub-card">
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
                className="img-view"
              />
            </div>
            <form className="form-container" onSubmit={this.onSubmitForm}>
              <h1 className="heading-form">Let us join</h1>
              <label htmlFor="name" className="name">
                NAME
              </label>
              <input
                type="text"
                id="name"
                className="input-el"
                onChange={this.onChangeNameInput}
                value={userInput}
              />
              <label htmlFor="name" className="name">
                TOPICS
              </label>
              <select
                className="select-cls"
                value={selectItem}
                onChange={this.onSelectForm}
              >
                {topicsList.map(each => (
                  <option value={each.id}>{each.displayText}</option>
                ))}
              </select>
              <button
                type="submit"
                className="button-cls"
                onClick={this.getHomeRoute}
              >
                Register Now
              </button>
              {isTrue ? (
                <p className="error">Please enter your name</p>
              ) : (
                <p>Please enter your name</p>
              )}
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default Register
