import React from 'react'



function TodoList(props) {
  return (
    <li className="list-item">
         {props.item} 
        <span className='icons' onClick={e =>{
            props.deleteItem(props.index)
        }}><div className='icon-delete'>X</div></span>
    </li>
  )
}

export default TodoList
