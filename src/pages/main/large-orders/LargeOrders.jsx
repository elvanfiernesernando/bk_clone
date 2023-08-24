import React from 'react'
import CAROUSELIMG from "../../../assets/images/large-order-carousel-img.jpeg"
import BGINFOMATION from "../../../assets/images/bg-informations.png"
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { Carousel } from "react-responsive-carousel"
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './large-orders.css'


const LargeOrders = () => {
  return (
    <div className='parallax-bg'>
      <Carousel 
        autoPlay 
        showThumbs={false} 
        showStatus={false} 
        showIndicators={false}
        showArrows={false}
        emulateTouch={true}
        infiniteLoop={true}
        className='custom-carousel'
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div
              className={`${
                hasPrev ? 'absolute' : 'hidden'
              } prev-arrow`}
              onClick={clickHandler}
            >
              <span className='bg-arrow'></span>
              <HiOutlineChevronLeft size={28} className='prev-arrow-icon'/>
            </div>
          );
        }}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            <div
              className={`${
                hasNext ? 'absolute' : 'hidden'
              } next-arrow`}
              onClick={clickHandler}
            >
              <span className='bg-arrow'></span>
              <HiOutlineChevronRight size={28} className='next-arrow-icon'/>
            </div>
          );
        }}
      >
        <div>
          <img alt="" src={CAROUSELIMG} />
        </div>
        <div>
          <img alt="" src={CAROUSELIMG} />
        </div>
      </Carousel>

      <div className='large-orders'>
        <div className='large-orders-wrapper'>
          <div className='left-form'>
            <div class="form-wrapper">
              <h2>RAMEIN ACARAMU BARENG BK!</h2>

              <h3>Pilih Paket (Minimum order 20 pax/Paket)</h3>
              <div class="products-error">
                  
              </div>
              
              <div class="product-field">
                  <label for="id_product_1">1pc Ayam Crispy + Nasi + Mineral Water</label>
                  <input type="number" name="product_1" placeholder="Jumlah" min="20" id="id_product_1" />
              </div>
          
              <div class="product-field">
                  <label for="id_product_2">1pc Ayam Spicy + Nasi + Mineral Water</label>
                  <input type="number" name="product_2" placeholder="Jumlah" min="20" id="id_product_2" />
              </div>
          
              <div class="product-field">
                  <label for="id_product_3">2pcs Ayam Crispy/ Spicy/ Mix + Nasi</label>
                  <input type="number" name="product_3" placeholder="Jumlah" min="20" id="id_product_3" />
              </div>
          
              <div class="product-field">
                  <label for="id_product_4">2pcs Ayam Crispy/ Spicy/ Mix + Nasi + Mineral Water</label>
                  <input type="number" name="product_4" placeholder="Jumlah" min="20" id="id_product_4" />
              </div>
          
              <div class="product-field">
                  <label for="id_product_5">Beef Burger + Mineral Water</label>
                  <input type="number" name="product_5" placeholder="Jumlah" min="20" id="id_product_5" />
              </div>
          
              <div class="product-field">
                  <label for="id_product_6">Chicken Burger + Mineral Water</label>
                  <input type="number" name="product_6" placeholder="Jumlah" min="20" id="id_product_6" />
              </div>
              
              <h3>Add On (Optional)</h3>
              
              <div class="product-field">
                  <label for="id_add_on_1">Sliced Cheese</label>
                  <input type="number" name="add_on_1" placeholder="Jumlah" min="0" id="id_add_on_1" />
              </div>
          
              <div class="product-field">
                  <label for="id_add_on_2">Fries Regular</label>
                  <input type="number" name="add_on_2" placeholder="Jumlah" min="0" id="id_add_on_2" />
              </div>
          
              <div class="product-field">
                  <label for="id_add_on_3">Fusion Cookies &amp; Cream</label>
                  <input type="number" name="add_on_3" placeholder="Jumlah" min="0" id="id_add_on_3" />
              </div>
          
              <div class="product-field">
                  <label for="id_add_on_4">Choco Pie</label>
                  <input type="number" name="add_on_4" placeholder="Jumlah" min="0" id="id_add_on_4" />
              </div>
          
              <div class="product-field">
                  <label for="id_add_on_5">Sundae Chocolate</label>
                  <input type="number" name="add_on_5" placeholder="Jumlah" min="0" id="id_add_on_5" />
              </div>
          
              <div class="product-field">
                  <label for="id_add_on_6">1pc Ayam</label>
                  <input type="number" name="add_on_6" placeholder="Jumlah" min="0" id="id_add_on_6" />
              </div>
          
              <div class="product-field">
                  <label for="id_add_on_7">Beef Burger</label>
                  <input type="number" name="add_on_7" placeholder="Jumlah" min="0" id="id_add_on_7" />
              </div>
          
              <div class="product-field">
                  <label for="id_add_on_8">Chicken Burger</label>
                  <input type="number" name="add_on_8" placeholder="Jumlah" min="0" id="id_add_on_8" />
              </div>
            </div>

            <div class="form-wrapper">
              <h3>Lengkapi data diri kamu!</h3>
              <div class="split switch-mobile">
                <div>
                  <input type="text" name="name" placeholder="Nama" required="" id="id_name" />
                </div>
                <div class="phone">
                  <span class="code">+62</span>
                  <input type="number" name="mobile_number" placeholder="No Handphone" required="" id="id_mobile_number" />
                </div>
              </div>
              <div class="split">
                <div>
                  <input type="email" name="email" placeholder="Email" required="" id="id_email" />
                </div>
                <div>
                  <input type="text" name="birthday" placeholder="Tanggal Lahir" required="" id="id_birthday" class="flatpickr-input" readonly="readonly" />
                </div>
              </div>

              <textarea name="address" cols="40" rows="4" placeholder="Alamat" maxlength="300" required="" id="id_address"></textarea>
              
              <h3>Detail Acara!</h3>

              <input type="text" name="event" placeholder="Jenis Acara" required="" id="id_event" />
              
              <div class="split">
                  <div>
                      <select name="event_time" required="" id="id_event_time">
                        <option value="" selected="">Waktu</option>

                        <option value="00:00:00">00:00</option>

                        <option value="01:00:00">01:00</option>

                        <option value="02:00:00">02:00</option>

                        <option value="03:00:00">03:00</option>

                        <option value="04:00:00">04:00</option>

                        <option value="05:00:00">05:00</option>

                        <option value="06:00:00">06:00</option>

                        <option value="07:00:00">07:00</option>

                        <option value="08:00:00">08:00</option>

                        <option value="09:00:00">09:00</option>

                        <option value="10:00:00">10:00</option>

                        <option value="11:00:00">11:00</option>

                        <option value="12:00:00">12:00</option>

                        <option value="13:00:00">13:00</option>

                        <option value="14:00:00">14:00</option>

                        <option value="15:00:00">15:00</option>

                        <option value="16:00:00">16:00</option>

                        <option value="17:00:00">17:00</option>

                        <option value="18:00:00">18:00</option>

                        <option value="19:00:00">19:00</option>

                        <option value="20:00:00">20:00</option>

                        <option value="21:00:00">21:00</option>

                        <option value="22:00:00">22:00</option>

                        <option value="23:00:00">23:00</option>

                      </select>
                  </div>
                  <div>
                      <input type="text" name="event_date" placeholder="Tanggal Acara" min="2023-08-23" required="" id="id_event_date" class="flatpickr-input" readonly="readonly" />
                      
                  </div>
              </div>
              <h3>Catatan</h3>
              <textarea name="notes" cols="40" rows="4" placeholder="Tulis request/order menu lain di sini!" maxlength="300" id="id_notes"></textarea>
              
              <button type="submit" class="button checkout-button">SUBMIT</button>
            </div>
          </div>

          <div className='right-information'>
            <h3>Kamu juga bisa hubungi kami di:</h3>
            <div className='contact'>
              <HiOutlineMail size={22}/>
              guestservice@burgerking.co.id 
            </div>
            <div className='divider'></div>
            <div className='contact'>
              <HiOutlinePhone size={22}/>
              15000 25
            </div>
            <div className='divider'></div>
            <article>Harga sebelum 10% PB.1 TM & C 2023 Burger King Company LLC. Used under license. All rights reserved.</article>
            <img src={BGINFOMATION} alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default LargeOrders