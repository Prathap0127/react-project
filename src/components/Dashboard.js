import React from 'react'
import DbCard from './DbCard'

function Dashboard() {
  return <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4 mt-2">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
            className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
        </div>
        <div className="row">
         {/* <ProducatCard data = {{value:20,icon:'fa-calendar',cardBorder:'primary'}}/> */}
         <DbCard  data = {{value:20,icon:'fa-calendar',cardBorder:'primary'}}/>
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
}

export default Dashboard