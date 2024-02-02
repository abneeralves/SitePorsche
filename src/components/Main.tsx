import Modelos from '@/components/Modelos'
import Eletricos from '../../public/Taycan.jpg'
import TurboS from '../../public/TurboS.jpg'
import Boxster from '../../public/Boxster.jpg'


export default function Main() {
    return (

        <>
            <div id='meio' className="flex items-center align-center bg-white space-x-11 ">
                <div className='ml-72'>
                    <a className='hover:opacity-90 transition-opacity' href="https://www.porsche.com/brazil/pt/aboutporsche/e-performance/"><Modelos modelo="Estação de Recarga." imagem={Eletricos}/></a>
                </div>

                <div>
                    <a className='hover:opacity-90 transition-opacity' href="https://www.porsche.com/brazil/pt/models/911/"><Modelos modelo="Os modelos 911." imagem={TurboS}/></a>
                </div>

                <div>
                    <a className='hover:opacity-90 transition-opacity' href="https://www.porsche.com/brazil/pt/models/718/718-spyder-rs/718-spyder-rs/"><Modelos modelo="718 Spyder RS." imagem={Boxster}/></a>
                </div>    
            </div>  

            <div className='flex items-center a bg-white'>
                <h1 className='text-5xl m-auto font-semibold text-black '>Modelos</h1>
            </div>

            <div className='bg-white'>
                <h2>abner alves </h2>
            </div>
        
        </>
        
    )
  }