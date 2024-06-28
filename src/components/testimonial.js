import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text01 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card">
                <div className="testimonial-container02">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image"
                  />
                  <div className="testimonial-container03">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text04 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container04">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container05">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text07 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container06">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container07">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text10 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container08">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container09">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text13 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  author2Name: 'Emily Johnson',
  review2:
    'I am thrilled with the quality of service I received from this publishing company. They helped me achieve my dream of becoming a published author.',
  author3Name: 'Michael Brown',
  author2Src:
    'https://images.unsplash.com/photo-1630841539293-bd20634c5d72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTU5MDIxNHw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Alt: 'Image of Sarah Davis',
  review3:
    "I couldn't be happier with the outcome of my book. The team at this publishing company truly cares about their authors' success.",
  author1Src:
    'https://images.unsplash.com/photo-1589696485114-9e2f81d83484?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTU5MDIxNHw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Alt: 'Image of Emily Johnson',
  author4Name: 'Sarah Davis',
  author3Position: 'Poet',
  author3Alt: 'Image of Michael Brown',
  review4:
    'From editing to design, the level of professionalism and expertise displayed by this publishing company is unmatched.',
  author4Src:
    'https://images.unsplash.com/photo-1532675432006-329c6fed7045?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTU5MDIxNHw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Alt: 'Image of John Smith',
  author3Src:
    'https://images.unsplash.com/photo-1579783901467-31b604eac7a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTU5MDIxNHw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Position: 'Author',
  author1Name: 'John Smith',
  author4Position: 'Journalist',
  author2Position: 'Writer',
  review1:
    'I highly recommend this publishing company to any aspiring author looking to bring their book to life.',
  content1:
    'Working with this publishing company has been a fantastic experience. They provided excellent support and guidance throughout the entire publishing process.',
  heading1: 'Testimonials',
}

Testimonial.propTypes = {
  author2Name: PropTypes.string,
  review2: PropTypes.string,
  author3Name: PropTypes.string,
  author2Src: PropTypes.string,
  author4Alt: PropTypes.string,
  review3: PropTypes.string,
  author1Src: PropTypes.string,
  author2Alt: PropTypes.string,
  author4Name: PropTypes.string,
  author3Position: PropTypes.string,
  author3Alt: PropTypes.string,
  review4: PropTypes.string,
  author4Src: PropTypes.string,
  author1Alt: PropTypes.string,
  author3Src: PropTypes.string,
  author1Position: PropTypes.string,
  author1Name: PropTypes.string,
  author4Position: PropTypes.string,
  author2Position: PropTypes.string,
  review1: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
}

export default Testimonial
