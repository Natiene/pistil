interface IProduct {
    brand: string;
    category: string;
    strain: string;
    strainType: string;
    weight_grams: number;
    placeholder_img: string;
    id: number;
}

type CardsType = {
    param: Array<IProduct>;
};

export default function Cards({ param }: CardsType) {
    return Array.isArray(param) ? (
        <>
            <ul
                role="list"
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            >
                {param.map((item) => (
                    <li
                        key={item.id}
                        className="flex flex-col col-span-1 text-center bg-white divide-y divide-gray-200 rounded-lg shadow"
                    >
                        <div className="flex flex-col flex-1 p-8">
                            <img
                                className="flex-shrink-0 w-32 h-32 mx-auto rounded-full"
                                src={item.placeholder_img}
                                alt=""
                            />
                            <h3 className="mt-6 text-sm font-medium text-gray-900">
                                {item.category}
                            </h3>
                            <dl className="flex flex-col justify-between flex-grow mt-1">
                                <dd className="text-sm text-gray-500">
                                    {item.strain}
                                </dd>
                                <dd className="mt-3">
                                    <span className="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
                                        {item.weight_grams}
                                    </span>
                                </dd>
                            </dl>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    ) : null;
}
