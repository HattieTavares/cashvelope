import React from 'react'

export const Category = (props) => {
  return (
    <li>
        {props.category}<span>${props.balance}</span>
    </li>
  )
}
