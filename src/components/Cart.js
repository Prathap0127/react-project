import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import SideBar from './SideBar';

function Cart() {
    let [cart, setCart] = useState([])
    let getCart = async () => {
        try {
            let res = await axios.get('https://6350def9dfe45bbd55b0529b.mockapi.io/cart')
            // console.log(res.data)
            setCart(res.data)
        }
        catch (err) {
            console.log(err)
        }
    }   
    let handleDelete = async(id)=>{
        let text = "Sure Remove product from orders"
        if (window.confirm(text)===true){
            let res = await axios.delete(`https://6350def9dfe45bbd55b0529b.mockapi.io/cart/${id}`)
            if(res.status ===200)
            {
                alert('product removed from orders')
            }

        }

    }
    useEffect(() => {
        getCart()
    }, [])
    return <>
    <SideBar/>
        <div className='container-fluid'>
            <h2 className='text-center'> Cart</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Delivery Status</th>
                        <th>Action</th>


                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((e) => {
                            return <tr key={e.id}>
                                <th>{e.id}</th>
                                <th>{e.ProductName}</th>
                                <th>{e.productQty}</th>
                                <th>Rs.{e.productPrice}</th>
                                <th>{e.deliveryStatus}</th>
                                <th><Button variant='danger' onClick={()=>handleDelete(e.id)}> <i className="fas fa-fw fa-trash"></i></Button></th>
                            </tr>
                        })
                    }
                </tbody>
            </Table>



        </div>
    </>
}

export default Cart