import Modelos from '@/components/Modelos'
import Eletricos from '../../public/Taycan.jpg'
import TurboS from '../../public/Gt3.jpg'
import Boxster from '../../public/Boxster.jpg'


export default function Main() {
    return (

        <>
            <div className="flex items-center align-center bg-white space-x-11 ">
                <Modelos modelo="Estação de Recarga." imagem={Eletricos}/>
                <Modelos modelo="Os modelos 911." imagem={TurboS}/>
                <Modelos modelo="718 Spyder RS." imagem={Boxster}/>
            </div>  

            <div className='flex items-center a bg-white'>
                <h1 className='text-5xl m-auto font-medium text-black '>Modelos</h1>
            </div>
        
        </>
        
    )
  }