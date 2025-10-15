type CardServicesProps = {
    icon?: React.ReactNode;
    title: string;
    description: string;
}

export default function CardServices({ icon, title, description }: CardServicesProps) {
    return (
        <div className="bg-white p-5 rounded-lg shadow-md  w-70 ">
            <div className=" mb-2">{icon}</div>
            <h2 className="font-bold text-lg">{title}</h2>
            <p>{description}</p>
        </div>
    );
}