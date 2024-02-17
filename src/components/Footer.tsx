import Image, { StaticImageData } from 'next/image'
import Brasil from '../../public/Brasil.png'
import LogoPorsche from '../../public/PorscheLogo.png'


export default function Footer() {
    return (
        <>
            <footer className="bg-black">
                <div className="ml-28 mb-11 sm:ml-20">
                    <h4 className="text-2xl font-semibold text-white mb-2">Região / Idioma Atual</h4>

                    <div className='flex items-center'>
                        <Image src={Brasil} alt='Bandeira Do Brasil' width={40} className='mt-2 -ml-1'/>
                        <p className='text-md mt-2 ml-2 text-white'>Brasil / Português</p>
                    </div>
                </div>

                <div className="flex">

                    <div className="ml-28 sm:ml-20">
                        <h4 className="text-2xl font-semibold text-white">Contato</h4>
                        <p className='text-white'>Perguntas?</p>

                        <a href="https://www.porsche.com/brazil/pt/aboutporsche/porschebrasil/showrooms/contact/" target="_blank" rel="noopener noreferrer"><p className="flex items-center justify-center rounded bg-white text-black mt-5 h-11 w-64 font-medium hover:opacity-50 transition-opacity">Formulário de Contato</p></a>
                    </div>

                    <div className="ml-32 sm:hidden md:block">
                        <h4 className="text-2xl font-semibold text-white">Redes Sociais</h4>
                        <p className='text-white'>Entre em contato conosco através das mídias sociais.</p>

                        <div className="flex">
                            <a href="https://web.facebook.com/porsche/?_rdc=1&_rdr">
                            <p className="flex items-center justify-center rounded bg-white text-black mt-5 h-11 w-14 mr-3 hover:opacity-50 transition-opacity"><svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            </svg></p></a>

                            <a href="https://www.instagram.com/porsche/">
                            <p className="flex items-center justify-center rounded bg-white text-black mt-5 h-11 w-14 mr-3 hover:opacity-50 transition-opacity"><svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg></p></a>

                            <a href="https://br.pinterest.com/porsche/">
                            <p className="flex items-center justify-center rounded bg-white text-black mt-5 h-11 w-14 mr-3 hover:opacity-50 transition-opacity"><svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
                                fill-rule="evenodd"
                                clip-rule="evenodd" />
                            </svg></p></a>

                            <a href="https://www.youtube.com/user/Porsche">
                            <p className="flex items-center justify-center rounded bg-white text-black mt-5 h-11 w-14 mr-3 hover:opacity-50 transition-opacity"><svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            </svg></p></a>
 
                            <a href="https://twitter.com/porsche">
                            <p className="flex items-center justify-center rounded bg-white text-black mt-5 h-11 w-14 mr-3 hover:opacity-50 transition-opacity"><svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg></p></a>

                            <a href="https://www.linkedin.com/company/porsche-ag">
                            <p className="flex items-center justify-center rounded bg-white text-black mt-5 h-11 w-14 mr-3 hover:opacity-50 transition-opacity"><svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                </svg></p>
                            </a>

                        </div>
                    </div>
                </div>

                <div className="flex">
                    <div className="ml-28 mt-20 sm:ml-20">
                        <h4 className="text-2xl font-semibold text-white">Empresa</h4>

                        <div className='mt-5'>
                            <a href="https://www.porsche.com/brazil/pt/aboutporsche/overview/"><p className='hover:text-red-500 text-white'>Porsche num Relance</p></a>
                            <a href="https://www.porsche.com/brazil/pt/aboutporsche/jobs/"><p className='hover:text-red-500 text-white'>Empregos & Carreira</p></a>
                            <a href="https://press.pbr.porsche.com/prod/presse_pag/PressBasicData.nsf/press/PLAptWelcome0?OpenDocument"><p className='hover:text-red-500 text-white'>Imprensa</p></a>
                        </div>
                    </div>

                    <div className="mt-32 sm:ml-11 md:ml-56">
                        <a href="https://www.porsche.com/brazil/pt/aboutporsche/porschebrasil/"><p className='hover:text-red-500 text-white'>Porsche Brasil</p></a>
                        <a href="https://www.porsche.com/brazil/pt/motorsportandevents/#from=/brazil/pt/motorsportandevents/porschepartnerforum/"><p className='hover:text-red-500 text-white'>Patner Forum</p></a>
                        <a href="https://www.porsche.com/brazil/pt/aboutporsche/porschebrasil/showrooms/contact/"><p className='hover:text-red-500 text-white'>Contatos</p></a>
                    </div>

                    <div className="mt-32 sm:ml-11 md:ml-56">
                        <a href="https://www.porsche.com/brazil/pt/aboutporsche/responsibility/"><p className='hover:text-red-500 text-white'>Sustentabilidade</p></a>
                        <a href="https://www.porsche.com/brazil/pt/aboutporsche/service/"><p className='hover:text-red-500 text-white'>Subsidiárias</p></a>
                    </div>
                </div>

                <div className="flex items-center justify-center mt-32 mb-11">
                    <hr className="w-full min-w-md mx-32  border-zinc-500" />
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <a href="https://www.porsche.com/brazil/pt/"><p className='font-medium text-lg text-white'>Site não Oficial. Todos os direito reservado a</p></a>
                    <a href="https://www.porsche.com/brazil/pt/"><Image src={LogoPorsche} alt='Logo Porsche' width={200} className='invert -mt-5'/></a>
                </div> 
            </footer>
        
        </>
    )
}