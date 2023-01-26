import React from 'react';
import { CloseButton } from '../CloseButton/CloseButton';
import './todoItem.css';

export const TodoItem = ({title,text}) => {
  return (
    <li>
      <h3>{title}</h3>
      <p>{text}</p>
      <CloseButton />
    </li>
  )
}
