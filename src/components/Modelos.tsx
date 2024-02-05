import Image, { StaticImageData } from 'next/image'

type Mainprops = {
    modelo: string,
    imagem: StaticImageData
}

const Modelos = ({ modelo, imagem}: Mainprops) => {
    return (
       
        <div className='relative'>
            <Image className='rounded-xl h-[50rem] object-cover' src={imagem} alt='Carro Eletrico' />
        </div>    
        
    )
}

export default Modelos