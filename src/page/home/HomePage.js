import React, { useState, useEffect } from 'react'
import '../../css/demo3.min.css'
import "../../css/stickyicon.css"
import "../../css/amimate.min.css"
import "../../css/all.min.css"
import { Carousel } from 'antd';
import slider1 from "../../images/demos/demo3/slides/1.jpg"
import singer from "../../images/demos/demo3/slides/single.png"
import slider2 from "../../images/demos/demo3/slides/2.jpg"
import slider3 from "../../images/demos/demo3/slides/3.jpg"
import banner1 from "../../images/demos/demo3/banners/1.jpg"
import banner2 from "../../images/demos/demo3/banners/2.jpg"
import banner3 from "../../images/demos/demo3/banner2.jpg"
import { useProductContext } from '../../services/helpers/getDataHelpers'
const HomePage = () => {
    const { product, handleClickDetail, categoryParent, handleOnclickCategoryParent } = useProductContext();
    return (
        <>
            <main class="main mt-lg-4">
                <div class="page-content">
                    <div class="container">
                        <div class="row">
                            <aside class="col-xl-3 col-lg-4 sidebar sidebar-fixed sticky-sidebar-wrapper home-sidebar">
                                <div class="sidebar-overlay">
                                </div>
                                <a class="sidebar-close" href="#"><i class="d-icon-times"></i></a>
                                <a href="#" class="sidebar-toggle"><i class="fas fa-chevron-right"></i></a>
                                <div class="sidebar-content">
                                    <div class="sticky-sidebar">
                                        <ul class="menu vertical-menu category-menu mb-4">
                                            <li><a href="demo3-shop.html" class="menu-title">Popular Categories</a></li>
                                            {
                                                categoryParent.map((items, index) => (
                                                    <li key={index}> <a onClick={() => handleOnclickCategoryParent(items.id)}>{items.name}</a></li>
                                                ))
                                            }
                                        </ul>
                                        <div class="banner banner-fixed overlay-zoom overlay-dark">
                                            <figure>
                                                <img src={banner3} width="280" height="312" alt="banner" style={{ backgroundColor: "#26303c" }} />
                                            </figure>
                                            <div class="banner-price-info font-weight-bold text-white text-uppercase">
                                                20-22<sup>th</sup> April</div>
                                            <div class="banner-content text-center w-100">
                                                <h4 class="banner-subtitle d-inline-block bg-primary font-weight-semi-bold text-uppercase">
                                                    Ultimate Sale</h4>
                                                <h3 class="banner-title ls-m lh-1 text-uppercase text-white font-weight-bold">
                                                    Up
                                                    to 70%</h3>
                                                <p class="mb-4 font-primary text-white lh-1">Discount Selected Items</p>
                                            </div>
                                        </div>
                                        <div class="widget widget-products border-no" data-animation-options="{
                                        'delay': '.3s'
                                    }">
                                            <h4 class="widget-title font-weight-bold">Popular Products</h4>
                                            <div class="widget-body">
                                                <div class="owl-carousel owl-nav-top" data-owl-options="{
                                                'items': 1,
                                                'loop': false,
                                                'nav': true,
                                                'dots': false,
                                                'margin': 20
                                            }">
                                                    <div class="products-col">
                                                        <div class="product product-list-sm">
                                                            <figure class="product-media">
                                                                <a href="demo3-product.html">
                                                                    <img src="images/demos/demo3/products/10.jpg" alt="product" width="100" height="100" style={{ backgroundColor: "#f5f5f5" }} />
                                                                </a>
                                                            </figure>
                                                            <div class="product-details">
                                                                <h3 class="product-name">
                                                                    <a href="demo3-product.html">Hand Electric Cell</a>
                                                                </h3>
                                                                <div class="product-price">
                                                                    <span class="price">$26.00</span>
                                                                </div>
                                                                <div class="ratings-container">
                                                                    <div class="ratings-full">
                                                                        <span class="ratings" style={{ width: "100%" }}></span>
                                                                        <span class="tooltiptext tooltip-top"></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product product-list-sm">
                                                            <figure class="product-media">
                                                                <a href="demo3-product.html">
                                                                    <img src="images/demos/demo3/products/11.jpg" alt="product" width="100" height="100" style={{ backgroundColor: "#f5f5f5" }} />
                                                                </a>
                                                            </figure>
                                                            <div class="product-details">
                                                                <h3 class="product-name">
                                                                    <a href="demo3-product.html">Men's Fashion Hood</a>
                                                                </h3>
                                                                <div class="product-price">
                                                                    <span class="price">$39.00</span>
                                                                </div>
                                                                <div class="ratings-container">
                                                                    <div class="ratings-full">
                                                                        <span class="ratings" style={{ width: "100%" }}></span>
                                                                        <span class="tooltiptext tooltip-top"></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product product-list-sm">
                                                            <figure class="product-media">
                                                                <a href="demo3-product.html">
                                                                    <img src="images/demos/demo3/products/12.jpg" alt="product" width="100" height="100" style={{ backgroundColor: "#f5f5f5" }} />
                                                                </a>
                                                            </figure>
                                                            <div class="product-details">
                                                                <h3 class="product-name">
                                                                    <a href="demo3-product.html">Women's Fashion Jeans
                                                                        Clothing</a>
                                                                </h3>
                                                                <div class="product-price">
                                                                    <ins class="new-price">$199.00</ins><del class="old-price">$210.00</del>
                                                                </div>
                                                                <div class="ratings-container">
                                                                    <div class="ratings-full">
                                                                        <span class="ratings" style={{ width: "100%" }}></span>
                                                                        <span class="tooltiptext tooltip-top"></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="products-col">
                                                        <div class="product product-list-sm">
                                                            <figure class="product-media">
                                                                <a href="demo3-product.html">
                                                                    <img src="images/demos/demo3/products/10.jpg" alt="product" width="100" height="100" style={{ backgroundColor: "#f5f5f5" }} />
                                                                </a>
                                                            </figure>
                                                            <div class="product-details">
                                                                <h3 class="product-name">
                                                                    <a href="demo3-product.html">Fashion Hiking Hat</a>
                                                                </h3>
                                                                <div class="product-price">
                                                                    <span class="price">$39.00</span>
                                                                </div>
                                                                <div class="ratings-container">
                                                                    <div class="ratings-full">
                                                                        <span class="ratings" style={{ width: "100%" }}></span>
                                                                        <span class="tooltiptext tooltip-top"></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product product-list-sm">
                                                            <figure class="product-media">
                                                                <a href="demo3-product.html">
                                                                    <img src="images/demos/demo3/products/11.jpg" alt="product" width="100" height="100" style={{ backgroundColor: "#f5f5f5" }} />
                                                                </a>
                                                            </figure>
                                                            <div class="product-details">
                                                                <h3 class="product-name">
                                                                    <a href="demo3-product.html">Men's Fashion Hood</a>
                                                                </h3>
                                                                <div class="product-price">
                                                                    <span class="price">$19.00</span>
                                                                </div>
                                                                <div class="ratings-container">
                                                                    <div class="ratings-full">
                                                                        <span class="ratings" style={{ width: "100%" }}></span>
                                                                        <span class="tooltiptext tooltip-top"></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product product-list-sm">
                                                            <figure class="product-media">
                                                                <a href="demo3-product.html">
                                                                    <img src="images/demos/demo3/products/12.jpg" alt="product" width="100" height="100" style={{ backgroundColor: "#f5f5f5" }} />
                                                                </a>
                                                            </figure>
                                                            <div class="product-details">
                                                                <h3 class="product-name">
                                                                    <a href="demo3-product.html">Women's Fashion Jeans
                                                                        Clothing</a>
                                                                </h3>
                                                                <div class="product-price">
                                                                    <ins class="new-price">$199.00</ins><del class="old-price">$210.00</del>
                                                                </div>
                                                                <div class="ratings-container">
                                                                    <div class="ratings-full">
                                                                        <span class="ratings" style={{ width: "100%" }}
                                                                        ></span>
                                                                        <span class="tooltiptext tooltip-top"></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="widget widget-blog border-no" data-animation-options="{
                                        'delay': '.3s'
                                    }">
                                            <h4 class="widget-title text-capitalize font-weight-bold">Latest Blog</h4>
                                            <div class="widget-body">
                                                <div class="owl-carousel owl-nav-top" data-owl-options="{
                                                'items': 1,
                                                'loop': false,
                                                'nav': true,
                                                'dots': false,
                                                'margin': 20
                                            }">
                                                    <div class="post overlay-dark overlay-zoom">
                                                        <figure class="post-media">
                                                            <a href="post-single.html">
                                                                <img src="images/demos/demo3/blog/1.jpg" width="280" height="195" alt="post" style={{ backgroundColor: "#f5f5f5" }} />
                                                            </a>
                                                        </figure>
                                                        <div class="post-details">
                                                            <div class="post-meta">
                                                                by <a href="#" class="post-author">John Doe</a>
                                                                on <a href="#" class="post-date">Nov 22, 2018</a>
                                                            </div>
                                                            <h3 class="post-title"><a href="post-single.html">Explore
                                                                Fashion Trending For
                                                                Women</a></h3>
                                                            <a href="post-single.html" class="btn btn-primary btn-link btn-underline btn-sm">Read
                                                                More<i class="d-icon-arrow-right"></i></a>
                                                        </div>
                                                    </div>
                                                    <div class="post overlay-dark overlay-zoom">
                                                        <figure class="post-media">
                                                            <a href="post-single.html">
                                                                <img src="images/demos/demo3/blog/2.jpg" width="280" height="195" alt="post" style={{ backgroundColor: "#f5f5f5" }} />
                                                            </a>
                                                        </figure>
                                                        <div class="post-details">
                                                            <div class="post-meta">
                                                                by <a href="#" class="post-author">John Doe</a>
                                                                on <a href="#" class="post-date">Nov 22, 2018</a>
                                                            </div>
                                                            <h3 class="post-title"><a href="post-single.html">Just a cool
                                                                blog post with Images</a></h3>
                                                            <a href="post-single.html" class="btn btn-link btn-underline btn-primary btn-sm">Read
                                                                More<i class="d-icon-arrow-right"></i></a>
                                                        </div>
                                                    </div>
                                                    <div class="post overlay-dark overlay-zoom">
                                                        <figure class="post-media">
                                                            <a href="post-single.html">
                                                                <img src="images/demos/demo3/blog/3.jpg" width="280" height="195" alt="post" style={{ backgroundColor: "#f5f5f5" }} />
                                                            </a>
                                                        </figure>
                                                        <div class="post-details">
                                                            <div class="post-meta">
                                                                by <a href="#" class="post-author">John Doe</a>
                                                                on <a href="#" class="post-date">Nov 22, 2018</a>
                                                            </div>
                                                            <h3 class="post-title"><a href="post-single.html">Just a cool
                                                                blog post with Images</a></h3>
                                                            <a href="post-single.html" class="btn btn-link btn-underline btn-primary btn-sm">Read
                                                                More<i class="d-icon-arrow-right"></i></a>
                                                        </div>
                                                    </div>
                                                    <div class="post overlay-dark overlay-zoom">
                                                        <figure class="post-media">
                                                            <a href="post-single.html">
                                                                <img src="images/demos/demo3/blog/4.jpg" width="280" height="195" alt="post" style={{ backgroundColor: "#f5f5f5" }} />
                                                            </a>
                                                        </figure>
                                                        <div class="post-details">
                                                            <div class="post-meta">
                                                                by <a href="#" class="post-author">John Doe</a>
                                                                on <a href="#" class="post-date">Nov 22, 2018</a>
                                                            </div>
                                                            <h3 class="post-title"><a href="post-single.html">Just a cool
                                                                blog post with Images</a></h3>
                                                            <a href="post-single.html" class="btn btn-link btn-underline btn-primary btn-sm">Read
                                                                More<i class="d-icon-arrow-right"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="widget widget-testimonial border-no" data-animation-options="{
                                        'delay': '.3s'
                                    }">
                                            <h4 class="widget-title text-capitalize font-weight-bold">Testimonials</h4>
                                            <div class="widget-body">
                                                <div class="owl-carousel owl-nav-top" data-owl-options="{
                                                'items': 1,
                                                'loop': false,
                                                'nav': true,
                                                'dots': false,
                                                'margin': 20
                                            }">
                                                    <div class="testimonial">
                                                        <blockquote class="comment">I am keeping my fingers on the pulse by
                                                            Riode every year! It gives me good sense of trend. My family
                                                            likes it, too.</blockquote>
                                                        <div class="testimonial-info">
                                                            <figure class="testimonial-author-thumbnail">
                                                                <img src="images/demos/demo3/agent.png" alt="user" width="40" height="40" />
                                                            </figure>
                                                            <cite class="font-weight-semi-bold text-capitalize">
                                                                Casper Dalin
                                                                <span>Investor</span>
                                                            </cite>
                                                        </div>
                                                    </div>
                                                    <div class="testimonial">
                                                        <blockquote class="comment">I am keeping my fingers on the pulse by
                                                            Riode every year! It gives me good sense of trend. My family
                                                            likes it, too.</blockquote>
                                                        <div class="testimonial-info">
                                                            <figure class="testimonial-author-thumbnail">
                                                                <img src="images/demos/demo3/agent.png" alt="user" width="40" height="40" />
                                                            </figure>
                                                            <cite>
                                                                Casper Dalin
                                                                <span>Investor</span>
                                                            </cite>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                            <div class="col-xl-9 col-lg-8">
                                <section class="intro-section mb-6">
                                    <div class="owl-carousel owl-theme row owl-dot-inner owl-dot-white intro-slider animation-slider cols-1 mb-4" data-owl-options="{
                                    'items': 1,
                                    'dots': true,
                                    'nav': false,
                                    'loop': true,
                                    'autoplay': false
                                }">
                                        <Carousel >
                                            <div>
                                                <div className="banner banner-fixed intro-slide1">
                                                    <img src={slider1} alt="intro-banner" width="880" height="474" style={{ backgroundColor: "#ffc74e" }} />
                                                    <div className="banner-content">
                                                        <h4 className="banner-subtitle text-white font-weight-semi-bold lh-1 ls-normal slide-animate" data-animation-options="{'name': 'fadeInDownShorter', 'duration': '1s', 'delay': '.8s'}" style={{ visibility: "visible", opacity: 1 }}>New Arrivals!</h4>
                                                        <h2 className="banner-title mb-7 text-uppercase ls-l lh-1 slide-animate" data-animation-options="{'name': 'fadeInDownShorter', 'duration': '1s', 'delay': '.8s'}" style={{ visibility: "visible", opacity: 1 }}>T-shirt From <span className="text-white">$19.99</span></h2>
                                                        <a href="demo3-shop.html" className="btn btn-white btn-rounded slide-animate" data-animation-options="{'name': 'fadeInDownShorter', 'duration': '1s', 'delay': '.8s'}" style={{ visibility: "visible", opacity: 1 }}>Shop Now</a>
                                                        <div className="slide-animate" data-animation-options="{'name': 'fadeInRightShorter', 'duration': '.8s'}">
                                                            <h2 className="banner-text text-white text-uppercase">men</h2>
                                                        </div>
                                                        <figure className="intro1-image slide-animate" data-animation-options="{'name': 'fadeInLeftShorter', 'duration': '.8s'}"
                                                            style={{ visibility: "visible", opacity: 1 }}>
                                                            <img src={singer} alt="Men" width="511" height="478" />
                                                        </figure>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="banner banner-fixed intro-slide2">
                                                    <img src={slider2} alt="intro-banner" width="880" height="474" style={{ backgroundColor: "#fbfcfc" }} />
                                                    <div className="banner-content y-50 text-right">
                                                        <h4 className="banner-subtitle text-body font-weight-semi-bold mb-3 slide-animate" data-animation-options="{'name': 'fadeInDownShorter', 'duration': '1s'}" style={{ visibility: "visible", opacity: 1 }}>Up To <strong className="text-primary">25% Off</strong></h4>
                                                        <h2 className="banner-title text-uppercase ls-l slide-animate" data-animation-options="{'name': 'fadeInDownShorter', 'delay': '.3s', 'duration': '1s'}" style={{ visibility: "visible", opacity: 1 }}>For Women’s</h2>
                                                        <p className="font-weight-semi-bold ls-m text-body mb-6 slide-animate" data-animation-options="{'name': 'fadeInDownShorter', 'delay': '.4s', 'duration': '1s'}" style={{ visibility: "visible", opacity: 1 }}>Start at $12.00</p>
                                                        <a href="demo3-shop.html" className="btn btn-dark btn-rounded slide-animate" data-animation-options="{'name': 'fadeInDownShorter', 'delay': '.5s', 'duration': '1s'}" style={{ visibility: "visible", opacity: 1 }}>Shop Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="banner banner-fixed intro-slide3">
                                                    <img src={slider3} alt="intro-banner" width="880" height="474" style={{ backgroundColor: "#d3d4d5" }} />
                                                    <div className="banner-content y-50 pb-3" style={{ visibility: "visible", opacity: 1 }}>
                                                        <div className="slide-animate" data-animation-options="{'name': 'fadeInUpShorter', 'duration': '1s'}">
                                                            <h4 className="banner-subtitle font-weight-normal ls-m mb-1" style={{ visibility: "visible", opacity: 1 }}>Deals and Promotions</h4>
                                                            <h2 className="banner-title text-uppercase mb-3 ls-l" style={{ visibility: "visible", opacity: 1 }}>Season Clothing</h2>
                                                            <h4 className="banner-price-info text-uppercase ls-l" style={{ visibility: "visible", opacity: 1 }}>Start at <strong className="text-primary" style={{ visibility: "visible", opacity: 1 }}>$29.00</strong></h4>
                                                            <p className="text-dark lh-1 ls-m mb-4" style={{ visibility: "visible", opacity: 1 }}>* Get Plus Discount Buying Package</p>
                                                            <a href="demo3-shop.html" className="btn btn-white btn-rounded" style={{ visibility: "visible", opacity: 1 }}>Shop Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Carousel>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 mb-4">
                                            <div class="category category-absolute category-badge">
                                                <a href="#">
                                                    <figure class="category-media">
                                                        <img src={banner1} alt="category" width="430" height="189" style={{ backgroundColor: "#eceef2" }} />
                                                    </figure>
                                                </a>
                                                <div class="category-content">
                                                    <h4 class="category-name font-weight-bold text-uppercase">Accessories
                                                    </h4>
                                                    <a href="demo3-shop.html" class="btn btn-primary">Shop Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-4">
                                            <div class="category category-absolute category-badge">
                                                <a href="#">
                                                    <figure class="category-media">
                                                        <img src={banner2} alt="category" width="430" height="189" style={{ backgroundColor: "#929ca3" }} />
                                                    </figure>
                                                </a>
                                                <div class="category-content">
                                                    <h4 class="category-name font-weight-bold text-uppercase">watches</h4>
                                                    <a href="demo3-shop.html" class="btn btn-primary">Shop Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section class="product-wrapper mb-8">
                                    <h2 class="title title-line title-underline with-link appear-animate" data-animation-options="{
                                    'delay': '.3s'
                                }" style={{ visibility: "visible", opacity: 1 }}>Featured Product
                                        <a href="#" class="font-weight-semi-bold">View more<i class="d-icon-arrow-right"></i></a></h2>
                                    <div class="row gutter-xs appear-animate" data-animation-options="{
                                    'delay': '.3s'
                                }" style={{ visibility: "visible", opacity: 1 }}>
                                        {
                                            product.map((items, index) => (
                                                <div class="col-md-3 col-6 mb-4" key={index} onClick={() => handleClickDetail(items.id)}>
                                                    <div class="product text-center">
                                                        <figure class="product-media">
                                                            <a style={{ cursor: "pointer" }}>
                                                                <img src={`https://localhost:7285/Images/${items.image[0]}`} alt="product" width="280" height="315" style={{ backgroundColor: "#f5f5f5" }} />
                                                            </a>
                                                            <div class="product-label-group">
                                                                <label class="product-label label-new">new</label>
                                                            </div>
                                                            <div class="product-action-vertical">
                                                                <a href="#" class="btn-product-icon btn-cart" data-toggle="modal" data-target="#addCartModal" title="Add to cart"><i class="d-icon-bag"></i></a>
                                                                <a href="#" class="btn-product-icon btn-wishlist" title="Add to wishlist"><i class="d-icon-heart"></i></a>
                                                            </div>
                                                            <div class="product-action">
                                                                <a href="#" class="btn-product btn-quickview" title="Quick View" >Chi tiết</a>
                                                            </div>
                                                        </figure>
                                                        <div class="product-details">
                                                            {/* <div class="product-cat"><a href="demo3-shop.html">Women’s</a>
                                                            </div> */}
                                                            <h3 class="product-name">
                                                                <a href="demo3-product.html">{items.name}</a>
                                                            </h3>
                                                            <div class="product-price">
                                                                <span class="price">{items.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                                                            </div>
                                                            <div class="ratings-container">
                                                                <div class="ratings-full">
                                                                    <span class="ratings" style={{ width: "60%" }}></span>
                                                                    <span class="tooltiptext tooltip-top"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }

                                    </div>
                                </section>
                                <section class="banner banner-cta mb-7 text-center" style={{ backgroundImage: "url('images/demos/demo3/banner.jpg')", backgroundColor: "#c5d1d2" }}>
                                    <div class="banner-content w-100 appear-animate" data-animation-options="{
                                    'delay': '.2s',
                                    'name': 'blurIn'
                                }">
                                        <h4 class="banner-subtitle font-weight-bold ls-s text-white text-uppercase">Coming
                                            soon</h4>
                                        <h2 class="banner-title font-weight-normal ls-m"><strong>Black Friday</strong>
                                            Sale</h2>
                                        <p class="font-primary text-dark ls-normal text-capitalize lh-1">Get 10% off first
                                            order</p>
                                        <form action="#" method="get" class="input-wrapper input-wrapper-inline">
                                            <input type="email" class="form-control mb-4" name="email" id="email" placeholder="Email address here..." required />
                                            <button class="btn btn-secondary btn-sm" type="submit">Subscribe<i class="d-icon-arrow-right"></i></button>
                                        </form>
                                    </div>
                                </section>
                                <section class="mb-3">
                                    <div class="row">
                                        <div class="col-md-4 col-sm-6 mb-4">
                                            <div class="widget widget-products appear-animate" data-animation-options="{
                                            'name': 'fadeInLeftShorter',
                                            'delay': '.5s'
                                        }">
                                                <h4 class="widget-title font-weight-bold">Sale Products</h4>
                                                <div class="products-col">
                                                    <div class="product product-list-sm">
                                                        <figure class="product-media">
                                                            <a href="demo3-product.html">
                                                                <img src="images/demos/demo3/products/9.jpg" alt="product" width="100" height="100" style={{ backgroundColor: "#f5f5f5" }} />
                                                            </a>
                                                        </figure>
                                                        <div class="product-details">
                                                            <h3 class="product-name">
                                                                <a href="demo3-product.html">Women’s Beautiful
                                                                    Headgear</a>
                                                            </h3>
                                                            <div class="product-price">
                                                                <span class="price">$78.24</span>
                                                            </div>
                                                            <div class="ratings-container">
                                                                <div class="ratings-full">
                                                                    <span class="ratings" style={{ width: "40%" }}></span>
                                                                    <span class="tooltiptext tooltip-top"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="product product-list-sm">
                                                        <figure class="product-media">
                                                            <a href="demo3-product.html">
                                                                <img src="images/demos/demo3/products/10.jpg" alt="product" width="100" height="100" style={{ backgroundColor: "#f5f5f5" }} />
                                                            </a>
                                                        </figure>
                                                        <div class="product-details">
                                                            <h3 class="product-name">
                                                                <a href="demo3-product.html">Hand Electric Cell</a>
                                                            </h3>
                                                            <div class="product-price">
                                                                <span class="price">$26.00</span>
                                                            </div>
                                                            <div class="ratings-container">
                                                                <div class="ratings-full">
                                                                    <span class="ratings" style={{ width: "100%" }}></span>
                                                                    <span class="tooltiptext tooltip-top"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="product product-list-sm">
                                                        <figure class="product-media">
                                                            <a href="demo3-product.html">
                                                                <img src="images/demos/demo3/products/11.jpg" alt="product" width="100" height="100" style={{ backgroundolor: "#f5f5f5" }} />
                                                            </a>
                                                        </figure>
                                                        <div class="product-details">
                                                            <h3 class="product-name">
                                                                <a href="demo3-product.html">Women Hempen Hood
                                                                    a Mourner</a>
                                                            </h3>
                                                            <div class="product-price">
                                                                <span class="price">$30.00</span>
                                                            </div>
                                                            <div class="ratings-container">
                                                                <div class="ratings-full">
                                                                    <span class="ratings" style={{ width: "20%" }}></span>
                                                                    <span class="tooltiptext tooltip-top"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-sm-6 mb-4 ">
                                            <div class="widget widget-products appear-animate" data-animation-options="{
                                            'name': 'fadeIn',
                                            'delay': '.3s'
                                        }">
                                                <h4 class="widget-title font-weight-bold">Latest Products</h4>
                                                <div class="products-col">
                                                    <div class="product product-list-sm">
                                                        <figure class="product-media">
                                                            <a href="demo3-product.html">
                                                                <img src="images/demos/demo3/products/12.jpg" alt="product" width="100" height="100" style={{ backgroundColor: "#f5f5f5" }} />
                                                            </a>
                                                        </figure>
                                                        <div class="product-details">
                                                            <h3 class="product-name">
                                                                <a href="demo3-product.html">Fashionable Orginal
                                                                    Trucker</a>
                                                            </h3>
                                                            <div class="product-price">
                                                                <span class="price">$78.64</span>
                                                            </div>
                                                            <div class="ratings-container">
                                                                <div class="ratings-full">
                                                                    <span class="ratings" style={{ width: "40%" }}></span>
                                                                    <span class="tooltiptext tooltip-top"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="product product-list-sm">
                                                        <figure class="product-media">
                                                            <a href="demo3-product.html">
                                                                <img src="images/demos/demo3/products/13.jpg" alt="product" width="100" height="100" style={{ backgroundColor: "#f5f5f5" }} />
                                                            </a>
                                                        </figure>
                                                        <div class="product-details">
                                                            <h3 class="product-name">
                                                                <a href="demo3-product.html">Men Summer Sneaker</a>
                                                            </h3>
                                                            <div class="product-price">
                                                                <span class="price">$79.45</span>
                                                            </div>
                                                            <div class="ratings-container">
                                                                <div class="ratings-full">
                                                                    <span class="ratings" style={{ width: "60%" }}></span>
                                                                    <span class="tooltiptext tooltip-top"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="product product-list-sm">
                                                        <figure class="product-media">
                                                            <a href="demo3-product.html">
                                                                <img src="images/demos/demo3/products/14.jpg" alt="product" width="100" height="100" style={{ backgroundColor: "#f5f5f5" }} />
                                                            </a>
                                                        </figure>
                                                        <div class="product-details">
                                                            <h3 class="product-name">
                                                                <a href="demo3-product.html">Season Sports Cap</a>
                                                            </h3>
                                                            <div class="product-price">
                                                                <span class="price">$64.27</span>
                                                            </div>
                                                            <div class="ratings-container">
                                                                <div class="ratings-full">
                                                                    <span class="ratings" style={{ width: "20%" }}></span>
                                                                    <span class="tooltiptext tooltip-top"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-sm-6 mb-4">
                                            <div class="widget widget-products appear-animate" data-animation-options="{
                                            'name': 'fadeInRightShorter',
                                            'delay': '.5s'
                                        }">
                                                <h4 class="widget-title font-weight-bold">Best of the Week</h4>
                                                <div class="products-col">
                                                    <div class="product product-list-sm">
                                                        <figure class="product-media">
                                                            <a href="demo3-product.html">
                                                                <img src="images/demos/demo3/products/15.jpg" alt="product" width="100" height="100" style={{ backgroundColor: "#f5f5f5" }} />
                                                            </a>
                                                        </figure>
                                                        <div class="product-details">
                                                            <h3 class="product-name">
                                                                <a href="demo3-product.html">Blue Sports Shoes</a>
                                                            </h3>
                                                            <div class="product-price">
                                                                <span class="price">$36.00</span>
                                                            </div>
                                                            <div class="ratings-container">
                                                                <div class="ratings-full">
                                                                    <span class="ratings" style={{ width: "20%" }}></span>
                                                                    <span class="tooltiptext tooltip-top"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="product product-list-sm">
                                                        <figure class="product-media">
                                                            <a href="demo3-product.html">
                                                                <img src="images/demos/demo3/products/16.jpg" alt="product" width="100" height="100" style={{ backgroundColor: "#f5f5f5" }} />
                                                            </a>
                                                        </figure>
                                                        <div class="product-details">
                                                            <h3 class="product-name">
                                                                <a href="demo3-product.html">Fashion Handbag</a>
                                                            </h3>
                                                            <div class="product-price">
                                                                <ins class="new-price">$53.99</ins><del class="old-price">$67.99</del>
                                                            </div>
                                                            <div class="ratings-container">
                                                                <div class="ratings-full">
                                                                    <span class="ratings" style={{ width: "100%" }}></span>
                                                                    <span class="tooltiptext tooltip-top"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="product product-list-sm">
                                                        <figure class="product-media">
                                                            <a href="demo3-product.html">
                                                                <img src="images/demos/demo3/products/17.jpg" alt="product" width="100" height="100" style={{ backgroundColor: "#f5f5f5" }} />
                                                            </a>
                                                        </figure>
                                                        <div class="product-details">
                                                            <h3 class="product-name">
                                                                <a href="demo3-product.html">Women’s Beautiful
                                                                    Headgear</a>
                                                            </h3>
                                                            <div class="product-price">
                                                                <span class="price">$82.23</span>
                                                            </div>
                                                            <div class="ratings-container">
                                                                <div class="ratings-full">
                                                                    <span class="ratings" style={{ width: "600%" }}></span>
                                                                    <span class="tooltiptext tooltip-top"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section class="mb-10 pb-6">
                                    <h2 class="title title-line title-underline">Featured Brands</h2>
                                    <div class="container">
                                        <div class="owl-carousel owl-theme row brand-carousel cols-xl-6 cols-lg-5 cols-md-4 cols-sm-3 cols-2" data-owl-options="{
                                        'nav': false,
                                        'dots': false,
                                        'autoplay': true,
                                        'margin': 20,
                                        'loop': true,
                                        'responsive': {
                                            '0': {
                                                'items': 2
                                            },
                                            '576': {
                                                'items': 3
                                            },
                                            '768': {
                                                'items': 4
                                            },
                                            '992': {
                                                'items': 5
                                            }
                                        }
                                    }">
                                            <figure><img src="images/brands/1.png" alt="brand" width="180" height="100" />
                                            </figure>
                                            <figure><img src="images/brands/2.png" alt="brand" width="180" height="100" />
                                            </figure>
                                            <figure><img src="images/brands/3.png" alt="brand" width="180" height="100" />
                                            </figure>
                                            <figure><img src="images/brands/4.png" alt="brand" width="180" height="100" />
                                            </figure>
                                            <figure><img src="images/brands/5.png" alt="brand" width="180" height="100" />
                                            </figure>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default HomePage