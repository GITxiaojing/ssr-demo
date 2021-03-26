import React from 'react';
import ReactDom from 'react-dom';
import { clientRouter } from '../router'

const App = () => {
  return (
    clientRouter
  )
}

ReactDom.hydrate(<App />, document.getElementById('root'));