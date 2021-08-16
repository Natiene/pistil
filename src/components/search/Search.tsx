import { useState } from 'react';
import { database } from '../../services/firebase';

type FilterType = {
    filterType: string;
    search: string;
};

//@ts-ignore
const doSearch = ({ filterType, search }: FilterType, props) => {
    if (search === '' || filterType === '') {
        return
    }
    
    props.onSearch({
        filterType,
        search
    });
};

//@ts-ignore
export default function Search(props) {
    const [filterType, setFilterType] = useState('');
    const [search, setSearch] = useState('');

    return (
        <div>
            <div className="flex flex-row justify-center mt-1 mb-5 space-x-11">
                <select
                    onChange={(e) => setFilterType(e.target.value)}
                    className="rounded-md shadow-md text-md"
                >
                    <option disabled selected>
                        Select here
                    </option>
                    <option value="brand">Brand</option>
                    <option value="category">Category</option>
                    <option value="strain">Strain</option>
                    <option value="strain_type">Strain Type</option>
                    <option value="weight_grams">Weight Grams</option>
                </select>

                <input
                    type="text"
                    placeholder="Search by..."
                    className="rounded-md shadow-md focus:ring-indigo-500 focus:ring-2 text-md focus:outline-none focus:ring-offset-2"
                    onChange={(e) => setSearch(e.target.value)}
                ></input>

                <button
                    onClick={() => doSearch({ filterType, search}, props)}
                    className="px-4 py-2 text-white bg-indigo-500 rounded-md shadow-md text-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Search
                </button>
            </div>
        </div>
    );
}
