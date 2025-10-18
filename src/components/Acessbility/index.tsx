import { Shield } from "lucide-react"

export default function Acessbility() {
    return (
        <section className="flex  flex-col md:flex-row md:justify-between bg-gradient-to-b  to-green-400/30 gap-20  sm:p-20 px-10">
            <div className="">
                <div className="sm:max-w-xl sm:gap-5 sm:flex sm:flex-col  flex flex-col gap-5 text-start  ">
                    <h1 className="font-bold sm:text-2xl text-2xl  max-w-xl ">Compromisso com a acessibilidade</h1>
                    <p className="text-md">Nossa plataforma foi desenvolvida seguindo as melhores práticas de acessibilidade digital (WCAG 2.1), garantindo que todas as pessoas possam navegar e utilizar nossos serviços com facilidade e autonomia.</p>

                    <ul className="list-disc text-md marker:text-green-500 pl-2 sm:pl-6 ">
                        <li>Interface compatível com leitores de tela</li>
                        <li>Contraste adequado para melhor legibilidade</li>
                        <li>Navegação por teclado totalmente funcional</li>
                        <li>Textos claros e linguagem inclusiva</li>
                    </ul>
                </div>

            </div>

            <div className="bg-white sm:p-5 sm:mb-20 sm:rounded-xl sm:shadow-xl  items-center self-center  md:w-1/2  w-60 rounded-xl">
                <div className="sm:flex sm:flex-col flex flex-col items-center text-center  sm:gap-5 sm:items-center ">
                    <Shield className="text-[#018762] sm:w-10 sm:h-10 " />
                    <h1 className="sm:text-4xl  text-[#018762] font-bold">WCAG 2.1</h1>
                    <p>Certificado de conformidade com padrões internacionais de acessibilidade</p>
                </div>
            </div>
        </section>
    )
}