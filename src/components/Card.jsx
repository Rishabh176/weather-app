import React from 'react'
import Form from './Form'

const Card = ({addToCartAPI}) => {
  return (
    <div style={{
      border: '1px solid',
      borderRadius: '20px',
      padding: '1em'
    }}>
      <div>
        <h3>Product heading</h3>
        <img src="https://source.unsplash.com/random/300x300/?product" alt="" />
      </div>
      <Form addToCartAPI={addToCartAPI}/>
    </div>
  )
}

export default Card