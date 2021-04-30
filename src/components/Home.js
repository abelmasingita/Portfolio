import React from 'react'
import image from  '../monstera-leaf.jpg'
import './Footer.css'

const Home = () => {
    return (
            <main>
                    <img  src={image} alt="monstera-leaf" className="absolute object-cover w-full h-full"/>
                    <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
                    <div className="banner-style lg:mt-80 ">
                        <h3 className="ban-text lg:font-bold lg:text-6xl lg:text-red-100">I'm <span>Abel Masingita</span></h3>
                        <div className="content">
                        <h2 className="ban-text">
                            <span className="logo-tag"></span>
                            <span id="tag-content" className="lg:font-bold lg:text-2xl lg:text-red-100"> Software Engineer</span>
                            <span className="text-cursor">!</span>
                            <span className="logo-tag"></span>
                        </h2>
                        </div>
                    </div>                   
                    </section>            
            </main>
    )
}

export default Home
