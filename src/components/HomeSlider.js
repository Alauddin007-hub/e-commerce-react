import React from 'react'

export default function HomeSlider() {
  return (
    <div>
        <section className="slider-area tpslider__home-3 tpslider-delay grey-bg slider-three">
        <div className="swiper-container slider-active">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="tpslider grey-bg">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-7">
                      <div className="tpslider__content slider-three-content text-center">
                        <span className="tpslider__sub-title mb-15">Special Offer</span>
                        <h2 className="tpslider__title mb-25">Vegetable <br /> Good For Health</h2>
                        <p>Presentation matters. Our fresh Vietnamese vegetable rolls <br /> look good and taste even better</p>
                        <div className="tpslider__btn">
                          <a className="tp-btn" href="shop-3.html">Shop Now</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-5">
                      <div className="tpslider__thumb p-relative">
                        <img className="tpslider__thumb-img tpslider__three" src="assets/img/slider/slider-bg-6.png" alt="slider-bg" />
                        <div className="tpslider__shape d-none d-lg-block">
                          <img className="tpslider__shape-three three-shap-one" src="assets/img/slider/slider-shape-5.png" alt="shape" />
                          <img className=" three-shap-two" src="assets/img/slider/slider-shape-6.png" alt="shape" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="tpslider grey-bg">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-7">
                      <div className="tpslider__content text-center slider-three-content-two">
                        <span className="tpslider__sub-title mb-15">Top Deals</span>
                        <h2 className="tpslider__title mb-25">Hot Deals <br /> Recovery For Health</h2>
                        <p>Presentation matters. Our fresh Vietnamese vegetable rolls <br /> look good and taste even better</p>
                        <div className="tpslider__btn">
                          <a className="tp-btn" href="shop-3.html">Shop Now</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-5">
                      <div className="tpslider__thumb p-relative pt-50">
                        <img className="tpslider__thumb-img tpslider__three" src="assets/img/slider/slider-bg-7.png" alt="slider-bg" />
                        <div className="tpslider__shape d-none d-lg-block">
                          <img className="three-shap-three" src="assets/img/slider/slider-shape-5.png" alt="shape" />
                          <img className="three-shap-four" src="assets/img/slider/slider-shape-6.png" alt="shape" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
          <div className="tpslider__arrow d-none  d-xxl-block">
            <button className="tpsliderarrow tpslider__arrow-prv"><i className="icon-chevron-left" /></button>
            <button className="tpsliderarrow tpslider__arrow-nxt"><i className="icon-chevron-right" /></button>
          </div>
        </div>
      </section>
    </div>
  )
}
