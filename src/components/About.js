import React,{useState, useEffect} from 'react'
import sanityClient from '../client'
//import image from  '../monstera-leaf.jpg'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import HomeCarousel from './HomeCarousel'

const builder = imageUrlBuilder(sanityClient);

function urlFor(source){
    return builder.image(source )
}

const About = () => {

    const [author, setAuthor] = useState(null)

    useEffect(()=>{

        sanityClient
        .fetch(`*[_type == "author"]{

            name,
            bio,
            "authorImage" : image.asset->url
        }`)
        .then((data)=> setAuthor(data[0]))
        .catch(console.error)

    },[])

    if(!author) return <div>Loading...</div>
    return (
            <main >        
                <h2 className='p-10 text-lg text-gray-600 flex justify-center'>Welcome to About me Section</h2>
                <div className='p-4 lg:pt-15 container relative'>
                    <section className='rounded-lg shadow-2xl lg:flex p-8'>
                        <div className="card">
                        <div className="row g-0">
                            <div className="col-md-4">
                            <img
                                src={urlFor(author.authorImage).url()} 
                                alt={author.name}
                                className="img-fluid"
                            />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Hey there. i'm{" "}{author.name}</h5>
                                    <BlockContent blocks={author.bio}  projectId="ajrhsyg8" dataset="production"/>
                                </div>
                            </div>
                        </div>
                        </div>
                    </section>
                </div>
                <h3 className='text-lg text-gray-600 flex justify-center mb-10'>Competitive Skills</h3>
                <div className='p-4 lg:pt-48 container mx-auto relative'>
                 <HomeCarousel />
                </div>                
            </main>
    )
}

export default About
