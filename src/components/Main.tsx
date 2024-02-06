import Destaques from '@/components/Destaques'
import Eletricos from '../../public/Taycan.jpg'
import TurboS from '../../public/TurboS.jpg'
import Boxster from '../../public/Boxster.jpg'
import Modelos from '@/components/Modelos'
import Modelo718 from '../../public/Modelo718.jpg'
import Modelo911 from '../../public/Modelo911.jpg'
import ModeloTaycan from '../../public/ModeloTaycan.jpg'
import ModeloPanamera from '../../public/ModeloPanamera.jpg'
import ModeloMacan from '../../public/ModeloMacan.jpg'
import ModeloCayenne from '../../public/ModeloCayenne.jpg'
import LogoCayman from '../../public/LogoCayman.png'
import LogoCarrera from '../../public/LogoCarrera.png'
import LogoTaycan from '../../public/LogoTyacan.png'
import LogoPanamera from '../../public/LogoPanamera.png'
import LogoMacan from '../../public/LogoMacan.png'
import LogoCayenne from '../../public/LogoCayenne.png'



export default function Main() {
    return (

        <>
            <div id='meio' className="flex items-center align-center bg-white space-x-11 ">
                <div className='ml-72'>
                    <a className='hover:opacity-90 transition-opacity' href="https://www.porsche.com/brazil/pt/aboutporsche/e-performance/"><Destaques modelo="Estação de Recarga." imagem={Eletricos}/></a>
                </div>

                <div>
                    <a className='hover:opacity-90 transition-opacity' href="https://www.porsche.com/brazil/pt/models/911/"><Destaques modelo="Os modelos 911." imagem={TurboS}/></a>
                </div>

                <div>
                    <a className='hover:opacity-90 transition-opacity' href="https://www.porsche.com/brazil/pt/models/718/718-spyder-rs/718-spyder-rs/"><Destaques modelo="718 Spyder RS." imagem={Boxster}/></a>
                </div>    
            </div>  

            <div className='flex items-center a bg-white'>
                <h1 className='text-5xl m-auto font-semibold text-black '>Modelos</h1>
            </div>
            
            
            <div className='grid grid-cols-2 gap-4  bg-white'>
                <div className='ml-72 mx-2 my-2 mt-20 hover:opacity-90 transition-opacity'>
                    <Modelos modelo={LogoCayman} imagem={Modelo718}/>    
                </div>

                <div className='mr-72 mx-2 my-2 mt-20 hover:opacity-90 transition-opacity'>
                    <Modelos modelo={LogoCarrera} imagem={Modelo911}/>
                </div>
                
                <div className='ml-72 mx-2 my-2 hover:opacity-90 transition-opacity'>
                    <Modelos modelo={LogoTaycan} imagem={ModeloTaycan}/>   
                </div>
                
                <div className='mr-72 mx-2 my-2 hover:opacity-90 transition-opacity'>
                    <Modelos modelo={LogoPanamera} imagem={ModeloPanamera}/>
                </div>

                <div className='ml-72 mx-2 my-2 hover:opacity-90 transition-opacity '>
                    <Modelos modelo={LogoMacan} imagem={ModeloMacan}/>
                </div>

                <div className='mr-72 mx-2 my-2 hover:opacity-90 transition-opacity'>
                    <Modelos modelo={LogoCayenne} imagem={ModeloCayenne}/>
                </div>
            </div>
        
        </>
        
    )
  }