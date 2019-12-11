import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './redux/reducers'
import Header from './components/Header'
import AddedFeatures from './components/AddedFeatures'
import AdditionalFeatures from './components/AdditionalFeatures'
import Total from './components/Total'

const App = () => {
  const store = createStore(reducer)
  return (
    <Provider store={store}>
      <div className='boxes'>
        <div className='box'>
          <Header />
          <AddedFeatures />
        </div>
        <div className='box'>
          <AdditionalFeatures />
          <Total />
        </div>
      </div>
    </Provider>
  )
}

export default App
