import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

function CreateProduct() {
    const navigate = useNavigate()
    const [product, setProduct] = useState({
        title: "",
        desc: "",
        price: "",
        review: "",
    })
    function changeHandler(e) {
        const name = e.target.name
        const value = e.target.value
        setProduct({ ...product, [name]: value })
    }
    async function submitHandler(e) {
        e.preventDefault()
        const res = await axios.post(`${process.env.VITE_API_URL}/create`, product)
        toast.success('Product Created Successfully')
        setProduct({
            title: "",
            desc: "",
            price: "",
            review: "",
        })
        navigate("/products")
    }
    return (
        <div className='container'>
            <div className='w-1/2 mx-auto'>
                <h1>Create Product</h1>
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Furniture" value={product.title} name='title' onChange={changeHandler} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="best product" value={product.desc} name='desc' onChange={changeHandler} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" placeholder="15$" value={product.price} name='price' onChange={changeHandler} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                        <Form.Label>Review</Form.Label>
                        <Form.Control type="text" placeholder="best" value={product.review} name='review' onChange={changeHandler} />
                    </Form.Group>
                    <Button variant='success' type='submit'>Submit</Button>
                </Form>
            </div>
        </div>
    )
}

export default CreateProduct
