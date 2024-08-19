import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/pinContainer'
import { FaLocationArrow } from 'react-icons/fa';

const Projects = () => {
    return (
        <div className='py-20 ' id='projects'>
            <h1 className='heading'>
                Small selection of {' '}<span className='text-purple'>recent projects</span>
            </h1>

            <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
                {projects.map(({ id, title, des, img, iconLists, link, showLink }) => (
                    <div key={id} className='sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[90vw]'>
                        <PinContainer
                            title={showLink}
                            href={link}
                        >
                            <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[30vh] sm:h-[40vh] mb-10 '>
                                <div className='w-full h-full relative overflow-hidden lg:rounded-3xl bg-[#13162D]'>
                                    <img src="/bg.png" alt="background" className='relative' />
                                </div>
                                <img
                                    src={img}
                                    alt={title}
                                    className="z-10 absolute bottom-0 left-0 right-0 w-full h-full rounded-t-3xl rounded-b-3xl shadow-lg  hover:scale-105 transition-transform duration-300 transform-gpu"
                                />
                            </div>
                            <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>{title}</h1>
                            <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                                {des}
                            </p>

                            <div className='flex items-center justify-between mb-3 mt-7'>
                                <div className='flex items-center'>
                                    {iconLists.map((icon,index)=>(
                                        <div key={icon} className='border border-white/[0.2]  rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                                        style={{ transform: `translateX(-${5 * index * 2}px)` }}
                                        >
                                            <img src={icon} alt={icon} className='p-2' />
                                        </div>
                                    ))}
                                </div>

                                <div className='flex justify-center items-center'>
                                    <p className='flex lg:text-xl md:text-xs text-sm text-purple'>Check Live Site</p>
                                    <FaLocationArrow className='ms-3' color='#CBACF9'/>
                                </div>
                            </div>

                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects