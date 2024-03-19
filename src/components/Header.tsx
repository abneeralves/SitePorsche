'use client'
import Image from 'next/image'
import LogoPorsche from '../../public/PorscheLogo.png'
import vectorP from '../../public/vectorPorsche.png'
import { Open_Sans } from 'next/font/google'
import React, { useState } from 'react'

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    return (
        <>
            <header className='relative'>
                <div className='relative bg-white'>

                    <video className='object-cover w-full h-full -z-10 rounded-b-lg' width="320" height="240" autoPlay loop muted>
                        <source src={'GT3rsVideo.mp4'} type="video/mp4" />
                        Seu navegador não suporta a tag de vídeo.
                    </video>
                </div>

                <div className={`absolute top-0 left-0 flex items-center h-20 w-full z-10 ${isMenuOpen ? 'flex' : 'hidden'}`}>
                    <div className='flex bg-white bg-opacity-90 h-[40rem] w-80 md:w-5/12 xl:w-6/12 rounded-lg lg:h-[60rem] 2xl:h-[90rem]'>

                        <div className='w-1/2'>
                        <a href="">
                        <div className='absolute top-16 left-5 flex items-center text-black rounded-md p-2 bg-zinc-200 lg:left-14 lg:text-xl lg:mt-10'>
                            <h1>Modelos</h1>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-40 lg:ml-48 w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                        </a>
                        
                        <a href="">
                        <div className='absolute top-28 left-5 flex items-center text-black rounded-md p-2 hover:bg-zinc-200 lg:left-14 lg:text-xl lg:my-10'>
                            <h1>Aconselhamento e Compra</h1>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-5 lg:ml-4 w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                        </a>
                        
                        
                        <div className='absolute top-40 left-5 flex items-center text-black rounded-md p-2 hover:bg-zinc-200 lg:left-14 lg:text-xl lg:my-10'>
                            <h1>Experiencias</h1>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-32 lg:ml-[155px] w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>

                        <div className='absolute top-52 left-5 flex items-center text-black rounded-md p-2 hover:bg-zinc-200 lg:left-14 lg:text-xl lg:my-10'>
                            <h1>Serviços</h1>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-40 lg:ml-48 w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>


                        <div className='absolute top-64 left-5 flex items-center text-black rounded-md p-2 hover:bg-zinc-200 lg:left-14 lg:text-xl lg:my-10'>
                            <h1>Porsche Center</h1>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-28 lg:ml-32 w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>

                        </div>
                        


                        <div className='hidden 2xl:flex bg-zinc-300 w-1/2 rounded-xl '>
                            <h1>abner</h1>
                        </div>
                    </div>
                </div>

                <nav className='absolute top-0 left-0 flex items-center h-20 w-full z-10'>
                    <div className='absolute flex cursor-pointer lg:ml-10 2xl:ml-32' onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-10 w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <h1 className='text-black ml-2 z-10'>Menu</h1>
                    </div>

                    <div className={`mx-auto hidden ${isMenuOpen ? 'hidden' : 'flex md:flex'}`}>
                        <a href="https://www.porsche.com/brazil/pt/"><Image className='-z-10 invert' src={LogoPorsche} alt='Logo Porsche' width={200}/></a>  
                    </div>

                    <div className={`mx-auto md:hidden ${isMenuOpen ? 'hidden' : 'flex'}`}>
                        <a href="https://www.porsche.com/brazil/pt/"><Image className='-z-10 -mt-9 sm:mt-2 sm:w-[40px]' src={vectorP} alt='Logo Porsche' width={30}/></a>  
                    </div>     
                </nav>

                <div className='absolute flex items-center h-20 w-full z-10'>
                    <div className={`mb-96 -mt-32  ${isMenuOpen ? 'hidden' : 'flex'}`}>
                        <p className='text-white text-3xl ml-11 mt-64 2xl:mb-96 2xl:text-9xl 2xl:ml-44 xl:text-8xl xl:mb-60 xl:ml-20 lg:text-7xl lg:mb-0 lg:ml-20 md:text-6xl md:mt-0 sm:text-5xl sm:mb-0 sm:ml-11 sm:mt-11' >Keep your 
                        <br />essense.</p> 
                    </div>
                    <div className='2xl:-ml-44 2xl:-mt-10 xl:mt-10 xl:-ml-7 lg:ml-20 md:mt-56 md:ml-32 sm:mt-56 sm:ml-48'>
                        <a href="https://www.porsche.com/brazil/pt/"><p className='sm:flex items-center justify-center sm:border-2 hidden xl:w-64 text-white text-xl p-2 sm:-ml-[26rem] sm:-mt-72 rounded font-medium hover:backdrop-blur-xl transition duration-100 md:w-72 sm:w-60'>Site oficial da Porsche.</p></a>
                    </div>
                    
                </div>

                <div className='md:absolute md:items-center h-20 w-full z-10 hidden md:flex'>
                    <div className='mx-auto'>
                        <div className='hover:bg-zinc-950 hover:opacity-70 transition duration-300 p-3 h-14 mb-72 rounded-lg pt-3 '>
                        <a href="#meio" className=''><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="animate-bounce text-white mb-72 w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                        </svg>
                        </a>
                        </div>
                    </div>
                </div>
            </header>


        </>
            
    )
} 

export default Home