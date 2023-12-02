import React from "react";

const WkProduct = () => {
  return (
    <>
      <div className="weekly-product-area whight-product grey-bg">
        <div className="container">
          <div className="sections__wrapper white-bg pl-50 pr-50 pb-10">
            <div className="row">
              <div className="col-md-6">
                <div className="tpnavtab__area tpnavtab__newitem">
                  <nav>
                    <div
                      className="nav tp-nav-tabs"
                      id="nav-tab"
                      role="tablist"
                    >
                      <button
                        className="nav-link active"
                        id="nav-arrivals-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-arrivals"
                        type="button"
                        role="tab"
                        aria-controls="nav-arrivals"
                        aria-selected="true"
                      >
                        New Arrivals
                      </button>
                      <button
                        className="nav-link"
                        id="nav-features-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-features"
                        type="button"
                        role="tab"
                        aria-controls="nav-features"
                        aria-selected="false"
                      >
                        Features
                      </button>
                      <button
                        className="nav-link"
                        id="nav-best-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-best"
                        type="button"
                        role="tab"
                        aria-controls="nav-best"
                        aria-selected="false"
                      >
                        Best Rate
                      </button>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="col-md-6">
                <div className="tpproduct__all-item">
                  <a href="shop-3.html">
                    See All <i className="icon-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="tpnavtab__area pb-40">
                  <div className="tab-content" id="nav-tabContent-tp">
                    <div
                      className="tab-pane fade show active"
                      id="nav-arrivals"
                      role="tabpanel"
                      aria-labelledby="nav-arrivals-tab"
                      tabIndex={0}
                    >
                      <div className="tpproduct__arrow p-relative">
                        <div className="swiper-container tpproduct-active-2 tpslider-bottom p-relative tpproduct-priority">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products29-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details.html"
                                  >
                                    <img
                                      src="assets/img/product/products30-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -50%
                                    </span>
                                    <span className="tpproduct__info-hot bage__hot">
                                      HOT
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details.html">Fresh Meat</a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details-top-.html">
                                      Mangosteen Organic From VietNamese
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products9-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details.html"
                                  >
                                    <img
                                      src="assets/img/product/products10-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -40%
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details.html">Fresh Meat</a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details.html">
                                      Soda Sparkling Water Maker (Rose Gold)
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products13-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details.html"
                                  >
                                    <img
                                      src="assets/img/product/products35-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -10%
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details-3.html">
                                      Fresh Fruits
                                    </a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details.html">
                                      HOT - Lettuce Fresh Produce Fruit
                                      Vegetables
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products27-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details.html"
                                  >
                                    <img
                                      src="assets/img/product/products14-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -90%
                                    </span>
                                    <span className="tpproduct__info-hot bage__hot">
                                      HOT
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details-3.html">
                                      Fresh Fruits
                                    </a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details-grid.html">
                                      Pure Irish Organic Beef Quarter Pounder
                                      Burgers
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products15-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details.html"
                                  >
                                    <img
                                      src="assets/img/product/products32-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -50%
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details-3.html">Vagetables</a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details-3.html">
                                      Ginger Fresh, Whole, Organic - 250gram
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products12-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details.html"
                                  >
                                    <img
                                      src="assets/img/product/products28-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -40%
                                    </span>
                                    <span className="tpproduct__info-hot bage__hot">
                                      HOT
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details-3.html">
                                      Fresh Fruits
                                    </a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details-grid.html">
                                      Laffy Taffy Laff Bites Gone Bananas - 4
                                      Packs
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tpproduct-btn">
                          <div className="tpprduct-arrow tpproduct-btn__prv tpproduct-arrow-left">
                            <a href="#">
                              <i className="icon-chevron-left" />
                            </a>
                          </div>
                          <div className="tpprduct-arrow tpproduct-btn__nxt tpproduct-arrow-right">
                            <a href="#">
                              <i className="icon-chevron-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-features"
                      role="tabpanel"
                      aria-labelledby="nav-features-tab"
                      tabIndex={0}
                    >
                      <div className="tpproduct__arrow p-relative">
                        <div className="swiper-container tpproduct-active-2 tpslider-bottom p-relative tpproduct-priority">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products30-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details.html"
                                  >
                                    <img
                                      src="assets/img/product/products29-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -50%
                                    </span>
                                    <span className="tpproduct__info-hot bage__hot">
                                      HOT
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details.html">Fresh Meat</a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details-top-.html">
                                      Mangosteen Organic From VietNamese
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products10-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details.html"
                                  >
                                    <img
                                      src="assets/img/product/products9-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -40%
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details.html">Fresh Meat</a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details.html">
                                      Soda Sparkling Water Maker (Rose Gold)
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products15-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details.html"
                                  >
                                    <img
                                      src="assets/img/product/products32-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -40%
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details-3.html">
                                      Fresh Fruits
                                    </a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details.html">
                                      Soda Sparkling Water Maker (Rose Gold)
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products29-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details.html"
                                  >
                                    <img
                                      src="assets/img/product/products30-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -50%
                                    </span>
                                    <span className="tpproduct__info-hot bage__hot">
                                      HOT
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details.html">Fresh Meat</a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details-top-.html">
                                      Mangosteen Organic From VietNamese
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products9-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details.html"
                                  >
                                    <img
                                      src="assets/img/product/products10-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -40%
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details.html">Fresh Meat</a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details.html">
                                      Soda Sparkling Water Maker (Rose Gold)
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products26-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details.html"
                                  >
                                    <img
                                      src="assets/img/product/products9-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -50%
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details-3.html">
                                      Fresh Fruits
                                    </a>
                                    ,
                                    <a href="shop-details-3.html">Vagetables</a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details-3.html">
                                      Ginger Fresh, Whole, Organic - 250gram
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tpproduct-btn">
                          <div className="tpprduct-arrow tpproduct-btn__prv tpproduct-arrow-left">
                            <a href="#">
                              <i className="icon-chevron-left" />
                            </a>
                          </div>
                          <div className="tpprduct-arrow tpproduct-btn__nxt tpproduct-arrow-right">
                            <a href="#">
                              <i className="icon-chevron-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-best"
                      role="tabpanel"
                      aria-labelledby="nav-best-tab"
                      tabIndex={0}
                    >
                      <div className="tpproduct__arrow p-relative">
                        <div className="swiper-container tpproduct-active-2 tpslider-bottom p-relative tpproduct-priority">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products21-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details-grid.html"
                                  >
                                    <img
                                      src="assets/img/product/products1-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -50%
                                    </span>
                                    <span className="tpproduct__info-hot bage__hot">
                                      HOT
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details-3.html">
                                      Fresh Fruits
                                    </a>
                                    ,
                                    <a href="shop-details-3.html">Vagetables</a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details-top-.html">
                                      Mangosteen Organic From VietNamese
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products22-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details-grid.html"
                                  >
                                    <img
                                      src="assets/img/product/products11-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -40%
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details-3.html">
                                      Fresh Fruits
                                    </a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details.html">
                                      Soda Sparkling Water Maker (Rose Gold)
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products4-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details-grid.html"
                                  >
                                    <img
                                      src="assets/img/product/products23-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -10%
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details-3.html">Vagetables</a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details.html">
                                      HOT - Lettuce Fresh Produce Fruit
                                      Vegetables
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products27-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details.html"
                                  >
                                    <img
                                      src="assets/img/product/products14-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -90%
                                    </span>
                                    <span className="tpproduct__info-hot bage__hot">
                                      HOT
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details-3.html">
                                      Fresh Fruits
                                    </a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details-grid.html">
                                      Pure Irish Organic Beef Quarter Pounder
                                      Burgers
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products16-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details-grid.html"
                                  >
                                    <img
                                      src="assets/img/product/products11-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -50%
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details-3.html">
                                      Fresh Fruits
                                    </a>
                                    ,
                                    <a href="shop-details-3.html">Vagetables</a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details-3.html">
                                      Ginger Fresh, Whole, Organic - 250gram
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products17-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details-grid.html"
                                  >
                                    <img
                                      src="assets/img/product/products37-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -40%
                                    </span>
                                    <span className="tpproduct__info-hot bage__hot">
                                      HOT
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details-3.html">
                                      Fresh Fruits
                                    </a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details-grid.html">
                                      Laffy Taffy Laff Bites Gone Bananas - 4
                                      Packs
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tpproduct-btn">
                          <div className="tpprduct-arrow tpproduct-btn__prv tpproduct-arrow-left">
                            <a href="#">
                              <i className="icon-chevron-left" />
                            </a>
                          </div>
                          <div className="tpprduct-arrow tpproduct-btn__nxt tpproduct-arrow-right">
                            <a href="#">
                              <i className="icon-chevron-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="weekly-product-area whight-product grey-bg">
        <div className="container">
          <div className="sections__wrapper white-bg pl-50 pr-50">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="tpsection mb-10">
                  <h4 className="tpsection__title brand-product-title">
                    Top Trending Products
                  </h4>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 text-center">
                <div className="tpnavtab__area tp-navtab-style-2">
                  <nav>
                    <div className="nav nav-tabs" role="tablist">
                      <button
                        className="nav-link active"
                        id="nav-all-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-all"
                        type="button"
                        role="tab"
                        aria-controls="nav-all"
                        aria-selected="true"
                      >
                        All
                      </button>
                      <button
                        className="nav-link"
                        id="nav-meat-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-meat"
                        type="button"
                        role="tab"
                        aria-controls="nav-meat"
                        aria-selected="false"
                      >
                        Sea Food
                      </button>
                      <button
                        className="nav-link"
                        id="nav-vegetables-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-vegetables"
                        type="button"
                        role="tab"
                        aria-controls="nav-vegetables"
                        aria-selected="false"
                      >
                        Vegetables
                      </button>
                      <button
                        className="nav-link"
                        id="nav-snacks-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-snacks"
                        type="button"
                        role="tab"
                        aria-controls="nav-snacks"
                        aria-selected="false"
                      >
                        Beans &amp; Peas
                      </button>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="tpnavtab__area pb-40">
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-all"
                      role="tabpanel"
                      aria-labelledby="nav-all-tab"
                      tabIndex={0}
                    >
                      <div className="tpproduct__arrow p-relative">
                        <div className="swiper-container tpproduct-active-3 tpslider-bottom p-relative tpproduct-priority">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products29-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details.html"
                                  >
                                    <img
                                      src="assets/img/product/products30-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -50%
                                    </span>
                                    <span className="tpproduct__info-hot bage__hot">
                                      HOT
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details.html">Fresh Meat</a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details-top-.html">
                                      Mangosteen Organic From VietNamese
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products9-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details.html"
                                  >
                                    <img
                                      src="assets/img/product/products10-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -40%
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details.html">Fresh Meat</a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details.html">
                                      Soda Sparkling Water Maker (Rose Gold)
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products13-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details.html"
                                  >
                                    <img
                                      src="assets/img/product/products35-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -10%
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details-3.html">
                                      Fresh Fruits
                                    </a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details.html">
                                      HOT - Lettuce Fresh Produce Fruit
                                      Vegetables
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products27-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details.html"
                                  >
                                    <img
                                      src="assets/img/product/products14-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -90%
                                    </span>
                                    <span className="tpproduct__info-hot bage__hot">
                                      HOT
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details-3.html">
                                      Fresh Fruits
                                    </a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details-grid.html">
                                      Pure Irish Organic Beef Quarter Pounder
                                      Burgers
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products15-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details.html"
                                  >
                                    <img
                                      src="assets/img/product/products32-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -50%
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details-3.html">Vagetables</a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details-3.html">
                                      Ginger Fresh, Whole, Organic - 250gram
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products12-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details.html"
                                  >
                                    <img
                                      src="assets/img/product/products28-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -40%
                                    </span>
                                    <span className="tpproduct__info-hot bage__hot">
                                      HOT
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details-3.html">
                                      Fresh Fruits
                                    </a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details-grid.html">
                                      Laffy Taffy Laff Bites Gone Bananas - 4
                                      Packs
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tpproduct-btn">
                          <div className="tpprduct-arrow tpproduct-btn__prv tpproduct-arrow-left-2">
                            <a href="#">
                              <i className="icon-chevron-left" />
                            </a>
                          </div>
                          <div className="tpprduct-arrow tpproduct-btn__nxt tpproduct-arrow-right-2">
                            <a href="#">
                              <i className="icon-chevron-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-meat"
                      role="tabpanel"
                      aria-labelledby="nav-meat-tab"
                      tabIndex={0}
                    >
                      <div className="tpproduct__arrow p-relative">
                        <div className="swiper-container tpproduct-active-3 tpslider-bottom p-relative tpproduct-priority">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products30-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details.html"
                                  >
                                    <img
                                      src="assets/img/product/products29-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -50%
                                    </span>
                                    <span className="tpproduct__info-hot bage__hot">
                                      HOT
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details.html">Fresh Meat</a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details-top-.html">
                                      Mangosteen Organic From VietNamese
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products10-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details.html"
                                  >
                                    <img
                                      src="assets/img/product/products9-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -40%
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details.html">Fresh Meat</a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details.html">
                                      Soda Sparkling Water Maker (Rose Gold)
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products15-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details.html"
                                  >
                                    <img
                                      src="assets/img/product/products32-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -40%
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details-3.html">
                                      Fresh Fruits
                                    </a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details.html">
                                      Soda Sparkling Water Maker (Rose Gold)
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products29-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details.html"
                                  >
                                    <img
                                      src="assets/img/product/products30-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -50%
                                    </span>
                                    <span className="tpproduct__info-hot bage__hot">
                                      HOT
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details.html">Fresh Meat</a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details-top-.html">
                                      Mangosteen Organic From VietNamese
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products9-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details.html"
                                  >
                                    <img
                                      src="assets/img/product/products10-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -40%
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details.html">Fresh Meat</a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details.html">
                                      Soda Sparkling Water Maker (Rose Gold)
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products26-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details.html"
                                  >
                                    <img
                                      src="assets/img/product/products9-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -50%
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details-3.html">
                                      Fresh Fruits
                                    </a>
                                    ,
                                    <a href="shop-details-3.html">Vagetables</a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details-3.html">
                                      Ginger Fresh, Whole, Organic - 250gram
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tpproduct-btn">
                          <div className="tpprduct-arrow tpproduct-btn__prv tpproduct-arrow-left-2">
                            <a href="#">
                              <i className="icon-chevron-left" />
                            </a>
                          </div>
                          <div className="tpprduct-arrow tpproduct-btn__nxt tpproduct-arrow-right-2">
                            <a href="#">
                              <i className="icon-chevron-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-vegetables"
                      role="tabpanel"
                      aria-labelledby="nav-vegetables-tab"
                      tabIndex={0}
                    >
                      <div className="tpproduct__arrow p-relative">
                        <div className="swiper-container tpproduct-active-3 tpslider-bottom p-relative tpproduct-priority">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products21-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details-grid.html"
                                  >
                                    <img
                                      src="assets/img/product/products1-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -50%
                                    </span>
                                    <span className="tpproduct__info-hot bage__hot">
                                      HOT
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details-3.html">
                                      Fresh Fruits
                                    </a>
                                    ,
                                    <a href="shop-details-3.html">Vagetables</a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details-top-.html">
                                      Mangosteen Organic From VietNamese
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products22-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details-grid.html"
                                  >
                                    <img
                                      src="assets/img/product/products11-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -40%
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details-3.html">
                                      Fresh Fruits
                                    </a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details.html">
                                      Soda Sparkling Water Maker (Rose Gold)
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products4-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details-grid.html"
                                  >
                                    <img
                                      src="assets/img/product/products23-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -10%
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details-3.html">Vagetables</a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details.html">
                                      HOT - Lettuce Fresh Produce Fruit
                                      Vegetables
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products27-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details.html"
                                  >
                                    <img
                                      src="assets/img/product/products14-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -90%
                                    </span>
                                    <span className="tpproduct__info-hot bage__hot">
                                      HOT
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details-3.html">
                                      Fresh Fruits
                                    </a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details-grid.html">
                                      Pure Irish Organic Beef Quarter Pounder
                                      Burgers
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products16-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details-grid.html"
                                  >
                                    <img
                                      src="assets/img/product/products11-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -50%
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details-3.html">
                                      Fresh Fruits
                                    </a>
                                    ,
                                    <a href="shop-details-3.html">Vagetables</a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details-3.html">
                                      Ginger Fresh, Whole, Organic - 250gram
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products17-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details-grid.html"
                                  >
                                    <img
                                      src="assets/img/product/products37-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -40%
                                    </span>
                                    <span className="tpproduct__info-hot bage__hot">
                                      HOT
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details-3.html">
                                      Fresh Fruits
                                    </a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details-grid.html">
                                      Laffy Taffy Laff Bites Gone Bananas - 4
                                      Packs
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tpproduct-btn">
                          <div className="tpprduct-arrow tpproduct-btn__prv tpproduct-arrow-left-2">
                            <a href="#">
                              <i className="icon-chevron-left" />
                            </a>
                          </div>
                          <div className="tpprduct-arrow tpproduct-btn__nxt tpproduct-arrow-right-2">
                            <a href="#">
                              <i className="icon-chevron-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-snacks"
                      role="tabpanel"
                      aria-labelledby="nav-snacks-tab"
                      tabIndex={0}
                    >
                      <div className="tpproduct__arrow p-relative">
                        <div className="swiper-container tpproduct-active-3 tpslider-bottom p-relative tpproduct-priority">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products21-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details-grid.html"
                                  >
                                    <img
                                      src="assets/img/product/products1-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -50%
                                    </span>
                                    <span className="tpproduct__info-hot bage__hot">
                                      HOT
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details-3.html">
                                      Fresh Fruits
                                    </a>
                                    ,
                                    <a href="shop-details-3.html">Vagetables</a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details-top-.html">
                                      Mangosteen Organic From VietNamese
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products13-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details.html"
                                  >
                                    <img
                                      src="assets/img/product/products35-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -10%
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details-3.html">
                                      Fresh Fruits
                                    </a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details.html">
                                      HOT - Lettuce Fresh Produce Fruit
                                      Vegetables
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products27-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details.html"
                                  >
                                    <img
                                      src="assets/img/product/products14-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -90%
                                    </span>
                                    <span className="tpproduct__info-hot bage__hot">
                                      HOT
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details-3.html">
                                      Fresh Fruits
                                    </a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details-grid.html">
                                      Pure Irish Organic Beef Quarter Pounder
                                      Burgers
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products15-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details.html"
                                  >
                                    <img
                                      src="assets/img/product/products32-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -50%
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details-3.html">Vagetables</a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details-3.html">
                                      Ginger Fresh, Whole, Organic - 250gram
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products12-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details.html"
                                  >
                                    <img
                                      src="assets/img/product/products28-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -40%
                                    </span>
                                    <span className="tpproduct__info-hot bage__hot">
                                      HOT
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details-3.html">
                                      Fresh Fruits
                                    </a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details-grid.html">
                                      Laffy Taffy Laff Bites Gone Bananas - 4
                                      Packs
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/products17-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="tpproduct__thumb-img"
                                    href="shop-details-grid.html"
                                  >
                                    <img
                                      src="assets/img/product/products37-min.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -40%
                                    </span>
                                    <span className="tpproduct__info-hot bage__hot">
                                      HOT
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping">
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="wishlist.html"
                                    >
                                      <i className="icon-heart icons" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-wishlist"
                                      href="#"
                                    >
                                      <i className="icon-layers" />
                                    </a>
                                    <a
                                      className="tpproduct__shopping-cart"
                                      href="#"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </div>
                                </div>
                                <div className="tpproduct__content">
                                  <span className="tpproduct__content-weight">
                                    <a href="shop-details-3.html">
                                      Fresh Fruits
                                    </a>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <a href="shop-details-grid.html">
                                      Laffy Taffy Laff Bites Gone Bananas - 4
                                      Packs
                                    </a>
                                  </h4>
                                  <div className="tpproduct__rating mb-5">
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                    <a href="#">
                                      <i className="icon-star_outline1" />
                                    </a>
                                  </div>
                                  <div className="tpproduct__price">
                                    <span>$56.00</span>
                                    <del>$19.00</del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <a className="tp-btn-2" href="cart.html">
                                      Add to cart
                                    </a>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Type: Organic</li>
                                      <li>MFG: August 4.2021</li>
                                      <li>LIFE: 60 days</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tpproduct-btn">
                          <div className="tpprduct-arrow tpproduct-btn__prv tpproduct-arrow-left-2">
                            <a href="#">
                              <i className="icon-chevron-left" />
                            </a>
                          </div>
                          <div className="tpprduct-arrow tpproduct-btn__nxt tpproduct-arrow-right-2">
                            <a href="#">
                              <i className="icon-chevron-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WkProduct;
