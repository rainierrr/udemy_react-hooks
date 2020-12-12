import React, { useReducer } from 'react'
import { DELETE_EVENT } from '../actions'
import reducer from '../reducers'
import EventForm from './EventForm'
import Events from './Events'
import 'bootstrap/dist/css/bootstrap.min.css'



const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <div className="container">
      <EventForm state={state} dispatch={dispatch} />
      <Events state={state} dispatch={dispatch} />
    </div>
  )
}

export default App