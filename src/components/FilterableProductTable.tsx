const groceries = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

export enum Category {
    Fruits = "Fruits",
    Vegetables = "Vegetables",
}

export type ProductObject = {
    category: string,
    price: string,
    stocked: boolean,
    name: string,
}

import { useState } from 'react';
import Searchbar from './Searchbar';
import ProductTable from './ProductTable/ProductTable';

const FilterableProductTable = () => {

    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    return <div style={{ minWidth: "100px" }} >
        <Searchbar
            filterText={filterText}
            inStockOnly={inStockOnly}
            onFilterTextChange={setFilterText}
            onInStockOnlyChange={setInStockOnly}
        />
        <ProductTable inventory={groceries}
            filterText={filterText}
            inStockOnly={inStockOnly}
        />
    </div>;
}

export default FilterableProductTable;