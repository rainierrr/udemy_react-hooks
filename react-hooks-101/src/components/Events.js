import React from 'react'
import { DELETE_EVENT } from '../actions'

const Events = ({state, dispatch}) => (
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
          {
            state.map((event, index) => {
              const id = event.id

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
export default Events