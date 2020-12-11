import React, { useEffect, useState } from 'react'

const App = props => {

  const [state, setState] = useState(props)
  const { name, price } = state
  const reset = () => {
    setState(props)
  }

  useEffect(() => {
    console.log('This is like componentDidMount or componentDidUpdate')
  })

  useEffect(() => {
    console.log('This is like componentDidMount')
  },[])

  useEffect(() => {
    console.log('This callback is for name only')
  },[name])

  return (
    <div>
      <p>{name}</p>
      <p>現在の値段は{state.price}</p>
      <button onClick={() =>setState({...state, price: state.price + 1})}>+1</button>
      <button onClick={reset}>reset</button>
      <input value={state.name} onChange={e => setState({...state, name: e.target.value})}/>
    </div>
  )
}

App.defaultProps = {
  name: 'サンプル',
  price: 1000
}

export default App
