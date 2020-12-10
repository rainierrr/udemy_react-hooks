import React, { useEffect, useState } from 'react'

const App = props => {

  const [state, setState] = useState(props)
  const reset = () => {
    setState(props)
  }

  useEffect(() => {
    console.log('This is like componentDidMount or componentDidUpdate')
  })

  const renderPeriod = () => {
    console.log('renderPeriod renders period.')
    return '.'
  }

  return (
    <div>
      <p>{state.name}</p>
      <p>現在の値段は{state.price}{renderPeriod()}</p>
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
