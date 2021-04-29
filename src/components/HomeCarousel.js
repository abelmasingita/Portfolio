import React,{useState, useEffect} from "react";
import { Carousel } from 'react-bootstrap';
import sanityClient from '../client'

const HomeCarousel = () => {

    const [index,setIndex] = useState(0)
    const [skilldata, setSkill] = useState(null)

    useEffect(()=>{

        sanityClient
        .fetch(`*[_type == "skills"]{

            name,
            description,
            "skillImage" : image.asset->url
        }`)
        .then((data)=> setSkill(data))
        .catch(console.error)

    },[])

    const handleselect = (selectedindex,e)=>{
            setIndex(selectedindex)
    }

    return (
        <Carousel activeIndex={index} onSelect={handleselect}>
            {skilldata && skilldata.map((slide,i)=>{
                    return(
                        <Carousel.Item>
                            <img  src={slide.skillImage} alt="slider image" className="d-block w-100"/>
                            <Carousel.Caption>
                            <h3>{slide.name}</h3>
                            <p>{slide.description}</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>
    )
}

export default HomeCarousel
