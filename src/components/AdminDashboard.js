import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DbCard from './DbCard'
import AdminSidebar from './AdminSidebar'

function AdminDashboard() {
    let [user,setUser] = useState([])
    let [order,setOrder] = useState([])
    let getDashboardData = async() =>{
      let res= await axios.get('https://6350def9dfe45bbd55b0529b.mockapi.io/users')
      setUser(res.data)
      let orderData= await axios.get('https://6350def9dfe45bbd55b0529b.mockapi.io/cart')
      setOrder(orderData.data)
    }
  useEffect(()=>{
    getDashboardData()
  },[])
  
    return <>
    <AdminSidebar/>
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4 mt-2">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
              className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
          </div>
          <div className="row">
           {/* <ProducatCard data = {{value:20,icon:'fa-calendar',cardBorder:'primary'}}/> */}
           <DbCard  data = {{title:"Users",value:user.length,icon:'fa-user',cardBorder:'primary'}}/>
           <DbCard  data = {{title:"Orders",value:order.length,icon:'fa-cart-shopping',cardBorder:'primary'}}/>
          </div>
  
  
        </div>
  
      </div>
  
      {/* <!-- Footer --> */}
      <footer className="sticky-footer bg-white">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>Copyright &copy; Your Website 2021</span>
          </div>
        </div>
      </footer>
      {/* <!-- End of Footer --> */}
      {/* <ToastContainer
        autoClose={3000}
      /> */}
    </div>
    </>
}

export default AdminDashboard