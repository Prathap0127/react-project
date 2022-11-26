import React from 'react'
import PageSlider from './PageSlider'
import aboutImg from './images/about/about.jpg'
import NavBar from './NavBar'

function Home() {
  return <>
    <NavBar/>
  <PageSlider/>
  <section id="about">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2>About Jewel Shop </h2>
                    <p>Online jewel shop is about an online jewels sales platform. Here we can purchase the product from
                        multiple shops by comparing the price, making charges and design etc. here the users can have
                        more advantage of comparing the same product with multiple shop and much more.</p>
                    <p>Here we can compare the product with multiple shop price and other additional offers.
                        shop from home and get the exiting offers with quality products
                    </p>
                </div>
                <div className="col-md-6 text-center">
                    <img className="shadow rounded img-fluid" src={aboutImg} alt=""/>

                </div>
            </div>
        </div>
    </section>
  </>
}

export default Home