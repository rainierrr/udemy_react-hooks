import React, { useReducer, useState } from 'react'
import reducer from '../reducers'

const EventForm = ({state, dispatch}) => {

	const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = e => {
    e.preventDefault()

    dispatch({
     type: 'CREATE_EVENT',
     title,
     body
    })
    setTitle('')
    setBody('')
  }

  const deleteAllEvent = e => {
    e.preventDefault()
    if (window.confirm("全てののイベントを本当に削除しても良いですか?")) {
      dispatch({ type: 'DELETE_ALL_EVENTS' })
    }
  }

	const unCreable = title === '' || body == ''

  return (
    <>
      <h4>イベント作成フォーム</h4>
    	<form>
        <div className="form-group">
        <label htmlFor="formEventTitle">タイトル</label>
        <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)}/>
        </div>
        <div className="form-group">
        <label htmlFor="formEventBody">ボディー</label>
        <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)}/>
        </div>
        <button className="btn btn-primary" onClick={addEvent} disabled={unCreable}>イベントを作成する</button>
        <button className="btn btn-danger" onClick={deleteAllEvent} disabled={state.length === 0}>全てのイベントを削除する</button>
    	</form>
    </>
  )
}
export default EventForm