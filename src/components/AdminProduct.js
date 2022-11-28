import axios from 'axios'
import React, {useEffect, useState} from 'react'
import AdminProductCard from './AdminProductCard'
import AdminSidebar from './AdminSidebar'


function AdminProduct() {
    let [pdata ,setPdata] = useState([])

    let getProduct = async()=>{
      try{
        let res= await axios.get('https://6350def9dfe45bbd55b0529b.mockapi.io/products/')
        console.log(res.data)
        setPdata(res.data)

      }
      catch(err){
        console.log(err)
      }

    }
    useEffect(()=>{
      getProduct()
    },[])


  return <>
  <AdminSidebar/>
  <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-center mb-4 mt-2">
          <h1 className="h3 mb-0 text-gray-800">Products</h1>
        </div>
        <div className="row justify-content-left">
{

          pdata.map((e)=>{
            console.log(e)
            return (<AdminProductCard key={e.id} data={{ id:e.id,name:e.productName,productURL:e.productURL,productPrice:e.productPrice,productActualPrice:e.productActualPrice}}/>);

          })
}
        </div>


      </div>
      </>
}

export default AdminProduct