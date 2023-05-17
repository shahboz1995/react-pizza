import React from 'react'
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
              <p className='text3'>520 ₽</p>
              <p>0</p>
              <img className='line' src="/assets/headerLine.jpg" alt="line" />
              <p className='text4'>
                  <SlBasket/>
              </p>
          </div>
      </div>
  )
}