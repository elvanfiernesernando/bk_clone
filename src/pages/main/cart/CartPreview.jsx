import React, { useState, useEffect } from 'react'
import './cart-preview.css'
import { Link } from 'react-router-dom'
import { HiMinus, HiPlus, HiOutlineTrash } from 'react-icons/hi'
import currencyFormat from '../../../utils/currencyFormat'

const CartPreview = () => {

  const [ cart, setCart ] = useState([])

  const getCartData = () => {
    const data = JSON.parse(localStorage.getItem('bk_cart'))
    setCart((prev) => prev = data)
  }

  useEffect(()=>{
    getCartData()

    window.addEventListener('cart_updated', () => {
     getCartData()
    })
  }, [])

  return (
    <div className='cart-preview-wrapper'>
        <div className='cart-preview'>
            <div className='cart-preview-left'>
                <div className='cart-preview-left-header'>
                    <h5>Menu Item</h5>
                    <h5>Quantity</h5>
                    <h5>Subtotal</h5>
                </div>
                <div className='cart-preview-left-products-wrapper'>
                    <div className='cart-preview-left-products'>
                        {cart?.map((e) => {
                          console.info(e)
                          return (
                            <div className='cart-preview-left-products-items'>
                              <div className='cart-preview-left-products-left'>
                                  <img src="https://media-order.bkdelivery.co.id/thumb/product_photo/2023/8/1/743odqfeatbrbjtrwnd3aw_product_details.jpg" alt="" width={50}/>
                                  <p>{e.nama_product}</p>
                              </div>
                              <div className='cart-preview-left-products-counter'>
                                  <HiMinus className='button-min'/>
                                  <p>{e.qty}</p>
                                  <HiPlus className='button-plus'/>
                              </div>
                              <div className="directions">
                                  <span className="price discounted">Rp. {currencyFormat((e.total_harga_discounted + e.total_addon_price) + e.qty)}</span>
                                  <span className="price original ">{currencyFormat(e.total_harga_original * e.qty)}</span>
                                  <HiOutlineTrash style={{color: '#b7b7b7'}}/>
                              </div>
                          </div>
                          )
                        })}

                    </div>
                    <Link to={'/menus'} className='cart-preview-left-continue'>Continue Shopping</Link>
                </div>
                <div>
                    <div className='cart-preview-left-notes'>
                        <label>Add Notes</label>
                        <input type="text" name="notes" placeholder="Add notes to your order here" />
                    </div>
                </div>
            </div>
            <div className='cart-preview-right'>
                <h5>Order Subtotal*</h5>
                <h2>Rp. {currencyFormat(cart?.reduce((acc, item) => acc + (item.total_harga_discounted + item.total_addon_price) + item.qty, 0))}</h2>
                <p>*Price might change due to your delivery location.</p>
                <div className='cart-preview-right-auth'>
                    <Link type="submit" class="button">Login to Order</Link>
                    <Link className='guest'>Continue as Guest</Link>
                </div>
                <div className='clear'></div>
            </div>
        </div>
    </div>
  )
}

export default CartPreview