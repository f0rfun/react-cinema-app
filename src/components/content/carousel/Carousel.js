import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './Carousel.scss'

const Carousel = (props) => {
  const { images, autoSlide } = props

  const [slide, setSlide] = useState({
    slideImage: images[0],
    slideIndex: 0
  })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sliderInterval, setSliderInterval] = useState(0)

  const { slideImage, slideIndex } = slide

  const previous = () => {
    let index = currentIndex
    if (currentIndex <= 0) {
      index = images.length - 1
    } else {
      index -= 1
    }

    setCurrentIndex(index)
    setSlide((prev) => ({
      ...prev,
      slideImage: images[index],
      slideIndex: index
    }))
  }

  const next = () => {
    let index = currentIndex
    if (currentIndex < images.length) {
      index += 1
    }

    if (index === images.length) {
      index = 0
    }

    setCurrentIndex(index)
    setSlide((prev) => ({
      ...prev,
      slideImage: images[index],
      slideIndex: index
    }))
  }

  useEffect(() => {
    if (autoSlide) {
      const timeInterval = setInterval(() => {
        next()
      }, 5000)

      setSliderInterval(timeInterval)

      return () => {
        clearInterval(timeInterval)
        clearInterval(sliderInterval)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideIndex, autoSlide])

  const RenderArrows = () => {
    return (
      <div className="carousel-arrows">
        <div
          className="carousel-arrow carousel-arrow--left"
          onClick={() => previous()}
        />
        <div
          className="carousel-arrow carousel-arrow--right"
          onClick={() => next()}
        />
      </div>
    )
  }

  const RenderIndicators = (props) => {
    const { currentCarousel } = props
    const indicators = images.map((anImage, index) => {
      const buttonCssClass =
        index === currentCarousel
          ? 'carousel-navButton carousel-navButton--active'
          : 'carousel-navButton'
      return <button className={buttonCssClass} key={index} />
    })

    return <div className="carousel-nav"> {indicators} </div>
  }

  return (
    <>
      <div className="carousel">
        <div className="carousel-slides">
          {images && images.length && slideImage && (
            <div
              className="slides-image"
              style={{
                backgroundImage: `url(${slideImage.url})`
              }}
            />
          )}
        </div>
        <RenderIndicators currentCarousel={slideIndex} />
        <RenderArrows />
      </div>
    </>
  )
}

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
  autoSlide: PropTypes.bool.isRequired,
  currentIndex: PropTypes.number
}

export default Carousel
