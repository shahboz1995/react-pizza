import { AiOutlinePlus } from 'react-icons/ai'
import React from 'react'

import './Card.css'

const Card = ({item}) => {
  const {id, title, price, imageUrl} = item;
  // console.log(item);


  return (
    

    <div className='Card'>
      <img className='pizzaImg' src={imageUrl} alt="pizza" />
      <p className='pizzaName'>{title}</p>
      <div className='pizzaType'>
         <button className='pizzaBtn pizzaBtn1'>тонкое</button>
         <button className='pizzaBtn pizzaBtn2'>традиционное</button>
         <button className='pizzaBtn pizzaBtn3'>26 см.</button>
         <button className='pizzaBtn pizzaBtn4'>30 см.</button>
         <button className='pizzaBtn pizzaBtn5'>40 см.</button>
      </div>
      <p className='pizzaPrice'>{price}</p>
      <button className='btnAdd'><AiOutlinePlus size={12} className='btnPlus'/> Добавить 2</button>
    </div>
  )
}
export  default Card;