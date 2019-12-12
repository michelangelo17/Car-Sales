import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'

const Total = () => {
  const { additionalPrice, car } = useSelector(
    state => ({ additionalPrice: state.additionalPrice, car: state.car }),
    shallowEqual
  )
  return (
    <div className='content'>
      <h4>Total Amount: ${car.price + additionalPrice}</h4>
    </div>
  )
}

export default Total
