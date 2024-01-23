import {Component} from 'react'

import './index.css'

class LightDark extends Component {
  state = {bgLight: true}

  onClickButton = () => {
    this.setState(prevState => ({bgLight: !prevState.bgLight}))
  }

  render() {
    const {bgLight} = this.state
    const modeOfClassName = bgLight ? 'Dark-mode' : 'Light-mode'
    const buttonText = bgLight ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="bg-container">
        <div className={`container ${modeOfClassName}`}>
          <h1 className="heading">Click To change</h1>
          <button type="button" className="button" onClick={this.onClickButton}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDark
