import React from 'react'
import BANNER from "../../../assets/images/banner.jpeg"
import { Link } from 'react-router-dom'
import { Carousel } from "react-responsive-carousel"
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import { categoriesData } from '../../../data/categories';
import { bannerData } from '../../../data/banner';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./home.css"

const Home = () => {
  return (
    <div className='parallax-bg'>
      <Carousel 
        autoPlay 
        showThumbs={false} 
        showStatus={false} 
        emulateTouch={true}
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
        {bannerData.map((e)=>{
          return (
            <Link key={e.id} to={`/${e.url}`}>
              <img alt={e.id} src={e.image} />
            </Link>
          )
        })}
      </Carousel>
      <main>
        <h2>Our Menus</h2>

        <section className='category-list'>
          {categoriesData.map((e)=> {
            return (
              <Link key={e.id} className='card' to={`/menus/${e.slug}`}>
                <img src={e.image} alt="" />
                <div className='menus-detail'>
                  <h3>{e.nama_kategori}</h3>
                  <button>Order</button>
                </div>
              </Link>
            )
          })}
        </section>
      </main>
    </div>
  )
}

export default Home