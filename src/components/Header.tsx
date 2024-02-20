import Image from 'next/image'
import LogoPorsche from '../../public/PorscheLogo.png'
import vectorP from '../../public/vectorPorsche.png'
import { Open_Sans } from 'next/font/google'

const OpenS = Open_Sans({subsets: ['latin']})

export default function () {
    return (
        <>
            <header className='relative'>
                <div className='relative bg-white'>

                    <video className='object-cover w-full h-full -z-10 rounded-b-lg' width="320" height="240" autoPlay loop muted>
                        <source src={'GT3rsVideo.mp4'} type="video/mp4" />
                        Seu navegador não suporta a tag de vídeo.
                    </video>
                </div>

                <nav className='absolute top-0 left-0 flex items-center h-20 w-full z-10'>
                    {/* <div className='absolute'>
                        <h1 className='text-black ml-10 m-5 z-10'>Menu</h1>
                    </div> */}

                    <div className='mx-auto'>
                        <a href="https://www.porsche.com/brazil/pt/"><Image className='-z-10 invert' src={LogoPorsche} alt='Logo Porsche' width={200}/></a>  
                    </div>   
                </nav>

                <div className='absolute flex items-center h-20 w-full z-10'>
                    <div className='mb-96 -mt-32'>
                        <p className={`text-white text-3xl ml-11 mt-64 2xl:mb-96 2xl:text-9xl 2xl:ml-44 xl:text-8xl xl:mb-60 xl:ml-20 lg:text-7xl lg:mb-0 lg:ml-20 md:text-6xl md:mt-0 sm:text-5xl sm:mb-0 sm:ml-11 sm:mt-11 ${OpenS.className}`}>Keep your 
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