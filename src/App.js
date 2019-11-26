import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import MainLayout from "./components/layouts/index"
import Home from './pages/home'
import listTodo from './pages/todo/index'
import newTodo from './pages/todo/new'
import editTodo from './pages/todo/edit'
import './App.css';


const App = () => (
  <MainLayout>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={listTodo}/>
        <Route exact path='/todo-list' component={listTodo}/>
        <Route exact path='/todo-list/new' component={newTodo}/>
        <Route exact path={'/todo-list/:id/edit'} component={editTodo}/>
      </Switch>
    </BrowserRouter>
  </MainLayout>
)

export default App;
