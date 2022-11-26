import React from 'react'
import {Link} from 'react-router-dom'

function SideBar() {
  return <>
  <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

<div className="sidebar-brand d-flex align-items-center justify-content-center">
 <div className="sidebar-brand-icon rotate-n-15">
     <i className="fas fa-laugh-wink"></i>
 </div>
 <div className="sidebar-brand-text mx-3">Jewel Shop</div>
</div>

<hr className="sidebar-divider my-0"/>

<li className="nav-item active">
 <Link to='/dashboard'>
 <div className="nav-link">
     <i className="fas fa-fw fa-tachometer-alt"></i>
     <span>Dashboard</span></div>
     
 </Link>
</li>

<hr className="sidebar-divider"/>

<div className="sidebar-heading">
 Product
</div>

<li className="nav-item">
 <Link to='/add-product'>
 <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
     aria-expanded="true" aria-controls="collapseTwo">
     <i className="fas fa-fw fa-cog"></i>
     <span>Add Product</span>
 </div>
 </Link>
</li>

<li className="nav-item">
 <Link to='/all-product'>
 <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities"
     aria-expanded="true" aria-controls="collapseUtilities">
     <i className="fas fa-fw fa-wrench"></i>
     <span>Products</span>
 </div>
 </Link>
</li>

<hr className="sidebar-divider my-0"/>
<hr className="sidebar-divider"/>
<div className="sidebar-heading">
Users
</div>
<li className="nav-item">
 <Link to='/all-users'>
 <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities"
     aria-expanded="true" aria-controls="collapseUtilities">
     <i className="fas fa-fw fa-wrench"></i>
     <span>All Users</span>
 </div>
 </Link>
</li>


</ul>
</>
}

export default SideBar