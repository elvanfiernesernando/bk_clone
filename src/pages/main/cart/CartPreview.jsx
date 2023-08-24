import React from 'react'
import './cart-preview.css'

const CartPreview = () => {
  return (
    <div className='cart-preview-wrapper'>
        <div className='cart-preview'>
            <div className='cart-preview-left'>Left section</div>
            <div className='cart-preview-right'>Right section</div>
        </div>
    </div>
  )
}

export default CartPreview