import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import  reducers from "./Combinereducer.js";
import { Provider } from "react-redux";
import Hello from "./Hello";
import App from "./App.js"

let store = createStore(reducers);


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);


