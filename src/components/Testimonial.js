import React from 'react'

const Testimonial = () => {
  return (
    <>
        <section className="testimonial-area pt-60 pb-60">
        <div className="container">
          <div className="testimonial__shape p-relative">
            <img src="assets/img/shape/tree-leaf-4.svg" alt="" className="testimonial__shape-one" />
            <img src="assets/img/shape/tree-leaf-5.svg" alt="" className="testimonial__shape-two" />
            <img src="assets/img/shape/tree-leaf-6.png" alt="" className="testimonial__shape-three" />
          </div>
          <div className="swiper-container tptestimonial-active p-relative">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="row justify-content-center p-relative">
                  <div className="col-md-8">
                    <div className="tptestimonial__item text-center ">
                      <div className="tptestimonial__avata mb-25">
                        <img src="assets/img/testimonial/test-avata-1.png" alt="" />
                      </div>
                      <div className="tptestimonial__content">
                        <p>" Also like the fact that I can pick my staples in the brown <br />
                          paper packs and glass containers at the zero waste section, with an <br />
                          idea to reduce plastic and also more convenient. " 
                        </p>
                        <div className="tptestimonial__rating mb-5">
                          <a href="#"><i className="icon-star_outline1" /></a>
                          <a href="#"><i className="icon-star_outline1" /></a>
                          <a href="#"><i className="icon-star_outline1" /></a>
                          <a href="#"><i className="icon-star_outline1" /></a>
                          <a href="#"><i className="icon-star_outline1" /></a>
                        </div>
                        <h4 className="tptestimonial__title">Algistino Lionel</h4>
                        <span className="tptestimonial__avata-position">Web Designer at Blueskytechco</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="row justify-content-center p-relative">
                  <div className="col-md-8">
                    <div className="tptestimonial__item text-center ">
                      <div className="tptestimonial__avata mb-25">
                        <img src="assets/img/testimonial/test-avata-2.png" alt="" />
                      </div>
                      <div className="tptestimonial__content">
                        <p>
                          " Also like the fact that I can pick my staples in the brown <br />
                          paper packs and glass containers at the zero waste section, with an <br />
                          idea to reduce plastic and also more convenient. " 
                        </p>
                        <div className="tptestimonial__rating mb-5">
                          <a href="#"><i className="icon-star_outline1" /></a>
                          <a href="#"><i className="icon-star_outline1" /></a>
                          <a href="#"><i className="icon-star_outline1" /></a>
                          <a href="#"><i className="icon-star_outline1" /></a>
                          <a href="#"><i className="icon-star_outline1" /></a>
                        </div>
                        <h4 className="tptestimonial__title">Jackson Roben</h4>
                        <span className="tptestimonial__avata-position">Web Designer at Blueskytechco</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="row justify-content-center p-relative">
                  <div className="col-md-8">
                    <div className="tptestimonial__item text-center ">
                      <div className="tptestimonial__avata mb-25">
                        <img src="assets/img/testimonial/test-avata-3.png" alt="" />
                      </div>
                      <div className="tptestimonial__content">
                        <p>" Also like the fact that I can pick my staples in the brown <br />
                          paper packs and glass containers at the zero waste section, with an <br />
                          idea to reduce plastic and also more convenient. " 
                        </p>
                        <div className="tptestimonial__rating mb-5">
                          <a href="#"><i className="icon-star_outline1" /></a>
                          <a href="#"><i className="icon-star_outline1" /></a>
                          <a href="#"><i className="icon-star_outline1" /></a>
                          <a href="#"><i className="icon-star_outline1" /></a>
                          <a href="#"><i className="icon-star_outline1" /></a>
                        </div>
                        <h4 className="tptestimonial__title">Lionel</h4>
                        <span className="tptestimonial__avata-position">Web Designer at Blueskytechco</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tptestimonial-arrow d-none d-md-block">
              <button className="testi-arrow tptestimonial-arrow-left"><i className="icon-chevron-left" /></button>
              <button className="testi-arrow tptestimonial-arrow-right"><i className="icon-chevron-right" /></button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonial