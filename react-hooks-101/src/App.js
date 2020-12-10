import React, { useState } from 'react'


const App = () => {
  const [count, setCount] = useState(0)
  const increase = (state) => setCount(previousCount => previousCount + 1)
  const divide3 = (state) => setCount(previousCount => (
    previousCount % 3 == 0 ? previousCount/3 : previousCount)
  )

  return (
    <div>
      <div>
        This is a template for react App
      </div>
      <div>{count}</div>
      <div>{count/3}</div>
      <button onClick={increase}>+1</button>
      <button onClick={divide3}>3の倍数のときだけ割る</button>
    </div>
  )
}

export default App
