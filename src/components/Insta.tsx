import Image, { StaticImageData } from 'next/image'

type Mainprops = {
    modelo: StaticImageData,
    modelo2: StaticImageData,
    modelo3: StaticImageData,
}

const insta = ({ modelo, modelo2, modelo3 }: Mainprops) => {
    return (
        <>
            <div className="">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-auto'>
                    <div className='lg:col-span-2'>
                        <Image className='w-full object-cover' src={modelo} alt='' width={500} />
                    </div>

                    <div className='hidden lg:block'>
                        <Image className='w-full object-cover' src={modelo2} alt='' width={200} />
                    </div>

                    <div className='hidden lg:block'>
                    <Image className='w-full h-full object-cover' src={modelo3} alt='' width={250}/>
                    </div>
                    
                </div>
                
                
                
            </div>
        </>
    )
}

export default insta