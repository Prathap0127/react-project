import axios from 'axios'
import React, {useEffect, useState} from 'react'
import ProductCard from './ProductCard'

function AllProduct() {
    let [pdata ,setPdata] = useState('')

    let getProduct = async()=>{
      try{
        let res= await axios.get('https://6350def9dfe45bbd55b0529b.mockapi.io/product/')
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


  return <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-center mb-4 mt-2">
          <h1 className="h3 mb-0 text-gray-800">Products</h1>
        </div>
        <div className="row justify-content-left">
{

          Array.from(pdata).map((e)=>{
            console.log(e)
            return (<ProductCard key={e.id} data={{name:e.name,productURL:e.productURL,productPrice:e.productPrice,productActualPrice:e.productActualPrice}}/>);

          })
}
        </div>


      </div>

}

export default AllProduct