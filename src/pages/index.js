import React from 'react'
import Link from 'gatsby-link'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components'
import { withPrefix } from 'gatsby-link'
import { Title } from '../components'

var settings = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: true,
}

const SliderWrapper = styled(Slider)`
  & > .slick-dots {
    bottom: 30px;

    button::before {
      font-size: 16px;
      color: #eee;
    }
  }
`

const Img = styled.img`
  width: 100%;
  height: 300px;
`

const IndexPage = () => (
  <div>
    <h1>Hi peopel</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <SliderWrapper {...settings}>
      {[1, 2, 3].map((x, i) => (
        <div key={i}>
          <Img src={withPrefix(`images/${x}.jpg`)} />
        </div>
      ))}
    </SliderWrapper>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default Title('首页')(IndexPage)
