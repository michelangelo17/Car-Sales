import React from 'react'
import Header from './components/Header'
import AddedFeatures from './components/AddedFeatures'
import AdditionalFeatures from './components/AdditionalFeatures'
import Total from './components/Total'

const App = () => (
  <div className='columns'>
    <div className='column box'>
      <Header />
      <AddedFeatures />
    </div>
    <div className='column box'>
      <AdditionalFeatures />
      <Total />
    </div>
  </div>
)

export default App
