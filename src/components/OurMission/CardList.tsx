type CardListProps = {
    icon?: React.ReactNode;
    title: string;
    description: string;
}

export default function CardList({ title, description, icon }: CardListProps) {
    return (
        <section>
            <div className="  sm:rounded-lg  sm:shadow-md sm:w-70 items-center justify-center  flex flex-col sm:flex  p-10 w-80 bg-gray-50 shadow">
                <div className="">{icon}</div>
                <h1 className="font-bold text-lg">{title}</h1>
                <p className="">{description}</p>

            </div>
        </section>
    )
}