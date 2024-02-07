import Image, { StaticImageData } from 'next/image'

type Mainprops = {
    modelo: StaticImageData,
    imagem: StaticImageData,
    descrição: string,
    config: string,
    tdsModel: string,
    link: string,
    link2: string,
}

const Modelos = ({ modelo, imagem, descrição, config, tdsModel, link, link2}: Mainprops) => {
    return (
       
        <div className='relative'>
            <Image className='rounded-xl h-[50rem] object-cover' src={imagem} alt='Carro Eletrico' />
            
            <Image className='absolute -top-5 left-5 z-10 flex items-center invert' src={modelo} alt='' width={180}/>

            <div className='absolute top-96 mt-48'>
                <p className='text-white text-3xl mx-5'>{descrição}</p>
            </div>

            <div className='absolute top-96 mt-72 flex items-center justify-center'>
                <a href={link}><p className='flex items-center justify-center w-[36rem] h-12 ml-6 text-black bg-white rounded text-1xl font-medium hover:bg-gray-300 transition duration-300'>{config}</p></a>
            </div>

            <div className='absolute top-96 mt-80 flex items-center justify-center'>
                <a href={link2}><p className='flex items-center justify-center w-[36rem] h-12 ml-6 mt-7 text-white border-2 font-medium rounded text-1xl hover:backdrop-blur transition duration-100'>{tdsModel}</p></a>
            </div>
        </div>    
        
    )
}

export default Modelos