import React from 'react'
import { connect } from 'react-redux'
import { removeItem } from '../redux/actions'

const AddedFeature = props => (
  <li>
    <button
      onClick={e => props.removeItem(props.feature)}
      className='button'
    >
      X
    </button>
    {props.feature.name}
  </li>
)

export default connect(null, { removeItem })(AddedFeature)
