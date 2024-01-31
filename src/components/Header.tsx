import Image from 'next/image'
import LogoPorsche from '../../public/PorscheLogo.png'
import Porsche from '../../public/911.jpg'


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
                        <Image className='-z-10' src={LogoPorsche} alt='' width={200}/>
                    </div>
                </nav>

            </header>

        </>
            
    )
}