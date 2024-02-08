import Image, { StaticImageData } from 'next/image'

type Mainprops = {
    modelo: StaticImageData,
    modelo2: StaticImageData,
    modelo3: StaticImageData,
}

const insta2 = ({ modelo, modelo2, modelo3 }: Mainprops) => {
    return (
        <>
            <div className="">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-auto'>
                    <div className=''>
                        <Image className='w-full object-cover' src={modelo} alt='' width={500} />
                    </div>

                    <div className=''>
                        <Image className='w-full object-cover' src={modelo2} alt='' width={500} />
                    </div>

                    <div className='md:col-span-2'>
                    <Image className='w-full h-full object-cover' src={modelo3} alt='' width={500}/>
                    </div>
                    
                </div> 
                
            </div>
        </>
    )
}

export default insta2