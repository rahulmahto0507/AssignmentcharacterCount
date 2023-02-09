import './index.css'

const CounterItem = props => {
  const {userInputListDetails} = props
  const {newText, count} = userInputListDetails

  return (
    <li className="user-input-item">
      <p className="user-entered-details">
        {newText} : {count}
      </p>
    </li>
  )
}

export default CounterItem
