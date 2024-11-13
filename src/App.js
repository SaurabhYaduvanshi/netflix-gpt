
import Body from './components/Body';
import React from 'react'
import appStore from './utils/appStore';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={appStore}>
    <Body/>
    </Provider>
  )
}

export default App