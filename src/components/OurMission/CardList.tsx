type CardListProps = {
    icon?: React.ReactNode;
    title: string;
    description: string;
}

export default function CardList({ title, description, icon }: CardListProps) {
    return (
        <section className="w-full flex justify-center">
            <div className="sm:rounded-lg sm:shadow-md items-center justify-center flex flex-col p-8 w-full max-w-sm bg-gray-50 shadow h-full">
                <div className="">{icon}</div>
                <h1 className="font-bold text-lg">{title}</h1>
                <p className="">{description}</p>

            </div>
        </section>
    )
}