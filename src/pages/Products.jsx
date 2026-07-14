import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'

function Products() {
    const [product, setProduct] = useState([])
    const navigate = useNavigate();

    async function fetchProducts() {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/products`)
        console.log(res.data)
        setProduct(res.data)
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    async function deleteProduct(id) {
        const data = await axios.delete(`${import.meta.env.VITE_API_URL}/products/${id}`)
        const singleProduct = product.filter((mereProducts) => mereProducts._id !== id)
        setProduct(singleProduct)
        toast.success('Product Deleted Successfully')
    }
    return (
        <div className='container'>
            <div className="products-header flex justify-between items-center">
                <h1>Products Data</h1>
                <Button variant='primary' onClick={() => navigate('/create-product')}>Create</Button>

            </div>
            <div className="products flex flex-wrap justify-between gap-4">
                {
                    product.map((mereProducts) => {
                        return <Card style={{ width: '18rem' }} key={mereProducts._id}>
                            <Card.Body>
                                <Card.Title>{mereProducts.title} </Card.Title>

                                <Card.Text>{mereProducts.desc}</Card.Text>
                                <Card.Text>
                                    {mereProducts.price + "$"}
                                </Card.Text>
                                <div className="flex justify-between">
                                    <Button variant="primary">{mereProducts.review}</Button>
                                    <Button variant='secondary'
                                        onClick={() => navigate(`/products/${mereProducts._id}`)}>Edit</Button>
                                    <Button variant='danger' onClick={() => deleteProduct(mereProducts._id)}>Remove</Button>
                                </div>
                            </Card.Body>
                        </Card>

                    })
                }
            </div>
        </div>
    )
}

export default Products
