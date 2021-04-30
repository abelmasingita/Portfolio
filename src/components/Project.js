import React,{useState, useEffect} from 'react'
import sanityClient from '../client'

const Project = () => {

    const [projectData,setProject] = useState(null)

    useEffect(()=>{

        sanityClient
        .fetch(`*[_type == "project"]{

            title,
            date,
            place,
            description,
            projectType,
            link,
            tags,
        }`)
        .then((data)=> setProject(data))
        .catch(console.error)

    },[])

    return (
        <main className='bg-gray-100 min-h-screen p-10'>
            <section className='container mx-auto'>
                <h1 className='text-gray-800 text-5xl flex justify-center cursive'>My projects</h1>
                <h2 className='text-lg text-gray-600 flex justify-center mb-12'>Welcome to my projects</h2>
                <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    
                    {projectData && projectData.map((project,index) => (

                        <article className='relative rounded-lg shadow-xl bg-white p-4'>
                        <h3 className='text-gray-800 text-3xl font-bold mb-2'>
                                <a
                                    href={project.link}
                                    alt={project.title}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >{project.title}</a>
                        </h3>
                        <div className='text-gray-500 text-xs'>
                            <span>
                                <strong className='font-bold'>Finished on</strong>:{" "}
                                {
                                    new Date(project.date).toLocaleDateString()
                                }
                            </span>
                            <span>
                                <strong className='font-bold'>Company</strong>:{" "}
                                {project.place}
                            </span>
                            <span>
                                <strong className='font-bold'>Type</strong>:{" "}
                                {project.projectType}
                            </span>
                            <p className='my-4 text-lg text-gray-700 leading-relaxed'>{project.description}</p>
                            <a   href={project.link}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className='text-red-500 font-bold hover:underline hover:text-red-400 text-xl'
                            >
                                Viw The Project {" "}
                                <span role="img" aria-label="right pointer">
                                        👉
                                </span>
                            </a>
                        </div>
                    </article>))
                    }
                </section>
            </section>
        </main>
    )
}

export default Project
