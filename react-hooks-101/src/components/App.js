import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = props => {

  const [state, setState] = useState(props)

  return (
    <div className='container'>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className='form-group'>
          <label htmlFor='formEventTitle'>タイトル</label>
          <input className='form-control' id='formEventTitle'/>
        </div>
        <div className='form-group'>
          <label htmlFor='formEventBody'>ボディー</label>
          <textarea className='form-control' id='formEventBody'/>
          <button className='btn btn-primary'>イベントを作成する</button>
          <button className='btn btn-danger'>すべてのイベントを削除する</button>
        </div>
      </form>
      <h4>イベント一覧</h4>
       <table className='table table-hober'>
         <thead>
           <tr>
             <th>ID</th>
             <th>タイトル</th>
             <th>ボディー</th>
           </tr>
         </thead>
         <tbody>

         </tbody>
       </table>
    </div>
  )
}

App.defaultProps = {
  name: 'サンプル',
  price: 1000
}

export default App
