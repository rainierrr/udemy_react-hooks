import React, { useReducer } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import reducer from '../reducers'
import EventForm from './EventForm'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <div className="container">
      <EventForm state={state} dispatch={dispatch} />
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            state.map((event, index) => {
              const id = event.id
              const DELETE_EVENT = 'DELETE_EVENT'
              const handleClickDelete = () => {
                if (window.confirm(`イベント(id=${id})を削除しても良いですか?`)) {
                  dispatch({
                    type: DELETE_EVENT,
                    id
                  })
                }
              }
              return (
                <tr key={index}>
                  <th>{id}</th>
                  <th>{event.title}</th>
                  <th>{event.body}</th>
                  <th><button type="button" className="btn btn-danger" onClick={handleClickDelete}>削除</button></th>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default App