import React from 'react'
import Forms from '../../components/widgets/todo/form'

export default function EditTodo({match}) {
  return (
    <div className={'container todo-new'}>
      <Forms id={match.params.id}/>
    </div>
  )
}
