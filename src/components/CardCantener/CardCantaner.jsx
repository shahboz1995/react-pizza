import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Card/Card'

import './CardCantaner.css'
 const CardCantaner = ({items}) => {
  return (
    
    <div className="cadrKarzinka">
       {items.map((item) => {
        return <Card key={item.id} item={item}/>;
      })}

    </div>
  )
}
export default CardCantaner
