import React, { useState } from 'react'
import Carousel from '../carousel/Carousel'
import Grid from '../grid/grid'
import Paginate from '../paginate/Paginate'
import './MainContent.scss'

const MainContent = () => {
  const images = [
    {
      url:
        'https://images.pexels.com/photos/325225/pexels-photo-325225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      url:
        'https://images.pexels.com/photos/220072/pexels-photo-220072.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      url:
        'https://images.pexels.com/photos/1295569/pexels-photo-1295569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      url:
        'https://images.pexels.com/photos/731188/pexels-photo-731188.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
    },
    {
      url:
        'https://images.pexels.com/photos/2481603/pexels-photo-2481603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      url:
        'https://images.pexels.com/photos/2481603/pexels-photo-2481603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      url:
        'https://images.pexels.com/photos/2481603/pexels-photo-2481603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      url:
        'https://images.pexels.com/photos/2481603/pexels-photo-2481603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      url:
        'https://images.pexels.com/photos/2481603/pexels-photo-2481603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    }
  ]

  const [currentPage, setCurrentPage] = useState(1)

  const paginate = (type) => {
    if (type === 'prev' && currentPage > 1) {
      setCurrentPage((prev) => prev - 1)
    } else {
      setCurrentPage((prev) => prev + 1)
    }
  }

  return (
    <div className="main-content">
      <Carousel images={images} autoSlide={true} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">
          <Paginate
            currentPage={currentPage}
            totalPages={10}
            paginate={paginate}
          />
        </div>
      </div>
      <Grid images={images} />
    </div>
  )
}

export default MainContent
