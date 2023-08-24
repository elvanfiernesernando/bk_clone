import React from 'react'
import { Link } from 'react-router-dom'
import { categoriesData } from '../../../data/categories'
import { productsData } from '../../../data/products'
import currencyFormat from '../../../utils/currencyFormat'
import './menus.css'

const Menus = () => {

  const data = productsData.filter((product) => (window.location.pathname.split('/')[2] ? window.location.pathname.split('/')[2] : "pesta-merdeka") === product.kategori)

  return (
    <div className='parallax-bg'>
        <div className="menus-wrapper">
            <div className="item-categories">
                <form action="" method="GET">
                    <div className="search">
                        <button type="submit" className="search-button"><span className="icon-mglass"></span></button>
                        <div className="search-field">
                            <a href="#" className="mobile-search-button"><span className="icon-mglass"></span></a>
                            <div className="awesomplete">
                                <div className="awesomplete">
                                    <input type="text" className="awesomplete" id="search" name="search" placeholder="Search menu..." autoComplete="off" aria-owns="awesomplete_list_2" role="combobox" />
                                </div>
                            </div>
                        </div>
                        {/* <div className='modal search-modal modal-left'>
                            <div className='cart-loading-wrapper'>
                                loading
                                <img src={CART_LOADING} alt="" />
                            </div>
                            <div className='search-modal-content'>
                                <div className='search-items-wrapper'>
                                    <div className='search-item'>
                                        <img src={IMG1} alt="" />
                                        <p>	Paket Spicy 2 🌶️</p>
                                        <p>Rp. 45.000</p>
                                    </div>
                                    <span></span>
                                    </div>
                                <div className='search-items-wrapper'>
                                    <div className='search-item'>
                                        <img src={IMG1} alt="" />
                                        <p>	Paket Spicy 2 🌶️</p>
                                        <p>Rp. 45.000</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </form>

                <div className="overlay-category">
                
                    <div className="categories">

                        {categoriesData.map((e)=>{
                          return (
                              <div className="categories-box">
                                  <Link to={`/menus/${e.slug}`}>
                                      <button className={window.location.pathname.split('/')[2] === e.slug ? "active btn-categories" : "btn-categories"} >
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
            <div className="item-lists">
                <div className="menu-box-wrapper">

                  {data.map((product) => {
                    return (
                      <Link className='card' to={`/products/${product.slug}`}>
                        <img src={product.image} alt="" />
                        <div className='menus-descriptions'>
                            <h3>{product.nama_product}</h3>
                            <div className="directions">
                                
                                    <span className="price discounted">Rp. {currencyFormat(product.price_discounted)}</span>
                                    <span className="price original ">{currencyFormat(product.price_original)}</span>
                                
                            </div>
                        </div>
                      </Link>
                    )
                  })}
                
                </div>
            </div>

        </div>
    </div>
  )
}

export default Menus