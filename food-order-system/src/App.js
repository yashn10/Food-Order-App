import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Order from './pages/Order';
import Logout from './pages/logout';
import { createContext, useReducer } from 'react';
import { initialstate, reducer } from "./reducer/usereducer";


export const Usercontext = createContext();

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/order' element={<Order />} />
        <Route exact path='/logout' element={<Logout />} />
      </Routes>
    </Router>
  )
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialstate)

  return (

    <>
      <Usercontext.Provider value={{ state, dispatch }}>
        <Routing />
      < /Usercontext.Provider>
    </>


  );
}


export default App;
