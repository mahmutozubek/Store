import { Provider } from "react-redux";
import InitialState from './store'
import React from "react";
import { createStore } from "redux";

import reducers from "./reducers";
export default function UserProvider({children}){
  const store =createStore(reducers,InitialState)

  return <Provider store ={store}>{children}</Provider>
}