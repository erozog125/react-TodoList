import React from 'react';
import { TodoItem } from '../TodoItem/TodoItem';
import './todoList.css';


export const TodoList = () => {

  const tasks = [
    {title:"Task1",description:"Cepillarme los dientes", stateTask: false},
    {title:"Task1",description:"Preparar Desayuno", stateTask: false},
    {title:"Task1",description:"Preparar café", stateTask: false},
    {title:"Task1",description:"Revisar agenda", stateTask: false},
    {title:"Task1",description:"Aseo Personal", stateTask: false},
  ];

  return (
    <ul>
      {
        tasks.map( (task,idx) => <TodoItem key={idx} title={task.title} text={task.description} />)
      }
    </ul>
  )
}
