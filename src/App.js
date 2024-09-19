import {Component} from 'react'
import './App.css'

class App extends Component {
  state = {
    isSaved: false,
    input: '',
  }

  render() {
    const {isSaved, input} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="input-button-container">
            {!isSaved ? (
              <>
                <input
                  type="text"
                  className="input"
                  value={input}
                  onChange={event => {
                    this.setState({input: event.target.value})
                  }}
                />
                <button
                  type="button"
                  className="button"
                  onClick={() => {
                    this.setState(prevState => ({
                      isSaved: !prevState.isSaved,
                    }))
                  }}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <p className="output-text">{input}</p>
                <button
                  type="button"
                  className="button"
                  onClick={() => {
                    this.setState({isSaved: false})
                  }}
                >
                  Edit
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
