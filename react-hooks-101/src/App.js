import React, { useState } from 'react'


const App = props => {

  const [name, setName] = useState(props.name)
  const [price, setPrice] = useState(props.price)
  const reset = () => {
    setPrice(props.price)
    setName(props.name)
  }


  return (
    <div>
      <p>{name}</p>
      <p>現在のボタンは{price}</p>
      <button onClick={() =>setPrice(price + 1)}>+1</button>
      <button onClick={reset}>reset</button>
      <input value={name} onChange={e => setName(e.target.value)}/>
    </div>
  )
}

App.defaultProps = {
  name: 'サンプル',
  price: 1000
}

export default App
