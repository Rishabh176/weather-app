import React from 'react'
import Form from './Form'

const Card = ({addToCartAPI, imgUrl, heading}) => {
  return (
    <div style={{
      border: '1px solid',
      borderRadius: '20px',
      padding: '1em'
    }}>
      <div>
        <h3>{heading}</h3>
        <img style={{
          marginBlock: '1em',
          aspectRatio: '1 / 1',
          width: '200px',
          objectFit: 'cover',
        }} src={imgUrl} alt="" />
      </div>
      <Form addToCartAPI={addToCartAPI}/>
    </div>
  )
}

export default Card