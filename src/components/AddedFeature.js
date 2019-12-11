import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem } from '../redux/actions'

const AddedFeature = props => {
  const dispatch = useDispatch()
  return (
    <li>
      <button
        onClick={() => dispatch(removeItem(props.feature))}
        className='button'
      >
        X
      </button>
      {props.feature.name}
    </li>
  )
}
export default AddedFeature
