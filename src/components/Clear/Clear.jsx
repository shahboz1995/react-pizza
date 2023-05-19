import React from 'react'
import { Link } from 'react-router-dom'


import './Claer.css'

export const Clear = () => {
  return (
    <div className="claer">
      <div className="clearHaeder">
        <Link to="/">
        <div className="pizzaImga1">
          <img className="pizzaIcons" src="/img/pizza.png" alt="pizza img" />
          <p className="reactPizza">REACT PIZZA</p>
          <p className="samaya">самая вкусная пицца во вселенной</p>
        </div>
        </Link>
        
        <div className="claerContener">
          <div className="userClear">
            <div className="claerKarzinka">
              <div className="claerSmayil">
                <div>
                  <h4 className="claerK">Корзина пустая </h4>
                </div>
                <div>
                  <img
                    className="smayil"
                    src="/img/simayil.jpg"
                    alt="pizza img"
                  />
                </div>
              </div>
              <div className='clarTaxt'>
                <p className='claerText'>
                  Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы
                  заказать пиццу, перейди на главную страницу.
                </p>
              </div>
            </div>
            <div className="claerUser">
            <img
                    className="user"
                    src="/img/user.jpg"
                    alt="pizza img"
                  />
            </div>
            <div className="claerBtn">
            <button className='btnClaer'>
              <p className='orqaga'>Вернуться назад</p>
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
