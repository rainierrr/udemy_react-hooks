import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext'
import Event from './Event'

const Events = () => {
  const { state } = useContext(AppContext)
  return (
      <>
      <div>
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
              { state.events.map((event) => ( <Event event={event} key={event.id}/>  )) }
            </tbody>
          </table>
      </div>
    </>
  )
}

export default Events