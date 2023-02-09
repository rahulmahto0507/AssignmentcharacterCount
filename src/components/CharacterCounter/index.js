import {Component} from 'react'

import './index.css'

import {v4} from 'uuid'
import CounterItem from '../CounterItem'

class CharacterCounter extends Component {
  state = {
    inputText: '',
    userInputList: [],
  }

  onChangeLettersCount = event => {
    this.setState({inputText: event.target.value})
  }

  addInputText = event => {
    event.preventDefault()
    const {inputText} = this.state
    const inputTextList = {
      id: v4(),
      newText: inputText,
      count: inputText.length,
    }
    this.setState(prevState => ({
      userInputList: [...prevState.userInputList, inputTextList],
      inputText: '',
    }))
  }

  render() {
    const {userInputList, inputText} = this.state
    console.log(userInputList)
    return (
      <div className="app-container">
        <div className="left-card">
          <div className="counter-head">
            <h1 className="counter-heading">
              Count the characters like a<br /> Boss...
            </h1>
          </div>
          <div className="counter-list-container">
            {userInputList.length === 0 ? (
              <div className="no-count">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                  className="image"
                />
              </div>
            ) : (
              <ul>
                {userInputList.map(item => (
                  <CounterItem key={item.id} userInputListDetails={item} />
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="input-counter">
          <h1 className="right-card-heading">Character Counter</h1>
          <form className="input-container" onSubmit={this.addInputText}>
            <input
              type="text"
              placeholder="Enter the Characters here"
              onChange={this.onChangeLettersCount}
              value={inputText}
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    )
  }
}
export default CharacterCounter
