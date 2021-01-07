import React from 'react'
import './grid.scss'

const grid = (props) => {
  const { images } = props
  return (
    <>
      <div className="grid">
        {images.map((anImage, index) => (
          <div key={index}>
            <div
              className="grid-cell"
              style={{ backgroundImage: `url(${anImage.url})` }}
            >
              <div className="grid-read-more">
                <button className="grid-cell-button">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default grid
