import React from 'react'
import image from  '../monstera-leaf.jpg'

const Home = () => {
    return (
            <main>
                    <img  src={image} alt="monstera-leaf" className="absolute object-cover w-full h-full"/>
                    <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
                        <h1 className='text-sm text-red-100 font-bold cursive leading-none lg:leading-snug sm:home-name home-mobile'>
                            Ahee. I'm abel masingita.
                        </h1>
                        
                    </section>
                 
            </main>
    )
}

export default Home
