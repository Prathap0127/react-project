import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct';
import AllProduct from './components/AllProduct';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import SideBar from './components/SideBar';

function App() {
  return <div id='wrapper'>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/home' element={<Login />} />
        <div>
      <SideBar />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/add-product' element={<AddProduct />} />
          <Route path='/all-product' element={<AllProduct />} />


        </div>

      </Routes>

    </BrowserRouter>
  </div>
}

export default App;
