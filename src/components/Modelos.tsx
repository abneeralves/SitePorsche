import Image, { StaticImageData } from 'next/image'

type Mainprops = {
    modelo: StaticImageData,
    imagem: StaticImageData
}

const Modelos = ({ modelo, imagem}: Mainprops) => {
    return (
       
        <div className='relative'>
            <Image className='rounded-xl h-[50rem] object-cover' src={imagem} alt='Carro Eletrico' />
            
            <Image className='absolute -top-5 left-5 z-10 flex items-center invert' src={modelo} alt='' width={180}/>
        </div>    
        
    )
}

export default Modelos