import React, { useContext, useState } from 'react'
import {
  DELETE_ALL_EVENTS,
  CREATE_EVENT,
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS
} from '../actions'
import { timeCurrentIso8601 } from '../utils'
import AppContext from '../contexts/AppContext'
import 'bootstrap/dist/css/bootstrap.min.css'
const EventForm = () => {
  const { state, dispatch } = useContext(AppContext)
	const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = e => {
    e.preventDefault()

    dispatch({
     type: CREATE_EVENT,
     title,
     body
    })

    dispatch({
      type: ADD_OPERATION_LOG,
      description: 'イベントを作成しました',
      operatedAt: timeCurrentIso8601()
     })
    setTitle('')
    setBody('')
  }

  const deleteAllEvent = e => {
    e.preventDefault()
    if (window.confirm("全てのイベントを本当に削除しても良いですか?")) {
      dispatch({ type: DELETE_ALL_EVENTS })
      dispatch({
        type: ADD_OPERATION_LOG,
        description: '全てのイベントを削除しました',
        operatedAt: timeCurrentIso8601()
      })
    }
  }

  const deleteAllOperationLogs = e =>{
    e.preventDefault()
    if (window.confirm("全ての操作ログを本当に削除しても良いですか?")) {
      dispatch({
        type: DELETE_ALL_OPERATION_LOGS,
        description: '全ての操作ログを削除しました',
        operatedAt: timeCurrentIso8601()
       })
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
        <button className="btn btn-danger" onClick={deleteAllEvent} disabled={state.events.length === 0}>全てのイベントを削除する</button>
        <button className="btn btn-danger" onClick={deleteAllOperationLogs} disabled={state.operationLogs.length === 0} >全ての操作ログを削除する</button>
    	</form>
    </>
  )
}
export default EventForm