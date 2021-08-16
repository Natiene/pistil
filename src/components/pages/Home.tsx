import Search from '../search/Search';
import Cards from '../cards/Cards';
import { database } from '../../services/firebase';
import { useEffect, useState } from 'react';
import reportWebVitals from '../../reportWebVitals';

type FilterType = {
    page: number;
    pages: number;
    limit: number;
    filterType: string;
    search: string;
};

const initialFilter = {
    page: 1,
    pages: Infinity,
    limit: 12,
    filterType: '',
    search: '',
};

export function Home() {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState({ ...initialFilter });

    const handlerProducts = (filter: FilterType) => {
        let data = null;

        console.log('filter ', filter);

        if (!filter.filterType) {
            data = database.ref().limitToFirst(filter.limit).get();
        } else {
            if (filter.filterType === 'weight_grams') {
                data = database
                    .ref()
                    .orderByChild(filter.filterType)
                    .equalTo(parseFloat(filter.search))
                    .limitToFirst(filter.limit)
                    .get();
            } else {
                data = database
                    .ref()
                    .orderByChild(filter.filterType)
                    .equalTo(filter.search)
                    .limitToFirst(filter.limit)
                    .get();
            }
        }

        data.then((response) => {
            console.log('debug responde', response.val());
            if (!Array.isArray(response.val())) {
                const res = response.val();
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
        handlerProducts(initialFilter);
    }, []);

    return (
        <div className="container content-center m-8 md:mx-auto">
            <Search onSearch={handlerProducts} />

            <Cards param={products} />
        </div>
    );
}
