import React from 'react'

import PropTypes from 'prop-types'

import './gallery8.css'

const Gallery8 = (props) => {
  return (
    <div className="gallery8-gallery3 thq-section-padding">
      <div className="gallery8-max-width thq-section-max-width">
        <div className="gallery8-section-title">
          <h2 className="gallery8-text thq-heading-2">{props.heading1}</h2>
          <span className="gallery8-text1 thq-body-large">
            {props.content1}
          </span>
        </div>
        <div className="gallery8-container">
          <div className="gallery8-content">
            <div
              data-thq="slider"
              data-navigation="true"
              data-pagination="true"
              className="gallery8-slider swiper"
            >
              <div data-thq="slider-wrapper" className="swiper-wrapper">
                <div
                  data-thq="slider-slide"
                  className="gallery8-slider-slide swiper-slide"
                >
                  <img
                    alt={props.pastedImageAlt}
                    src={props.pastedImageSrc}
                    className="gallery8-pasted-image"
                  />
                </div>
                <div
                  data-thq="slider-slide"
                  className="gallery8-slider-slide1 swiper-slide"
                >
                  <img
                    alt={props.pastedImageAlt1}
                    src={props.pastedImageSrc1}
                  />
                </div>
                <div
                  data-thq="slider-slide"
                  className="gallery8-slider-slide2 swiper-slide"
                >
                  <img
                    alt={props.pastedImageAlt2}
                    src={props.pastedImageSrc2}
                  />
                </div>
              </div>
              <div
                data-thq="slider-button-prev"
                className="swiper-button-prev"
              ></div>
              <div
                data-thq="slider-button-next"
                className="swiper-button-next"
              ></div>
              <div
                data-thq="slider-pagination"
                className="gallery8-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
              >
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet swiper-pagination-bullet-active"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery8.defaultProps = {
  image2Alt: 'Mental Health Book Cover',
  pastedImageAlt2: 'pastedImage',
  pastedImageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c4ac746c-eda7-49d5-8505-b172eca306dc/5d687dc6-55a5-4a0c-a8ba-a6bce3d38631?org_if_sml=1600812&force_format=original',
  pastedImageSrc1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c4ac746c-eda7-49d5-8505-b172eca306dc/817874c6-28dd-433d-8f79-b12b7bd4c55e?org_if_sml=1690318&force_format=original',
  heading1: 'Idda의 책표지',
  pastedImageSrc2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c4ac746c-eda7-49d5-8505-b172eca306dc/7e56c57e-31cb-46d6-b04d-64559bf586b1?org_if_sml=1709568&force_format=original',
  image3Src:
    'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTU5NTQ1MXw&ixlib=rb-4.0.3&q=80&w=1080',
  pastedImageAlt1: 'pastedImage',
  image1Alt: 'Career Book Cover',
  content1:
    '20-30대의 취업 진로 선택, 멘탈 강화, 인간관계 개선 등 현실적인 삶의 이슈에 대한 다양한 책을 제공합니다',
  image3Alt: 'Christianity Book Cover',
  image1Src:
    'https://images.unsplash.com/photo-1520187044487-b2efb58f0cba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTU5NTQ1MXw&ixlib=rb-4.0.3&q=80&w=1080',
  image2Src:
    'https://images.unsplash.com/photo-1565464913019-a85f0a1df0e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTU5NTQ1MXw&ixlib=rb-4.0.3&q=80&w=1080',
  pastedImageAlt: 'pastedImage',
}

Gallery8.propTypes = {
  image2Alt: PropTypes.string,
  pastedImageAlt2: PropTypes.string,
  pastedImageSrc: PropTypes.string,
  pastedImageSrc1: PropTypes.string,
  heading1: PropTypes.string,
  pastedImageSrc2: PropTypes.string,
  image3Src: PropTypes.string,
  pastedImageAlt1: PropTypes.string,
  image1Alt: PropTypes.string,
  content1: PropTypes.string,
  image3Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image2Src: PropTypes.string,
  pastedImageAlt: PropTypes.string,
}

export default Gallery8
