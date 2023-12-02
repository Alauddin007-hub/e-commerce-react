import React from 'react'

const Banner = () => {
  return (
    <>
        <section className="banner-area grey-bg">
        <div className="container">
          <div className="sections__wrapper white-bg pt-20 pl-50 pr-50 pb-30">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="tpbanner__item mb-30">
                  <a href="shop-2.html">
                    <div className="tpbanner__text tpbanner__bg" style={{backgroundImage: "url('assets/img/banner/banner-4.jpg')"}}>
                      <span className="tpbanner__sub-title mb-20">Top offers</span>
                      <h4 className="tpbanner__title mb-20">seafood <br /> Fresh &amp; Tasty</h4>
                      <p>Natural, Rich in Nutrition</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="tpbanner__item mb-30">
                  <a href="shop-2.html">
                    <div className="tpbanner__text tpbanner__bg" style={{backgroundImage: "url('assets/img/banner/banner-5.jpg')"}}>
                      <span className="tpbanner__sub-title mb-20">Weekend Deals</span>
                      <h4 className="tpbanner__title mb-20">vegetable <br /> Best For Family</h4>
                      <p>Top Quality Products</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="tpbanner__item mb-30">
                  <a href="shop-2.html">
                    <div className="tpbanner__text tpbanner__bg" style={{backgroundImage: "url('assets/img/banner/banner-6.jpg')"}}>
                      <span className="tpbanner__sub-title mb-20">Top seller</span>
                      <h4 className="tpbanner__title mb-20">fresh Meat <br /> Fresh &amp; Tasty</h4>
                      <p>Limited Time: Online Only!</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner