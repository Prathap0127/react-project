import axios from 'axios'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function AddProduct() {
    let navigate=useNavigate()
    let [productName, setPName]=useState("")
    let [productMaterial, setPMaterial] = useState("")
    let [productCategory, setPCategory] = useState("")
    let [productPrice, setPPrice] = useState("")
    let [productActualPrice,setPActualPrice] = useState("")
    let [productURL, setPURL] = useState("")


    let handleProduct= async(event)=>{
        event.preventDefault()
        console.log("hai")
        let pData={
            name:productName,
            productType:productMaterial,
            productCat:productCategory,
            productPrice:productPrice,
            productActualPrice:productActualPrice,
            productURL:productURL

        }
        try{
            let getPData=await axios.post('https://6350def9dfe45bbd55b0529b.mockapi.io/product',pData)
            if (getPData.status===201){
                alert('product added ')
                navigate('/all-product')
                

            }


        }
        catch(err){
            console.log(err)
        }

    }
  return <div className='container-fluid'>
    <h2 className='text-center'> Add Product</h2>
    <Form className="formData">
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <Form.Label>Product Title</Form.Label>
                            <input type="text" className="form-control" onChange={(e)=>setPName(e.target.value)} />
                        </div>
                        <div className="form-group col-md-4">
                            <Form.Label> Product Material</Form.Label>
                            <select className="form-control" onChange={(e)=>setPMaterial(e.target.value)} >
                                <option>Choose...</option>
                                <option value="Platinum">Platinum</option>
                                <option value="Gold(22K)">Gold(22K)</option>
                                <option value="old(18K)">Gold(18K)</option>
                                <option value="silver">Silver</option>
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <Form.Label> Product Category</Form.Label>
                            <select className="form-control" onChange={(e)=>setPCategory(e.target.value)}>
                                <option>Choose...</option>
                                <option value="Ring">Ring</option>
                                <option value="Chain">Chain</option>
                                <option value="Bangle">Bangle</option>
                                <option value="Pendent">Pendent</option>
                                <option value="Braclet">Braclet</option>
                                <option value="Others">others</option>
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <Form.Label>Product Price</Form.Label>
                            <input type="text" className="form-control" onChange={(e)=>setPPrice(e.target.value)}/>
                        </div>
                        <div className="form-group col-md-4">
                            <Form.Label>Product Actual Price</Form.Label>
                            <input type="text" className="form-control" onChange={(e)=>setPActualPrice(e.target.value)}/>
                        </div>
                        <div className="form-group col-md-4">
                            <Form.Label>Product Image URL</Form.Label>
                            <input type="text" className="form-control" onChange={(e)=>setPURL(e.target.value)}/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary offset-5" onClick={(event)=>handleProduct(event)}>Submit</button>
                </Form>



  </div>
}

export default AddProduct