import axios from 'axios';
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function AdminProductCard(props) {
    let navigate = useNavigate()

    let handleDelete = async(id)=>{
      try{
        let text="Are you sure to delete the Product"
        if(window.confirm(text)===true){
          let res = await axios.delete(`https://6350def9dfe45bbd55b0529b.mockapi.io/products/${id}`)
          alert(`${res.data.productName} Deleted Sucessfully`)
          window.location.reload()
        }
      
      }
      catch(err){
        console.log(err)
      }
    }
  
    let handleCart = async(id)=>{
      console.log()
      try{
       let res = await axios.get(`https://6350def9dfe45bbd55b0529b.mockapi.io/products/${id}`)
       console.log(res.data)
       let order = {
        ProductName:res.data.productName,
        ProductType:res.data.productType,
        productCate:res.data.productCat,
        productPrice:res.data.productPrice,
        deliveryStatus:"not Confirmed",
        productQty:"1"
       }
       let orderData = await axios.post('https://6350def9dfe45bbd55b0529b.mockapi.io/cart',order)
       console.log(orderData)
       alert("Product Added to orders")
  
      }
      catch(err){
        console.log(err)
      }
      console.log("add to kart "+id)
    }
  
    return <div className="col-xl-3 col-md-4 mb-4">
      {/* {console.log(props.data.id)} */}
    <Card style={{ width: '13rem' }}>
      <Card.Img variant="top" src={props.data.productURL} />
      <Card.Body>
        <Card.Title>{props.data.name}</Card.Title>
        <Card.Text>
          <Row>
          <Col>Rs.{props.data.productPrice}</Col>
          <Col><s>Rs.{props.data.productActualPrice}</s></Col>
          </Row>
        </Card.Text>
        <Button variant="primary" onClick={()=>navigate(`/add-product/${props.data.id}`)}> <i className="fas fa-fw fa-pen"></i></Button>
        <Button variant="primary" onClick={()=>handleDelete(props.data.id)}><i className="fas fa-solid fa-trash"></i></Button>
        <Button variant="primary" onClick={()=>handleCart(props.data.id)}><i className="fa-solid fa-cart-shopping"></i></Button>
      </Card.Body>
    </Card>
    </div>
   
}

export default AdminProductCard