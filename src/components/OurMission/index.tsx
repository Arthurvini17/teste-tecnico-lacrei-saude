
import { Eye, Heart, Rainbow, Star } from "lucide-react";
import CardList from "./CardList";

const CardListData = [
    {
        icon: <Heart />,
        title: "Acolhimento",
        description: "Criamos um ambiente seguro e acolhedor onde todas as pessoas se sintam respeitadas e valorizadas em sua integralidade"
    },
    {
        icon: <Rainbow />,
        title: "Acolhimento",
        description: "Promovemos ativamente a inclusão da comunidade LGBTQIA+ no sistema de saúde, combatendo preconceitos e discriminação."
    },

    {
        icon: <Eye />,
        title: "Transparência",
        description: "Mantemos comunicação clara e honesta com pacientes e profissionais, construindo relações baseadas em confiança."
    },

    {
        icon: <Star />,
        title: "Excelência",
        description: "Buscamos constantemente a melhoria dos nossos serviços, garantindo qualidade e profissionalismo em cada atendimento."
    }
]

export default function OurMission() {
    return (

        <section id="OurMission" className="mt-20 sm:flex sm:items-center sm:justify-center sm:text-center sm:flex-col flex flex-col  text-center">
            <div>
                <h2 className=" text-[#018762]">Nossa missão</h2>
                <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl  text-balance">Transformar o acesso à saúde para a comunidade LGBTQIA+</h2>
                <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed text-pretty text-gray-600">Acreditamos que todas as pessoas merecem atendimento de saúde de qualidade, livre de  discriminação e preconceito. Nossa plataforma conecta pacientes com profissionais capacitados  e comprometidos com o cuidado inclusivo e respeitoso.</p>
            </div>


            <div>
                <h1 className="font-semibold sm:mt-5">Nossos valores</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 p-5 sm:p-20 w-full max-w-7xl mx-auto">
                {CardListData.map((card, index) => (
                    <CardList
                        key={index}
                        icon={card.icon}
                        title={card.title}
                        description={card.description}
                    />
                ))}

            </div>
        </section>

    )
}