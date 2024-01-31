import Image, { StaticImageData } from 'next/image'

type Mainprops = {
    modelo: string,
    imagem: StaticImageData
}

const Main = ({ modelo, imagem}: Mainprops) => {
    return (
       
        <div className='relative ml-64'>
            <Image className='rounded-xl mt-24 mb-40 ' src={imagem} alt='Carro Eletrico' width={410}/>
            <div className='absolute inset-0 flex items-center justify-center'>
                <p className='mt-52 text-lg font-semibold text-white'>{modelo}</p>
            </div>
            

        </div>    
        
    )
}

export default Main