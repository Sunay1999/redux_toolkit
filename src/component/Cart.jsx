import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from './Store/CartSlice'

const Cart = () => {
  const products = useSelector(state => state.cart)

  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    //to dispatch the removed item
    dispatch(remove(id));
  }

  const cards = products.map(product => (
    <div className='col-md-12' style={{ marginBottom: '10px' }}>
      <Card key={product.id} className='h-100'>
        <div className='text-center'>
          <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            ${product.price}
          </Card.Text>
          <Card.Footer style={{ background: 'white' }}>
            <Button variant="danger" onClick={() => removeFromCart(product.id)}>Remove Item</Button>
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  ))
  return (
    <div className='row'>
      {cards}
    </div>
  )
}

export default Cart
