import Image from 'next/image'
import LogoPorsche from '../../public/PorscheLogo.png'
import Porsche from '../../public/911.jpg'
import vectorP from '../../public/vectorPorsche.png'



export default function () {
    return (
        <>
            <header className='relative'>
                <div className='relative bg-white'>
                    <Image className='object-cover w-full h-full -z-10 rounded-b-lg' src={Porsche} alt='Imagem Principal' />
                </div>

                <nav className='absolute top-0 left-0 flex items-center h-20 w-full z-10'>
                    {/* <div className='absolute'>
                        <h1 className='text-black ml-10 m-5 z-10'>Menu</h1>
                    </div> */}

                    <div className='mx-auto'>
                        <a href="https://www.porsche.com/brazil/pt/"><Image className='-z-10' src={LogoPorsche} alt='Logo Porsche' width={200}/></a>  
                    </div>   
                </nav>

                <div className='absolute flex items-center h-20 w-full z-10'>
                    <div className='mb-96 ml-48'>
                        <p className='text-white mb-96 text-9xl'>Keep your 
                        <br />essense.</p> 
                    </div>
                    <div className='-ml-44 -mt-10'>
                        <a href="https://www.porsche.com/brazil/pt/"><p className='flex items-center justify-center border-2 w-64 text-xl p-2 -ml-96 mb-96 rounded font-medium hover:backdrop-blur transition duration-100'>Site oficial da Porsche.</p></a>
                    </div>
                    
                </div>

                <div className='absolute flex items-center h-20 w-full z-10'>
                    <div className='mx-auto'>
                        <div className='hover:bg-zinc-950 hover:opacity-70 transition duration-300 p-3 h-14 mb-72 rounded-lg pt-3'>
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