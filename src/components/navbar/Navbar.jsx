import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LOGO from "../../assets/images/logo_bk.png"
import IMG1 from "../../assets/images/img1.jpeg"
import { HiShoppingCart } from "react-icons/hi";
import CART_LOADING from '../../assets/images/BK_loading.gif'
import NAV_MOBILE_OPEN from '../../assets/icons/ic_nav_mobile_open.png'
import NAV_MOBILE_CLOSE from '../../assets/icons/ic_nav_mobile_close.png'
import LOGO_BK_MOBILE from '../../assets/images/logo_bk_mobile.png'
import "./navbar.css"
import currencyFormat from '../../utils/currencyFormat';

const Navbar = () => {

  const [ showNavMobileItem, setshowNavMobileItem ] = useState(false)
  const [ cart, setCart ] = useState([])

  const handleShowNavbarMobileItem = () => {
    setshowNavMobileItem(( prev ) => prev = !prev)
  }

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
    <header className='navbar'>
      <div className="navbar-wrapper">
        <Link to={'/'} className='logo-bk'><img src={LOGO} alt="logo burger king" width={90} height={90}/></Link>
        <nav className='left-navigation'>
          <Link to={"/menus"} className='navbar-items'>
            <span className='subtitle'>Delivery</span>
            <span className='title'>Order</span>
          </Link>
          <Link to={"/news-v1"} className='navbar-items'>
            <span className='subtitle'>Get Fresh</span>
            <span className='title'>Promotions</span>
          </Link>
          <Link to={"/large-orders/create"} className='navbar-items'>
            <span className='subtitle'>Exclusive</span>
            <span className='title'>Large Order</span>
          </Link>
        </nav>
        <div className='right-navigation'>
          <Link to={"/accounts/login"} className='login'>LOGIN</Link>
          <Link className='cart-wrapper' to={'/cart/preview'}>
            {cart?.reduce((acc, item) => acc + item.qty, 0) > 0 && (
                <small className='cart-counter'>{cart?.reduce((acc, item) => acc + item.qty, 0)}</small>
            )}
            <HiShoppingCart className='cart-icon' size={32} color='#fff' />
            <div className='modal cart-modal modal-right'>
              <span className='cart-modal-arrow'></span>
              {/* <div className='cart-loading-wrapper'>
                <img src={CART_LOADING} alt="" />
              </div> */}
              <div className='cart-modal-content'>
                {cart?.length > 0 ? (cart?.map((e, i) => {

                  if(i === 3){
                    return (
                      <div className='cart-items-wrapper'>
                        <p className='more-items-text'>And {(cart?.reduce((acc, item) => acc + item.qty, 0) - 3)} more items..</p>
                        <span></span>
                      </div>
                    )
                  } else if(i > 2){
                    return
                  }

                  return (
                    <div className='cart-items-wrapper'>
                      <div className='cart-item'>
                        <img src={e.image} alt="" />
                        <p>{e.nama_product}</p>
                        <p>x {e.qty}</p>
                        <p>Rp. {currencyFormat(e.total_harga_discounted)}</p>
                      </div>
                      <span></span>
                    </div>
                  )
                })) : (
                  "Your cart is empty"
                )}
                <div className='cart-button-wrapper'>
                  <button type="submit" className="button checkout-button">Go To Cart</button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className='navbar-mobile'>
        <div className='hamburger-menu'>
          {showNavMobileItem ? (
            <img src={NAV_MOBILE_CLOSE} alt="" width={25} onClick={handleShowNavbarMobileItem}/>
          ) : (
            <img src={NAV_MOBILE_OPEN} alt="" width={25} onClick={handleShowNavbarMobileItem}/>
          )}
        </div>
        <Link to={'/'}><img src={LOGO_BK_MOBILE} alt="" width={40}/></Link>
        <div className='cart-wrapper-mobile'>
          <small className='cart-counter'>2</small>
          <HiShoppingCart className='cart-icon' size={32} color='#fff' />
        </div>
        <div className={`nav-mobile-items ${showNavMobileItem ? "show-nav-mobile-menu" : ""}`}>
          <Link to={"/"} className='navbar-items' onClick={handleShowNavbarMobileItem}>
            <span className='title'>Home</span>
          </Link>
          <Link to={"/menus"} className='navbar-items' onClick={handleShowNavbarMobileItem}>
            <span className='subtitle'>Delivery</span>
            <span className='title'>Order</span>
          </Link>
          <Link to={"/news-v1"} className='navbar-items' onClick={handleShowNavbarMobileItem}>
            <span className='subtitle'>Get Fresh</span>
            <span className='title'>Promotions</span>
          </Link>
          <Link to={"/large-orders/create"} className='navbar-items' onClick={handleShowNavbarMobileItem}>
            <span className='subtitle'>Exclusive</span>
            <span className='title'>Large Order</span>
          </Link>

          <div className='nav-mobile-divider'></div>

          <Link to={"/login"} className='navbar-items' onClick={handleShowNavbarMobileItem}>
            <span className='title title-login'>Login</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar