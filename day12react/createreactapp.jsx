//npm install --global create-react-app to use npm

import React from 'react'

import Header from './components/Header'
import Content from './components/Content'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    )
  }
}

//nom run build to ship app