import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/actions'

const AdditionalFeature = props => {
  const dispatch = useDispatch()
  return (
    <li>
      <button
        onClick={() => dispatch(addItem(props.feature))}
        className='button'
      >
        Add
      </button>
      {props.feature.name + props.feature.price}
    </li>
  )
}

export default AdditionalFeature
