import React from "react";

export default function Navber() {
  return (
    <div>
      {/* <!-- header-area-start --> */}
      <header>
        <div className="header__top theme-bg-1 d-none d-md-block">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="header__top-left">
                  <span>
                    Due to the <strong>COVID-19</strong> epidemic, orders may be
                    processed with a slight delay.
                  </span>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="header__top-right d-flex align-items-center">
                  <div className="header__top-link">
                    <a href="#">Store Location</a>
                    <a href="#">Order Tracking</a>
                    <a href="faq.html">FAQs</a>
                  </div>
                  <div className="header__lang">
                    <span className="header__lang-select">
                      English <i className="far fa-angle-down"></i>
                    </span>
                    <ul className="header__lang-submenu">
                      <li>
                        <a href="#">Australia</a>
                      </li>
                      <li>
                        <a href="#">Spain</a>
                      </li>
                      <li>
                        <a href="#">Brazil</a>
                      </li>
                      <li>
                        <a href="#">English</a>
                      </li>
                      <li>
                        <a href="#">France</a>
                      </li>
                      <li>
                        <a href="#">United States</a>
                      </li>
                    </ul>
                  </div>
                  <div className="header__top-price">
                    <select>
                      <option>USD</option>
                      <option>ARS</option>
                      <option>AUD</option>
                      <option>BRL</option>
                      <option>GBP</option>
                      <option>DKK</option>
                      <option>EUR</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header__main-area secondary-header d-none d-xl-block">
          <div className="container">
            <div className="header__for-megamenu p-relative">
              <div className="row align-items-center header-logo-border">
                <div className="col-xl-4">
                  <div className="header-three__search">
                    <form action="#">
                      <input type="email" placeholder="Search products..." />
                      <i className="icon-search"></i>
                    </form>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="header__logo text-center">
                    <a href="index.html">
                      <img src="assets/img/logo/logo.png" alt="logo" />
                    </a>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="header__info d-flex align-items-center justify-content-end">
                    <div className="header__info-search tpcolor__purple ml-10">
                      <button className="tp-search-toggle">
                        <i className="icon-search"></i>
                      </button>
                    </div>
                    <div className="header__info-user tpcolor__yellow ml-10">
                      <a href="#">
                        <i className="icon-user"></i>
                      </a>
                    </div>
                    <div className="header__info-wishlist tpcolor__greenish ml-10">
                      <a href="#">
                        <i className="icon-heart icons"></i>
                      </a>
                    </div>
                    <div className="header__info-cart tpcolor__oasis ml-10 tp-cart-toggle">
                      <button>
                        <i>
                          <img src="assets/img/icon/cart-1.svg" alt="" />
                        </i>
                        <span>5</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-xxl-6 col-xl-8">
                  <div
                    id="header-sticky"
                    className="header__menu main-menu mainmenu-three text-center"
                  >
                    <nav id="mobile-menu">
                      <ul>
                        <li className="has-dropdown has-homemenu">
                          <a href="index.html">Home</a>
                          <ul className="sub-menu home-menu-style">
                            <li>
                              <a href="index.html">
                                <img
                                  src="assets/img//header/home1-1.jpg"
                                  alt=""
                                />{" "}
                                Home Page V1
                              </a>
                            </li>
                            <li>
                              <a href="index-2.html">
                                <img
                                  src="assets/img//header/home2-1.jpg"
                                  alt=""
                                />{" "}
                                Home Page V2
                              </a>
                            </li>
                            <li>
                              <a href="index-3.html">
                                <img
                                  src="assets/img//header/home3-1.jpg"
                                  alt=""
                                />{" "}
                                Home Page V3
                              </a>
                            </li>
                            <li>
                              <a href="index-4.html">
                                <img
                                  src="assets/img//header/home4-1.jpg"
                                  alt=""
                                />{" "}
                                Home Page V4
                              </a>
                            </li>
                            <li>
                              <a href="index-5.html">
                                <img
                                  src="assets/img//header/home5-1.jpg"
                                  alt=""
                                />{" "}
                                Home Page V5
                              </a>
                            </li>
                            <li>
                              <a href="index-6.html">
                                <img
                                  src="assets/img//header/home6-1.jpg"
                                  alt=""
                                />{" "}
                                Home Page V6
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="has-dropdown has-megamenu">
                          <a href="course-grid.html">Shop</a>
                          <ul
                            className="sub-menu mega-menu"
                            style={{backgroundImage: "url('assets/img/banner/mega-menu-shop-1.jpg')"}}
                          >
                            <li>
                              <a className="mega-menu-title">Shop layout</a>
                              <ul>
                                <li>
                                  <a href="shop-left-sidebar.html">
                                    Shop With Banner{" "}
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-3.html">Shop Without Banner</a>
                                </li>
                                <li>
                                  <a href="shop-2.html">Shop Version</a>
                                </li>
                                <li>
                                  <a href="shop-left-sidebar.html">
                                    Shop Left sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-right-sidebar.html">
                                    Shop Right sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-list-view.html">
                                    Shop List view
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a className="mega-menu-title">Product layout</a>
                              <ul>
                                <li>
                                  <a href="shop-details-3.html">Image scroll</a>
                                </li>
                                <li>
                                  <a href="shop-details-grid.html">
                                    Product grid
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-details-top.html">
                                    Top Thumb Product
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-details.html">
                                    Bottom Thumb Product
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-details-4.html">
                                    Simple Product
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a className="mega-menu-title">Product type</a>
                              <ul>
                                <li>
                                  <a href="shop-details.html">
                                    Products Simple
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-details-grid.html">
                                    Products Group
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-details-3.html">
                                    Products Variable
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-details-3.html">Special</a>
                                </li>
                                <li>
                                  <a href="shop-details-4.html">Decoration</a>
                                </li>
                                <li>
                                  <a href="shop-details-top.html">
                                    Contruction
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a className="mega-menu-title">
                                Product category
                              </a>
                              <ul>
                                <li>
                                  <a href="shop-details.html">Fresh bakery</a>
                                </li>
                                <li>
                                  <a href="shop-details-3.html">Fresh fruits</a>
                                </li>
                                <li>
                                  <a href="shop-details-4.html">Fresh meat</a>
                                </li>
                                <li>
                                  <a href="shop-details.html">Fruit drink</a>
                                </li>
                                <li>
                                  <a href="shop-details.html">Fresh bakery</a>
                                </li>
                                <li>
                                  <a href="shop-details-grid.html">
                                    Biscuits snack
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <a href="blog.html">Blog</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="blog.html">Big image</a>
                            </li>
                            <li>
                              <a href="blog-right-sidebar.html">
                                Right sidebar
                              </a>
                            </li>
                            <li>
                              <a href="blog-left-sidebar.html">Left sidebar</a>
                            </li>
                            <li>
                              <a href="blog-details.html">Single Post</a>
                            </li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <a href="about.html">Pages</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="shop-location.html">Shop Location One</a>
                            </li>
                            <li>
                              <a href="shop-location-2.html">
                                Shop Location Two
                              </a>
                            </li>
                            <li>
                              <a href="faq.html">FAQs</a>
                            </li>
                            <li>
                              <a href="checkout.html">Checkout</a>
                            </li>
                            <li>
                              <a href="cart.html">Cart Page</a>
                            </li>
                            <li>
                              <a href="wishlist.html">Wishlist</a>
                            </li>
                            <li>
                              <a href="log-in.html">Sign In</a>
                            </li>
                            <li>
                              <a href="comming-soon.html">Coming soon</a>
                            </li>
                            <li>
                              <a href="404.html">Page 404</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="about.html">About Us</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact Us</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- header-search --> */}
        <div className="tpsearchbar tp-sidebar-area">
          <button className="tpsearchbar__close">
            <i className="icon-x"></i>
          </button>
          <div className="search-wrap text-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-6 pt-100 pb-100">
                  <h2 className="tpsearchbar__title">
                    What Are You Looking For?
                  </h2>
                  <div className="tpsearchbar__form">
                    <form action="#">
                      <input
                        type="text"
                        name="search"
                        placeholder="Search Product..."
                      />
                      <button className="tpsearchbar__search-btn">
                        <i className="icon-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="search-body-overlay"></div>
        {/* <!-- header-search-end --> */}

        {/* <!-- header-cart-start --> */}
        <div className="tpcartinfo tp-cart-info-area p-relative">
          <button className="tpcart__close">
            <i className="icon-x"></i>
          </button>
          <div className="tpcart">
            <h4 className="tpcart__title">Your Cart</h4>
            <div className="tpcart__product">
              <div className="tpcart__product-list">
                <ul>
                  <li>
                    <div className="tpcart__item">
                      <div className="tpcart__img">
                        <img
                          src="assets/img/product/products1-min.jpg"
                          alt=""
                        />
                        <div className="tpcart__del">
                          <a href="#">
                            <i className="icon-x-circle"></i>
                          </a>
                        </div>
                      </div>
                      <div className="tpcart__content">
                        <span className="tpcart__content-title">
                          <a href="shop-details.html">
                            Stacy's Pita Chips Parmesan Garlic & Herb From
                            Nature
                          </a>
                        </span>
                        <div className="tpcart__cart-price">
                          <span className="quantity">1 x</span>
                          <span className="new-price">$162.80</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="tpcart__item">
                      <div className="tpcart__img">
                        <img
                          src="assets/img/product/products12-min.jpg"
                          alt=""
                        />
                        <div className="tpcart__del">
                          <a href="#">
                            <i className="icon-x-circle"></i>
                          </a>
                        </div>
                      </div>
                      <div className="tpcart__content">
                        <span className="tpcart__content-title">
                          <a href="shop-details.html">
                            Banana, Beautiful Skin, Good For Health 1Kg
                          </a>
                        </span>
                        <div className="tpcart__cart-price">
                          <span className="quantity">1 x</span>
                          <span className="new-price">$138.00</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="tpcart__item">
                      <div className="tpcart__img">
                        <img
                          src="assets/img/product/products3-min.jpg"
                          alt=""
                        />
                        <div className="tpcart__del">
                          <a href="#">
                            <i className="icon-x-circle"></i>
                          </a>
                        </div>
                      </div>
                      <div className="tpcart__content">
                        <span className="tpcart__content-title">
                          <a href="shop-details.html">
                            Quaker Popped Rice Crisps Snacks Chocolate
                          </a>
                        </span>
                        <div className="tpcart__cart-price">
                          <span className="quantity">1 x</span>
                          <span className="new-price">$162.8</span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="tpcart__checkout">
                <div className="tpcart__total-price d-flex justify-content-between align-items-center">
                  <span> Subtotal:</span>
                  <span className="heilight-price"> $300.00</span>
                </div>
                <div className="tpcart__checkout-btn">
                  <a className="tpcart-btn mb-10" href="cart.html">
                    View Cart
                  </a>
                  <a className="tpcheck-btn" href="checkout.html">
                    Checkout
                  </a>
                </div>
              </div>
            </div>
            <div className="tpcart__free-shipping text-center">
              <span>
                Free shipping for orders <b>under 10km</b>
              </span>
            </div>
          </div>
        </div>
        <div className="cartbody-overlay"></div>
        {/* <!-- header-cart-end --> */}

        {/* <!-- mobile-menu-area --> */}
        <div
          id="header-sticky-2"
          className="tpmobile-menu secondary-mobile-menu d-xl-none"
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-4 col-3 col-sm-3">
                <div className="mobile-menu-icon">
                  <button className="tp-menu-toggle">
                    <i className="icon-menu1"></i>
                  </button>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-6 col-sm-4">
                <div className="header__logo text-center">
                  <a href="index.html">
                    <img src="assets/img/logo/logo.png" alt="logo" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-3 col-sm-5">
                <div className="header__info d-flex align-items-center">
                  <div className="header__info-search tpcolor__purple ml-10 d-none d-sm-block">
                    <button className="tp-search-toggle">
                      <i className="icon-search"></i>
                    </button>
                  </div>
                  <div className="header__info-user tpcolor__yellow ml-10 d-none d-sm-block">
                    <a href="#">
                      <i className="icon-user"></i>
                    </a>
                  </div>
                  <div className="header__info-wishlist tpcolor__greenish ml-10 d-none d-sm-block">
                    <a href="#">
                      <i className="icon-heart icons"></i>
                    </a>
                  </div>
                  <div className="header__info-cart tpcolor__oasis ml-10 tp-cart-toggle">
                    <button>
                      <i>
                        <img src="assets/img/icon/cart-1.svg" alt="" />
                      </i>
                      <span>5</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="body-overlay"></div>
        {/* <!-- mobile-menu-area-end --> */}

        {/* <!-- sidebar-menu-area --> */}
        <div className="tpsideinfo">
          <button className="tpsideinfo__close">
            Close<i className="fal fa-times ml-10"></i>
          </button>
          <div className="tpsideinfo__search text-center pt-35">
            <span className="tpsideinfo__search-title mb-20">
              What Are You Looking For?
            </span>
            <form action="#">
              <input type="text" placeholder="Search Products..." />
              <button>
                <i className="icon-search"></i>
              </button>
            </form>
          </div>
          <div className="tpsideinfo__nabtab">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Menu
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Categories
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
                tabIndex="0"
              >
                <div className="mobile-menu"></div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
                tabIndex="0"
              >
                <div className="tpsidebar-categories">
                  <ul>
                    <li>
                      <a href="shop-details.html">Dairy Farm</a>
                    </li>
                    <li>
                      <a href="shop-details.html">Healthy Foods</a>
                    </li>
                    <li>
                      <a href="shop-details.html">Lifestyle</a>
                    </li>
                    <li>
                      <a href="shop-details.html">Organics</a>
                    </li>
                    <li>
                      <a href="shop-details.html">Photography</a>
                    </li>
                    <li>
                      <a href="shop-details.html">Shopping</a>
                    </li>
                    <li>
                      <a href="shop-details.html">Tips & Tricks</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="tpsideinfo__account-link">
            <a href="log-in.html">
              <i className="icon-user icons"></i> Login / Register
            </a>
          </div>
          <div className="tpsideinfo__wishlist-link">
            <a href="wishlist.html" target="_parent">
              <i className="icon-heart"></i> Wishlist
            </a>
          </div>
        </div>
        {/* <!-- sidebar-menu-area-end --> */}
      </header>
      {/* <!-- header-area-end --> */}
    </div>
  );
}
