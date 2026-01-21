import { Heart, Shield, UserPlus } from "lucide-react";
import CardServices from "./CardServices/cards";

export default function HeroSection() {

    const CardsServicesData = [
        {
            icon: <Heart className="text-blue-500 rounded-xl" />,
            title: "Acolhimento",
            description: "Profissionais capacitados em atendimento inclusivo",
        },

        {
            icon: <UserPlus className="text-green-500" />,
            title: "Comunidade",
            description: "Rede de apoio e cuidado mútuo"
        },
        {
            icon: <Shield className="text-pink-500" />,
            title: "Segurança",
            description: "Seus dados protegidos com total privacidade"
        },

        {
            title: "100%",
            description: "Comprometidos com a diversidade"
        }

    ]
    return (
        <section className="flex flex-col md:flex-row md:justify-between bg-gradient-to-b  to-green-400/30  p-5 sm:p-10 md:p-20">
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 md:gap-10 md:max-w-lg lg:max-w-2xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                    Cuidado de saúde <br />
                    que <span className="text-[#018762]">respeita e acolhe <br /></span>
                    todas as pessoas
                </h1>

                <p className="text-gray-700 px-2 ">
                    Conectamos você com profissionais de saúde qualificados e comprometidos com o
                    atendimento inclusivo à comunidade LGBTQIA+. Seu bem-estar é nossa prioridade.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
                    <button className="text-white px-4 py-2 rounded-md bg-[#018762] hover:cursor-pointer">
                        Encontrar profissional
                    </button>
                    <button className="text-black px-4 py-2 rounded-md bg-white border border-gray-200 hover:cursor-pointer">
                        Sou profissional de saúde
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 mt-10 md:mt-0 self-center w-full md:w-auto justify-items-center">
                {CardsServicesData.map((card, index) => (
                    <CardServices
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