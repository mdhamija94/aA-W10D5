import React from "react";
import ReactDOM from "react-dom";
import configStore from "./store/store.js";
import Root from './components/root';
import allTodos from './reducers/selectors';

$(() => {
  let root = document.getElementById("root");

  const store = configStore({})
  window.store = store;
  window.allTodos = allTodos;

  ReactDOM.render(<Root store={store} />, root)
})