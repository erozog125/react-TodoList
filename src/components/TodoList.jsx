import React from 'react';
import { TodoItem } from './TodoItem';


export const TodoList = () => {

  const tasks = [
    {title:"Cepillarme los dientes", stateTask: false},
    {title:"Preparar Desayuno", stateTask: false},
    {title:"Preparar café", stateTask: false},
    {title:"Revisar agenda", stateTask: false},
    {title:"Aseo Personal", stateTask: false},
  ];

  return (
    <ul>
      {
        tasks.map( (task,idx) => <TodoItem key={idx} text={task.title} />)
      }
    </ul>
  )
}
