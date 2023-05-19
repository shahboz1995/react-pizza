import React from 'react'
import { SlBasket } from 'react-icons/sl'
import './CardCantaner.css'
export const CardCantaner = () => {
  return (
    <div className="cadrKarzinka">
      <div className="headerTop">
        <div className="pizzaImga">
          <img className="pizzaIcons" src="/img/pizza.png" alt="pizza img" />
          <p className="reactPizza">REACT PIZZA</p>
          <p className="samaya">самая вкусная пицца во вселенной</p>
        </div>
        <div className="savatcha">
          <div className="cardSavat">
            <div className="cardSavatcha">
              <div className="basket">
                <img
                  className="cardBascet"
                  src="/img/bascet.jpg"
                  alt="pizza img"
                />
                <p className="karzinka">Корзина</p>
              </div>
            </div>
            <div className="cardSavatcha">
              <div className="basket">
                <img
                  className="cardKarzi"
                  src="/img/karzinka.jpg"
                  alt="pizza img"
                />
                <p className="cardK">Очистить корзину</p>
              </div>
            </div>
          </div>

          <div className="cardSavat">
            <div className="pizzaSavat">
              <div>
                <img
                  className="pizzaSavat1"
                  src="/img/1.jpg"
                  alt="pizza img"
                />
              </div>
              <div className='cardKarzinka2'>
              <p className="pizzaKarzinka">Сырный цыпленок</p>
              <p className='testo'>тонкое тесто, 26 см.</p>

              </div>
            </div>

            <div className="plus">
              <div className='minus'>
              <img
                  className='cardMinus'
                  src="/img/minus.jpg"
                  alt="pizza img"
                />
              </div>
              <div>
                <p className='karzinkaNamber'>2</p>
              </div>
              <div className='minus'>
              <img
                  className='cardPlus'
                  src="/img/plus.jpg"
                  alt="pizza img"
                />
              </div>
            </div>
            <div className='karzinkaSumma'>
              <di>
              <p className='karzinaPizzaSumma'>770 ₽ </p>
              </di>
              <div className='karzinaX'>
              <img
                  className='cardX'
                  src="/img/plusx.jpg"
                  alt="pizza img"
                />
              </div>
            </div>

          </div>
          <div className="cardSavat">
            <div className="pizzaSavat">
              <div>
                <img
                  className="pizzaSavat1"
                  src="/img/2.jpg"
                  alt="pizza img"
                />
              </div>
              <div className='cardKarzinka2'>
              <p className="pizzaKarzinka">Креветки азиатски</p>
              <p className='testo'>толстое тесто, 40 см.</p>

              </div>
            </div>

            <div className="plus">
              <div className='minus'>
              <img
                  className='cardMinus'
                  src="/img/minus.jpg"
                  alt="pizza img"
                />
              </div>
              <div>
                <p className='karzinkaNamber'>1</p>
              </div>
              <div className='minus'>
              <img
                  className='cardPlus'
                  src="/img/plus.jpg"
                  alt="pizza img"
                />
              </div>
            </div>
            <div className='karzinkaSumma'>
              <di>
              <p className='karzinaPizzaSumma'>290 ₽ </p>
              </di>
              <div className='karzinaX'>
              <img
                  className='cardX'
                  src="/img/plusx.jpg"
                  alt="pizza img"
                />
              </div>
            </div>

          </div>

          <div className="cardSavat">
            <div className="pizzaSavat">
              <div>
                <img
                  className="pizzaSavat1"
                  src="/img/3.jpg"
                  alt="pizza img"
                />
              </div>
              <div className='cardKarzinka2'>
              <p className="pizzaKarzinka">Чизбургер-пицца</p>
              <p className='testo'>тонкое тесто, 30 см.</p>

              </div>
            </div>

            <div className="plus">
              <div className='minus'>
              <img
                  className='cardMinus'
                  src="/img/minus.jpg"
                  alt="pizza img"
                />
              </div>
              <div>
                <p className='karzinkaNamber'>3</p>
              </div>
              <div className='minus'>
              <img
                  className='cardPlus'
                  src="/img/plus.jpg"
                  alt="pizza img"
                />
              </div>
            </div>
            <div className='karzinkaSumma'>
              <di>
              <p className='karzinaPizzaSumma'>350 ₽ </p>
              </di>
              <div className='karzinaX'>
              <img
                  className='cardX'
                  src="/img/plusx.jpg"
                  alt="pizza img"
                />
              </div>
            </div>

          </div>

          <div className='karzinaSummasi'>
            <div className='karzinaSummaK'>
              <div className='hammaSumma'>
                <p className='box'>Всего пицц: <span>3 шт.</span></p>
              </div>
              <div className='olinganPizza'>
                <p>
                Сумма заказа: <span>900 ₽</span> 
                </p>
              </div>
            </div>


            <div className='karzinaBtn'>
              <button className='karzinkaBtn'>
              <img
                  className='belgi'                  
                  src="/img/belgi.jpg"
                  alt="pizza img"
                />
                <p>Вернуться назад</p>
              </button>
              <div className='karzinaOplata'>
              <button className='oplati'>
              <p>Оплатить сейчас</p>
              </button>
              </div>              
            </div>
          </div>





        </div>
      </div>
    </div>
  )
}
