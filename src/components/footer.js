import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer-footer1 thq-section-padding">
      <div className="footer-max-width thq-section-max-width">
        <div className="footer-content">
          <div className="footer-newsletter">
            <img
              alt={props.pastedImageAlt}
              src={props.pastedImageSrc}
              className="footer-pasted-image"
            />
            <span className="thq-body-small">
              <span>대표 : 김명겸</span>
              <br></br>
              <span>
                사업자등록번호 : 000-00-00000
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                출판사 신고번호 : 제2012-000081호
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                FAX : 070-4325-7006
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                주소 : 서울특별시 금천구 가산동 50-3(벚꽃로 298) 대륭포스트타워
                6차 1212
              </span>
              <br></br>
              <span>통신판매업신고 : 0000-idda-0000</span>
              <br></br>
            </span>
            <div className="footer-actions">
              <div className="footer-form">
                <div className="footer-container">
                  <input
                    type="email"
                    value="idda.pub@gmail.com"
                    disabled="true"
                    placeholder="Enter your email"
                    className="footer-text-input thq-input"
                  />
                </div>
                <button className="thq-button-outline footer-button">
                  <span className="thq-body-small">{props.action1}</span>
                </button>
              </div>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-column1">
              <strong className="thq-body-large footer-column1-title">
                {props.column1Title}
              </strong>
              <div className="footer-footer-links">
                <span className="thq-body-small">{props.link1}</span>
                <span className="thq-body-small">{props.link2}</span>
                <span className="thq-body-small">{props.link3}</span>
                <span className="thq-body-small">{props.link4}</span>
                <span className="thq-body-small">{props.link5}</span>
              </div>
            </div>
            <div className="footer-column2">
              <strong className="thq-body-large footer-column2-title">
                {props.column2Title}
              </strong>
              <div className="footer-footer-links1">
                <span className="thq-body-small">{props.link6}</span>
                <span className="thq-body-small">{props.link7}</span>
                <span className="thq-body-small">{props.link8}</span>
                <span className="thq-body-small">{props.link9}</span>
                <span className="thq-body-small">{props.link10}</span>
              </div>
            </div>
            <div className="footer-column3">
              <strong className="thq-body-large footer-social-link1-title">
                {props.socialLinkTitleCategory}
              </strong>
              <div className="footer-social-links">
                <div className="footer-link">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                  </svg>
                  <span className="thq-body-small">Facebook</span>
                </div>
                <div className="footer-link1">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <span className="thq-body-small">Instagram</span>
                </div>
                <div className="footer-link2">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <span className="thq-body-small">X</span>
                </div>
                <div className="footer-link3">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <span className="thq-body-small">LinkedIn</span>
                </div>
                <div className="footer-link4">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                  </svg>
                  <span className="thq-body-small">Youtube</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer-row">
            <span className="thq-body-small">{props.content3}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  logoSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  link3: 'Services',
  link10: 'Cookie Policy',
  action1: '복사하기',
  content3: 'Copyright © 2024 idda.com. All Rights Reserved.',
  column1Title: 'Company',
  column2Title: 'Quick Links',
  link7: 'Publishing Guidelines',
  socialLinkTitleCategory: 'Connect With Us',
  logoAlt: 'Book Publishing Company Logo',
  link5: 'FAQs',
  link1: 'Home',
  link2: 'About Idda',
  link9: 'Privacy Policy',
  pastedImageSrc: '/external/pastedimage-60j-200w.png',
  cookiesLink: '/cookies',
  privacyLink: '/privacy',
  link4: 'Contact Us',
  termsLink: '/terms',
  content2: '&copy; 2023 Book Publishing Company. All Rights Reserved.',
  pastedImageAlt: 'pastedImage',
  link6: 'Blog',
  link8: 'Terms of Service',
}

Footer.propTypes = {
  logoSrc: PropTypes.string,
  link3: PropTypes.string,
  link10: PropTypes.string,
  action1: PropTypes.string,
  content3: PropTypes.string,
  column1Title: PropTypes.string,
  column2Title: PropTypes.string,
  link7: PropTypes.string,
  socialLinkTitleCategory: PropTypes.string,
  logoAlt: PropTypes.string,
  link5: PropTypes.string,
  link1: PropTypes.string,
  link2: PropTypes.string,
  link9: PropTypes.string,
  pastedImageSrc: PropTypes.string,
  cookiesLink: PropTypes.string,
  privacyLink: PropTypes.string,
  link4: PropTypes.string,
  termsLink: PropTypes.string,
  content2: PropTypes.string,
  pastedImageAlt: PropTypes.string,
  link6: PropTypes.string,
  link8: PropTypes.string,
}

export default Footer
