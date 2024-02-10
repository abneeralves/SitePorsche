import Destaques from '@/components/Destaques'
import Eletricos from '../../public/Taycan.jpg'
import TurboS from '../../public/TurboS.jpg'
import Spyder from '../../public/Spyder.jpg'
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
import Insta from '@/components/InstaGrid'
import Insta2 from '@/components/InstaGrid2'
import Spyder918 from  '../../public/918Spyder.jpg'
import GT1 from '../../public/GT1.jpg'
import PorscheNeve from '../../public/PorscheNeve.jpg'
import PorscheCarpet from '../../public/PorscheCarpet.jpg'
import PorscheBatman from '../../public/PorscheBatman.jpg'
import CarreraGt from '../../public/CarreraGt.jpg'
import Porsches from '../../public/Porsches.jpg'
import GTs from '../../public/GTs.jpg'
import PorscheBr from '../../public/PorscheBr.jpg'
import PorscheTSD from '../../public/PorscheTSD.jpg'
import PorscheFinder from '../../public/PorscheFinder.jpg'
import PorscheE from '../../public/PorscheE.jpg'




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
                    <a className='hover:opacity-90 transition-opacity' href="https://www.porsche.com/brazil/pt/models/718/718-spyder-rs/718-spyder-rs/"><Destaques modelo="718 Spyder RS." imagem={Spyder}/></a>
                </div>    
            </div>  

            <div className='flex items-center bg-white'>
                <h1 className='text-5xl m-auto font-semibold text-black '>Modelos</h1>
            </div>
             
            <div className='grid grid-cols-2 gap-4  bg-white'>
                <div className='relative ml-72 mx-2 my-2 mt-20'>
                    <Modelos modelo={LogoCayman} imagem={Modelo718} descrição='Dois Lugares com alta dinâmica de condução graçãs ao seu motor central.' config='Configurar o 718' tdsModel='Todos os modelos 718' link='https://www.porsche.com/brazil/pt/modelstart/all/?modelrange=718' link2='https://www.porsche.com/brazil/pt/models/718/'/>
                </div>

                <div className='mr-72 mx-2 my-2 mt-20'>
                    <Modelos modelo={LogoCarrera} imagem={Modelo911} descrição='Icônico carro esportivo com motor montado na traseira e desempenho superios.' config='Configurar o 911' tdsModel='Todos os modelos 911' link='https://www.porsche.com/brazil/pt/modelstart/all/?modelrange=911' link2='https://www.porsche.com/brazil/pt/models/911/'/>
                </div>
                
                <div className='ml-72 mx-2 my-2'>
                    <Modelos modelo={LogoTaycan} imagem={ModeloTaycan} descrição='Sedan esportivo totalmente elétrico com porta-malas dianteiro e traseiro.' config='Configurar o Taycan' tdsModel='Todos os modelos Taycan' link='https://www.porsche.com/brazil/pt/modelstart/all/?modelrange=taycan' link2='https://www.porsche.com/brazil/pt/models/taycan/taycan-models/'/>   
                </div>
                
                <div className='mr-72 mx-2 my-2'>
                    <Modelos modelo={LogoPanamera} imagem={ModeloPanamera} descrição='Sedan esportivo de luxo com quatro lugares.' config='Configurar o Panamera' tdsModel='Todos os modelos Panamera' link='https://www.porsche.com/brazil/pt/modelstart/all/?modelrange=panamera' link2='https://www.porsche.com/brazil/pt/models/panamera/panamera-models/'/>
                </div>

                <div className='ml-72 mx-2 my-2'>
                    <Modelos modelo={LogoMacan} imagem={ModeloMacan} descrição='SUV compacto com alta versatilidade.' config='Configurar o Macan' tdsModel='Todos os modelos Macan' link='https://www.porsche.com/brazil/pt/modelstart/all/?modelrange=macan' link2='https://www.porsche.com/brazil/pt/models/macan/macan-electric-models/'/>
                </div>

                <div className='mr-72 mx-2 my-2'>
                    <Modelos modelo={LogoCayenne} imagem={ModeloCayenne} descrição='SUV com até 5 assentos, mas antes de tudo, um carro esportivo.' config='Configurar o Cayenne' tdsModel='Todos os modelos Cayenne' link='https://www.porsche.com/brazil/pt/modelstart/all/?modelrange=cayenne' link2='https://www.porsche.com/brazil/pt/models/cayenne/'/>
                </div>
            </div>

            <div className='flex items-center bg-white'>
                <h2 className='text-5xl m-auto mt-32 mb-24 font-semibold text-black '>Social Media Stories</h2>
            </div>

            <div className='flex bg-white mb-32 items-center justify-center'>
                <div className="m-2 w-[28rem]">
                    <Insta modelo={Spyder918} modelo2={GTs} modelo3={PorscheNeve} />
                </div>

                <div className="m-2 w-[28rem]">
                    <Insta2 modelo={PorscheCarpet} modelo2={PorscheBr} modelo3={PorscheBatman} />
                </div>

                <div className="m-2 w-[28rem]">
                    <Insta modelo={CarreraGt} modelo2={GT1} modelo3={Porsches} />
                </div>
            </div>

            <div className='flex items-center bg-white -mt-32'>
                <h3 className='text-5xl m-auto font-semibold text-black mt-40 '>Descubra</h3>
            </div>

            <div  className="flex items-center align-center bg-white space-x-11">
                <div className='ml-72'>
                    <a className='hover:opacity-90 transition-opacity' href="https://www.porsche.com/brazil/pt/aboutporsche/e-performance/"><Destaques modelo="E-Performance." imagem={PorscheE}/></a>
                </div>

                <div>
                    <a className='hover:opacity-90 transition-opacity' href="https://www.porsche.com/brazil/pt/accessoriesandservice/tequipment/specials/sport-exhaust-systems/"><Destaques modelo="Tequipment Sound & Design" imagem={PorscheTSD}/></a>
                </div>

                <div>
                    <a className='hover:opacity-90 transition-opacity' href="https://finder.porsche.com/br/pt-BR"><Destaques modelo="Porsche Finder" imagem={PorscheFinder}/></a>
                </div>    
            </div>  
        </>
        
    )
  }