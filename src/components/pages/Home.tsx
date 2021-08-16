import Search from '../search/Search';
import Cards from '../cards/Cards';
import { database } from '../../services/firebase';
import { useEffect, useState } from 'react';

type FilterType = {
    filterType: string;
    search: string;
};

const initialFilter = {
    filterType: '',
    search: '',
};

type ProductType = {
    id: number;
    strain: string;
};

const initialProduct: ProductType = {
    id: 1,
    strain: '',
};

export function Home() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(12);
    const [lastProduct, setLastProduct] = useState(initialProduct);

    const clearState = () => {
        setProducts([]);
        setCurrentPage(1)
        console.log("aqui")
    };

    const handlerProducts = (filter: FilterType) => {
        clearState();
        const search =
            filter.filterType === 'weight_grams'
                ? parseFloat(filter.search)
                : filter.search;

        const data = database
            .ref()
            .orderByChild(filter.filterType)
            .equalTo(search)
            .limitToFirst(limit)
            // .endAt(limit+limit)
            .get();

        data.then((response) => {
            if (!Array.isArray(response.val())) {
                const res = response.val();
                //@ts-ignore
                const aux = [];
                for (const key in res) {
                    aux.push(res[key]);
                }
                //@ts-ignore
                setProducts(aux);
            } else {
                setProducts(response.val());
            }
        }).catch((error) => {
            console.log(error);
        });
    };

    useEffect(() => {
        let data;
        // if (!('id' in lastProduct)) {
        if (lastProduct.id === 1) {
            data = database.ref().limitToFirst(limit).get();
        } else {
            data = database
                .ref()
                .limitToFirst(limit)
                .get();
        }

        data.then((response) => {
            const products = response.val();

            if (!products) {
                return;
            }

            const lastProduct = products[products.length - 1];

            setLastProduct(lastProduct);
            //@ts-ignore
            setProducts((prevProducts) => [...prevProducts, ...products]);
        });
    }, [currentPage]);

    useEffect(() => {
        const sentinela = document.querySelector('#sentinela');

        if (!sentinela) {
            return;
        }
        const intersectionObserver = new IntersectionObserver((entries) => {
            if (entries.some((entry) => entry.isIntersecting)) {
                setCurrentPage(
                    (currentPageInsideState) => currentPageInsideState + 1
                );
            }
        });

        intersectionObserver.observe(sentinela);

        return () => intersectionObserver.disconnect();
    }, [products]);

    return (
        <div className="container content-center m-8 md:mx-auto">
            currentPage {currentPage}
            <Search onSearch={handlerProducts} />
            <Cards param={products}  currentPage={currentPage}/>
        </div>
    );
}
