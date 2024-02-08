import Image, { StaticImageData } from 'next/image'

type Mainprops = {
    modelo: string,
    imagem: StaticImageData
}

const Main = ({ modelo, imagem}: Mainprops) => {
    return (
       
        <div className='relative'>
            <Image className='rounded-xl mt-24 mb-40' src={imagem} alt='Carro Eletrico' width={400}/>
            <div className='absolute inset-0 flex items-center justify-center'>
                <p className='mt-56 text-xl font-semibold text-white'>{modelo}</p>
            </div>
        </div>    
        
    )
}

export default Main