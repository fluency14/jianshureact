import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import {GlobalStyle} from './style.js';
import {GlobalIconStyle} from './assets/icon/iconfont'
import Header  from './components/header/index'
import Home from './pages/home'
import Detail from './pages/detail'
import store from './store/index'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Provider store={store}>
          <Header />
          <BrowserRouter>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </BrowserRouter>
          <GlobalStyle />
          <GlobalIconStyle />
        </Provider>
      </div>
    );
  }
}

export default App;
