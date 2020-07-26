import React, { useReducer, createContext, useState } from 'react';
import './App.css';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import MenuComp from './Component/MenuComp';
import LoginComp from './Component/LoginComp';
import HomeComp from './Component/HomeComp';
import RegisterComp from './Component/RegisterComp';
import ProdukBukuComp from './Component/ProdukBukuComp';
import DetailBukuComp from './Component/DetaiBukuComp';
import ListBarangComp from './Component/ListBarangComp';
import TambahBarangComp from './Component/TambahBarangComp';
import EditBarangComp from './Component/EditBarangComp';


export const AuthContext = createContext()

//initial state
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user))
      localStorage.setItem("token", JSON.stringify(action.payload.token))
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      }
    case "LOGOUT":
      localStorage.clear()
      return {
        ...state,
        isAuthenticated: false,
        user: null
      }
    default:
      return state
  }
}






function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <BrowserRouter>
      <Switch>
        <AuthContext.Provider value={{
          state,
          dispatch
        }}>
          <MenuComp />
          {!state.isAuthenticated ?
            <Redirect
              to={{
                pathname: "/"
              }}
            /> :
            <Redirect
              to={{
                pathname: "/homepage"
              }}
            />
          }
            
        <Route exact path="/" component={LoginComp}/>
        <Route exact path="/homepage" component={HomeComp}/>
        <Route exact path="/register" component={RegisterComp}/>
        <Route exact path="/produk" component={ProdukBukuComp}/>
        <Route exact path="/detail/:id" component={DetailBukuComp}/>
        <Route exact path="/barang" component={ListBarangComp}/>
        <Route exact path="/barang/tambahbarang" component={TambahBarangComp}/>
        <Route exact path="/barang/editbarang" component={EditBarangComp}/>




      
    
    </AuthContext.Provider>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
