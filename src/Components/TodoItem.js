import React from 'react'

export const TodoItem = (todoitem) => {
  return (
    <div className="card">
      <div className="card-body">
      <h3>{todoitem.todos[0].title}</h3>
      <h5>{todoitem.todos[0].desc}</h5>
      {/* {console.log('item :',todoitem.todos[0].title)} */}
      <button type="button" className="btn btn-primary" >Delete</button>
      </div>
    </div>
  )

}
