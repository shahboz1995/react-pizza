import React from 'react'
import { Link } from 'react-router-dom'
import { SlBasket } from 'react-icons/sl'
import './Haeder.css'

export const Header = () => {
  return (
      <div className='header'>
          <div className='headerLeft'>
              <img
                  className='pizzaIcon'
                  src="/img/pizza.png"
                  alt="pizza img" />
              <p className='text1'>REACT PIZZA</p>
              <p className='text2'>самая вкусная пицца во вселенной</p>
          </div>

          <div className='headerRight'>
            <Link to="/cardCantaner" className='text3'>520 ₽</Link>
              <img className='line' src="/img/top.jpg" alt="line" />
              <p className='text4'>
                  <SlBasket/>
              </p>
              
          </div>
      </div>
  )
}