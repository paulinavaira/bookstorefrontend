import React from 'react'
import { NavLink } from 'react-router-dom'
import image from '../assets/Captura (1).png'
import image2 from '../assets/navidad (1).png'

const Home = () => {
    return(
        <main style={{ display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
            <div id="hero" class="d-flex align-items-center" style={{ minHeight: "80vh",backgroundColor:"#B7D9EA"}}>
                <div class="container">
                    <div class="row align-items-center" >
                        <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1">
                            <h1>Welcome to JediBook</h1>
                            <h3>We are team of talanted designers making websites with Bootstrap</h3>
                            <NavLink to={`/catalogue`}><button href="#about" class="btn btn-outline-info">Get Started</button></NavLink>
                        </div>
                        <div class="col-lg-6 order-1 order-lg-2 hero-img">
                            <img src={`${image}`} class="img-fluid animated" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div id="hero" class="d-flex align-items-center" style={{ minHeight: "70vh"}}>
                <div class="container">
                    <div class="row align-items-center" >
                        <div class="col-lg-6 order-1 order-lg-2 hero-img">
                            <img src={`${image2}`} class="img-fluid animated" alt=""/>
                        </div>
                        <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1">
                            <h1>Regala un libro</h1>
                            <h3>We are team of talanted designers making websites with Bootstrap</h3>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home
