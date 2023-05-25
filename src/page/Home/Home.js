import React, { useEffect } from 'react'
import { fetchItems } from '../../redux/thunk'
import {
  Card,
  Header,
  Navbar,
  Wrapper,
} from '../../components/index'
import  CardCantaner  from '../../components/CardCantener/CardCantaner'
import { useDispatch, useSelector } from 'react-redux'

export const Home = () => {
  const { allPizza } = useSelector((state) => state)
  const dispatch = useDispatch()
  // console.log(allPizza);

  useEffect(() => {
    dispatch(fetchItems(`  http://localhost:3030/allPizza`, `SAVE_ALL_PIZZA`))
  }, [])

  return (
    <div className="homeContainer">
      <Wrapper>
        <Header />
        <Navbar />
        <CardCantaner items={allPizza} />
      </Wrapper>
    </div>
  )
}
