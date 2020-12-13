import React, { useReducer } from 'react'
import AppContext from '../contexts/AppContext'
import reducer from '../reducers'
import EventForm from './EventForm'
import Events from './Events'
import 'bootstrap/dist/css/bootstrap.min.css'



const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container">
      <EventForm />
      <Events />
    </div>
    </AppContext.Provider>
  )
}

export default App