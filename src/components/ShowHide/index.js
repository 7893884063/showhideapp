// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {IsClickedFirstName: false, IsClickedLastName: false}

  onclickFirstName = () => {
    this.setState(prevState => ({
      IsClickedFirstName: !prevState.IsClickedFirstName,
    }))
  }

  onclickLastName = () => {
    this.setState(prevState => ({
      IsClickedLastName: !prevState.IsClickedLastName,
    }))
  }

  render() {
    const {IsClickedFirstName, IsClickedLastName} = this.state
    return (
      <div className="app-container">
        <h1 className="heading ">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              type="button"
              className="show-hide-button"
              onClick={this.onclickFirstName}
            >
              Show/hide firstname
            </button>
            <div>{IsClickedFirstName && <p className="name">Joe</p>}</div>
          </div>

          <div>
            <button
              type="button"
              className="show-hide-button"
              onClick={this.onclickLastName}
            >
              Show/hide lastname
            </button>
            <div>{IsClickedLastName && <p className="name">Jonas</p>}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
