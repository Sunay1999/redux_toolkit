import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useDispatch } from 'react-redux'
import { add } from './Store/CartSlice'
import { getProducts } from './Store/ProductSlice'
import StatusCode from '../Util/StatusCode'
import { Alert } from 'bootstrap'
import { useSelector } from 'react-redux'

const Product = () => {
  // const [products, getProducts] = useState([])

  const dispatch = useDispatch();

  const { data: products, status } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getProducts())
    // fetch("https://fakestoreapi.com/products")
    //   .then(data => data.json())
    //   .then(result => getProducts(result))
  }, [])

  //loading
  if (status === StatusCode.LOADING) {
    return <h3>
      LOADING...
    </h3>
  }

  //error
  if (status === StatusCode.ERROR) {
    return <Alert key='danger' varient='danger'>
      Something went wrong!!! try again later...
    </Alert>
  }

  const addToCart = (product) => {
    //to dispatch an added item
    dispatch(add(product))
  }

  const cards = products.map(product => (
    <div className='col-md-3' style={{ marginBottom: '10px' }}>
      <Card key={product.id} className='h-100'>
        <div className='text-center'>
          <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            ${product.price}
          </Card.Text>
         
        </Card.Body>
        <Card.Footer style={{ background: 'white' }}>
            <Button variant="primary" onClick={() => addToCart(product)}>Add To Cart</Button>
          </Card.Footer>
      </Card>
    </div>
  ))

  return (
    <>
      <h1>
        Product DashBoard
      </h1>
      <div className='row'>
        {cards}
      </div>
    </>
  )
}

export default Product
