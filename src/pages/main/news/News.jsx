import React from 'react'
import NEWS from '../../../assets/images/news-1.jpeg'
import { Link } from 'react-router-dom'
import './news.css'
import { campaignsData } from '../../../data/campaigns'

const News = () => {
  return (
    <div className='news-wrapper parallax-bg'>
        {campaignsData.map((e)=>{
            return (
                <Link key={e.id} to={{pathname: `/news-v1/${e.slug}`}}>
                    <img src={e.image} alt="" className='news-img'/>
                </Link>
            )
        })}
    </div>
  )
}

export default News