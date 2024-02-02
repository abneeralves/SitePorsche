import Image from 'next/image'
import LogoPorsche from '../../public/PorscheLogo.png'
import Porsche from '../../public/911.jpg'
import vectorP from '../../public/vectorPorsche.png'


export default function () {
    return (
        <>
            <header className='relative'>
                <div className='relative bg-white'>
                    <Image className='object-cover w-full h-full -z-10 rounded-b-lg' src={Porsche} alt='' />
                </div>

                <nav className='absolute top-0 left-0 flex items-center h-20 w-full z-10'>
                    {/* <div>
                        <h1 className='text-black ml-10 m-5 z-10'>Menu</h1>
                    </div> */}

                    <div className='mx-auto'>
                        <a href="https://www.porsche.com/brazil/pt/"><Image className='-z-10' src={LogoPorsche} alt='' width={200}/></a>  
                    </div>   
                </nav>

                <div className='absolute flex items-center h-20 w-full z-10'>
                        <div className='mx-auto'>
                            <a href="#meio"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="animate-bounce text-white mb-60 w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                            </svg></a>
                        </div>
                    </div>
            </header>

        </>
            
    )
}