import React from 'react';
import { Route } from 'react-router-dom';
import { StaticRouter, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from '../redux/reducer';
import Home from '../pages/Home';
import Todo from '../pages/Todo/index.jsx'

const store = Store();

const Router = (
  <div>
    <Route path="/todo" exact component={Todo}></Route>
    <Route path="/" exact component={Home}></Route>
  </div>
)

export const clientRouter = (
  <Provider store={store}>
    <BrowserRouter>
      {Router}
    </BrowserRouter>
  </Provider>
)

export const serverRouter = (req) => {
  return (
    //在服务端我们需要使用StaticRouter来替代BrowserRouter   
    //传入当前path
    //context为必填参数,用于服务端渲染参数传递
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        {Router}
      </StaticRouter>
    </Provider>
  )
}