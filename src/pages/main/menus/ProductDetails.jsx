import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HiPlus, HiMinus } from "react-icons/hi";
import { productsData } from '../../../data/products';
import { categoriesData } from '../../../data/categories';
import './productdetails.css'
import currencyFormat from '../../../utils/currencyFormat';
import { extrasData } from '../../../data/extras';

const ProductDetails = () => {
  
  const [ subTotal, setSubTotal ] =  useState({
    total_addon_price: 0,
    addon: []
  })

  const data = productsData.filter((product) => (window.location.pathname.split('/')[2] ? window.location.pathname.split('/')[2] : "merdeka-bundle") === product.slug) 
  const data_extras = extrasData.filter((extra) => (window.location.pathname.split('/')[2] ? window.location.pathname.split('/')[2] : "merdeka-bundle") === extra.product)
  
  useEffect(()=>{
    setSubTotal((prev) => ({
      ...prev,
      id: data[0]?.id,
      nama_product: data[0]?.nama_product,
      image: data[0]?.image,
      slug: data[0]?.slug,
      qty: 1,
      total_harga_discounted: data[0]?.price_discounted,
      total_harga_original: data[0]?.price_original,
      addon: []
    }))
  }, [])

  const calculateTotalAddonPrice = () => {
    setSubTotal((prev) => prev = (
      {
        ...prev,
        total_addon_price: subTotal.addon.reduce((acc, item) => acc + (item.price * item.qty), 0)
      }
    ))
  }

  const handleDecreaseQty = () => {
    if(subTotal.qty > 1) {
      setSubTotal((prev) => ({
        ...prev,
        qty: subTotal.qty - 1,
      }))
    }
  }

  const handleIncreaseQty = () => {
    setSubTotal((prev) => ({
      ...prev,
      qty: subTotal.qty + 1,
    }))
  }

  const handleDecreaseAddonQty = (extras) => {
    const addonIndex = subTotal.addon.findIndex((value) => value.id === extras.id)
    
    if(addonIndex !== -1){
      const newAddon = [...subTotal.addon]

      if(subTotal.addon[addonIndex].qty > 1){

        newAddon[addonIndex].qty = newAddon[addonIndex].qty - 1
        
      } else if (subTotal.addon[addonIndex].qty === 1) {

        newAddon.splice(addonIndex, 1)

      }

      setSubTotal((prev) => prev = ({
        ...prev, 
        addon: newAddon 
      }))

      calculateTotalAddonPrice()
    }
  }

  const handleIncreaseAddonQty = (extras) => {
    const addonIndex = subTotal.addon.findIndex((value) => value.id === extras.id)
    
    if(addonIndex !== -1){

      const newAddon = [...subTotal.addon]

      newAddon[addonIndex].qty = newAddon[addonIndex].qty + 1

      setSubTotal((prev) => prev = ({
        ...prev, 
        addon: newAddon 
      }))

      calculateTotalAddonPrice()
    } else {
      setSubTotal((prev) => ({
        ...prev,
        addon: [...subTotal.addon, {...extras, qty: 1}]
      }))

      calculateTotalAddonPrice()
    }
  }

  const handleAddToCart = (product) => {
    const cart = getCartFromLocalStorage();

    const existingProduct = cart.find(item => item.id === product.id);

    console.info(existingProduct)

    if (existingProduct) {
      existingProduct.qty += 1;
    } else {
      cart.push(product);
    }

    // 5. Store the updated cart data in local storage
    saveCartToLocalStorage(cart);
  }

  const getCartFromLocalStorage = () => {
    const cartJson = localStorage.getItem('bk_cart');
    return cartJson ? JSON.parse(cartJson) : [];
  }
  
  const saveCartToLocalStorage = (cart) =>{
    localStorage.setItem('bk_cart', JSON.stringify(cart));
    const event = new Event('cart_updated');
    window.dispatchEvent(event);
  }

  return (
    <div className='menus'>
        <div className="menus-wrapper">
            <div className="item-categories">
                <form action="" method="GET">
                    <div className="search">
                        <button type="submit" className="search-button"><span className="icon-mglass"></span></button>
                        <div className="search-field">
                            <a href="#" className="mobile-search-button"><span className="icon-mglass"></span></a>
                            <div className="awesomplete">
                                <div className="awesomplete">
                                    <input type="text" className="awesomplete" id="search" name="search" placeholder="Search menu..." autocomplete="off" aria-owns="awesomplete_list_2" role="combobox" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

                <div className="overlay-category">
                
                    <div className="categories">
                    
                      {categoriesData.map((e)=>{
                          return (
                              <div className="categories-box">
                                  <Link to={`/menus/${e.slug}`}>
                                      <button className={data[0].kategori === e.slug ? "active btn-categories" : "btn-categories"} >
                                          <h3>
                                              {e.nama_kategori}
                                          </h3>
                                      </button>
                                  </Link>
                              </div>
                          )
                        })}
                    
                        <span>* Harga belum termasuk pajak</span>
                    </div>
                
                </div>
            </div>

            <div className="item-details">
                <div className='item-details-left'>
                    <h1>{data[0]?.nama_product}</h1>
                    <div className='item-details-left-description'>
                        <p>{data[0]?.deskripsi}</p>
                    </div>
                    <div className='item-details-left-img-wrapper'>
                        <img src={data[0]?.image} alt="" />
                    </div>
                    <h2>Add Extras</h2>
                    <div className='item-details-left-products-wrapper'>

                      {data_extras.map((e) => {
                        return (
                          <div className='item-details-left-products-addon'>
                            <div className='product-addon-left-section'>
                                <img src={e.image} alt={e.nama_extras} />
                                <div className='product-addon-left-section-details'>
                                    <p>{e.nama_extras}</p>
                                    <p>Rp. {currencyFormat(e.price)}</p>
                                </div>
                            </div>
                            {(subTotal.addon.find((value) => value?.id === e.id)) ? (
                              <div class="product-addon-left-icon-qty-wrapper">
                                  <HiMinus className='button-min' onClick={() => handleDecreaseAddonQty({id: e.id})}/>
                                  <p>{(subTotal.addon.find((value) => value?.id === e.id)).qty}</p>
                                  <HiPlus className='button-plus' onClick={() => handleIncreaseAddonQty({
                                    id: e.id,
                                    nama_extras: e.nama_extras,
                                    price: e.price
                                  })}/>
                              </div>
                            ) : (
                              <div className='product-addon-left-icon-wrapper' onClick={() => handleIncreaseAddonQty({
                                  id: e.id,
                                  nama_extras: e.nama_extras,
                                  price: e.price
                                })}>
                                <HiPlus />
                              </div>
                            )}
                          </div>
                        )
                      })}

                    </div>
                </div>
                <div className='item-details-right'>
                    <div class="subtotal">
                        <div class="grandtotal">
                            <span class="discounted">{`Rp. ${currencyFormat(subTotal.total_harga_discounted + subTotal.total_addon_price)}`}</span>
                            <span class="original">{`Rp. ${currencyFormat(subTotal.total_harga_original)}`}</span>
                        </div>
                        <div className='addon-lists'>
                            <p className='addon-title'>ADD ON</p>
                            <div className='addon-lists-details'>
                              { subTotal.addon.length > 0 ? (subTotal.addon.map((e) => {
                                return (
                                  <p>{e.qty} {e.nama_extras}</p>
                                )
                              })) : (
                                <p>-</p>
                              )}
                            </div>
                        </div>
                        <div class="quantity-wrapper">
                            <HiMinus size={16} className='button-min' onClick={handleDecreaseQty}/>
                            {/* <input id="variant-code-input" type="hidden" class="input-qty" value="" maxlength="2" /> */}
                            <input id="quantity-input" type="text" class="input-qty" value={subTotal.qty} maxlength="2" disabled="" />
                            <HiPlus size={16} className='button-plus' onClick={handleIncreaseQty}/>
                        </div>
                        <button className="button" onClick={()=> handleAddToCart(subTotal)}>Add To Cart</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ProductDetails