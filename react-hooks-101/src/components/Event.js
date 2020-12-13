import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext'
import { DELETE_EVENT } from '../actions'

const Event = ({ event }) => {
	const { dispatch } = useContext(AppContext)
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
		<tr>
			<th>{id}</th>
			<th>{event.title}</th>
			<th>{event.body}</th>
			<th><button type="button" className="btn btn-danger" onClick={handleClickDelete}>削除</button></th>
		</tr>
	)
}

export default Event