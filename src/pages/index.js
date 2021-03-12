import * as React from "react"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <CarouselProvider
      totalSlides={4}
      currentSlide={2}
      naturalSlideWidth={1}
      naturalSlideHeight={1.25}
    >
      <Slider className="slider">
        <Slide
          index={0}
          classNameHidden="hiddenSlide"
          classNameVisible="visibleSlide"
          className="slide"
        >
          FIRST SLIDE
        </Slide>
        <Slide
          index={1}
          classNameHidden="hiddenSlide"
          classNameVisible="visibleSlide"
          className="slide"
        >
          SECOND SLIDE
        </Slide>
        <Slide
          index={2}
          classNameHidden="hiddenSlide"
          classNameVisible="visibleSlide"
          className="slide"
        >
          THIRD SLIDE
        </Slide>
        <Slide
          index={3}
          classNameHidden="hiddenSlide"
          classNameVisible="visibleSlide"
          className="slide"
        >
          FOURTH SLIDE
        </Slide>
      </Slider>
      <ButtonBack >
      </ButtonBack>
      <ButtonNext >
      </ButtonNext>
    </CarouselProvider>

  </Layout>
)

export default IndexPage
