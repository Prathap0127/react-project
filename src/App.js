import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct';
import AdminCart from './components/AdminCart';
import AdminDashboard from './components/AdminDashboard';
import AdminProduct from './components/AdminProduct';
import AllProduct from './components/AllProduct';
import ALogin from './components/ALogin';
import Cart from './components/Cart';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
// import SideBar from './components/SideBar';

function App() {
  let location = useLocation()
  console.log(location.pathname);
  return <div id="wrapper">
    {/* <div>
      {location.pathname!=='/home' && location.pathname!=='/login' && location.pathname!=='/admin' && location.pathname!=='/register'&&<SideBar />}
    </div> */}
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/add-product' element={<AddProduct />} />
          <Route path='/add-product/:id' element={<AddProduct />} />
          <Route path='/all-product' element={<AllProduct />} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/admin' element={<ALogin/>}/>
          <Route path='/admin-dashboard' element={<AdminDashboard/>}/>
          <Route path='/product' element={<AdminProduct/>} />
          <Route path='/admin-orders' element={<AdminCart/>} />

          <Route path='/' element={<Navigate to='/home'/>}></Route>
      </Routes>

  </div>
}

export default App;
