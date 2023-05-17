import React from 'react'
import './Navbar.css'

export const Navbar = () => {
  return (
      <div className='Navbar'>
          <div className='left'>
              <button className='btn btn1'>Все</button>
              <button className='btn btn2'>Мясные</button>
              <button className='btn btn3'>Вегетарианская</button>
              <button className='btn btn4'>Гриль</button>
              <button className='btn btn5'>Острые</button>
              <button className='btn btn6'>Закрытые</button>
          </div>

          <div className='right'>
            
              <label for="category">Сортировка по:</label>
              <select name="pizza">
                  <option value="volvo">популярности</option>
                  <option value="saab">по цене</option>
                  <option value="opel">по алфавиту</option>
              </select>
          </div>
      </div>
  )
}


