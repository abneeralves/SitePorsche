import Image, { StaticImageData } from 'next/image'

type Mainprops = {
    modelo: string,
    imagem: StaticImageData
    link: string,
}

const Main = ({ modelo, imagem, link}: Mainprops) => {
    return (
       
        <div className='relative'>
            <Image className='rounded-xl mt-24 mb-40' src={imagem} alt='Destaques' width={400}/>
            <div className='absolute inset-0 flex items-center justify-start ml-5'>
                <p className='mt-56 text-xl font-semibold text-white'>{modelo}</p>
            </div>

            <div className='absolute inset-0 flex items-center justify-end mt-56 mr-5 '>
                <a href={link} className='hover:bg-zinc-500 hover:opacity-70 transition duration-300 rounded p-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg></a>
            </div>
        </div>    
        
    )
}

export default Main