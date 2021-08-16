interface IProduct {
    brand: string;
    category: string;
    strain: string;
    strain_type: string;
    weight_grams: number;
    placeholder_img: string;
    id: number;
}

type CardsType = {
    param: Array<IProduct>;
    currentPage: number;
};

export default function Cards({ param, currentPage }: CardsType) {
    return Array.isArray(param) ? (
        <>
            <ul
                role="list"
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            >
                {param.map((item) => (
                    <li
                        key={item.id}
                        className="flex flex-col col-span-1 text-center bg-gray-100 divide-y divide-gray-200 rounded-lg shadow-xl "
                    >
                        <div className="flex flex-col flex-1 p-8">
                            <img
                                className="flex-shrink-0 w-32 h-32 mx-auto rounded-full"
                                src={item.placeholder_img}
                                alt=""
                            />

                            <h3 className="mt-6 text-sm font-medium text-white">
                                <span className="px-1 py-1 bg-yellow-400 rounded-md">
                                    {item.strain}
                                </span>
                            </h3>
                            <div className="mt-1 text-sm font-medium text-gray-500">
                                {item.strain_type}
                            </div>
                            <div className="mt-1 text-sm font-medium text-gray-500">
                                {item.brand}
                            </div>
                            <div className="mt-1 text-sm font-medium text-gray-500">
                                {item.category}
                            </div>
                            <div className="mt-1 text-sm font-medium text-gray-500">
                                {item.weight_grams} grams
                            </div>
                        </div>
                    </li>
                ))}
                {param.length > 1 && (
                    <li id="sentinela"></li>
                )}
            </ul>
        </>
    ) : null;
}
