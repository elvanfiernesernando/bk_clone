import React from 'react'
import { useParams } from 'react-router-dom';
import { campaignsDetailsData } from '../../../data/campaigns';
import './newsdetails.css'

const NewsDetails = () => {

  const { slug } = useParams()

  const data = campaignsDetailsData.filter((details) => slug === details.slug)
  console.info(data)

  return (
    <div class="news-details">
      <div className='news-details-wrapper'>
        <div class="background-left">
          <h1>{data[0]?.nama_campaign}</h1>
                
          {/* <img src="https://bkdelivery.co.id/media/hero_image/2023/7/24/v3wumrvtvsrynuptmazdyd.jpg" class="image-mobile" alt="PROMO BK APP DISKON 30%" /> */}
          
          <span>
            <p>Syarat dan Ketentuan:</p>
            <ul>
              {data[0]?.snk?.map((e) => {
                return (
                  <li>{e}</li>
                )
              })}
              {/* <li>Promo berlaku pada <b>16 Juli  - 8 Agustus 2023</b></li> */}
              {/* <li>Diskon 30% senilai hingga Rp40.000 dengan minimum pembelian Rp.60.000</li>
              <li>Promo ini tidak berlaku untuk produk promo lainnya, seperti: <b>Pesta Merdeka, Dobel Mantul, 3-Cheese, King's Chicken, King Deals, Side &amp; Dessert, BK App Exclusive Menu, Whopper Wednesday dan Friyay Chicken</b></li>
              <li>Promo berlaku nasional untuk <b>Delivery, Contactless Dine-in, atau Pre-order Takeaway</b></li>
              <li>Promo dalam bentuk kupon diberikan saat login</li>
              <li>Setiap kupon hanya dapat digunakan sebanyak satu (1) kali selama periode promo</li>
              <li>Promo tidak dapat digabungkan dengan promo lainnya</li>
              <li>Kupon hanya diberikan pada pengguna yang sudah terdaftar sebelum tanggal 26 Juli 2023</li> */}
            </ul>
            <br />
            <p>*S&amp;K Berlaku</p>
          </span>
          <span>-</span>
        </div>
        <div class="background-right">
          <img src={data[0]?.image} class="image" alt="PROMO BK APP DISKON 30%" />
        </div>
      </div>
    </div>
  )
}

export default NewsDetails