import { Category } from "../FilterableProductTable";
import { ProductObject } from "../FilterableProductTable";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

interface TableProps{
    inventory: ProductObject[]
}


const ProductTable = ({ inventory }:TableProps) => {
    //Todo

    // const categories:string[] = [Category.Fruits, Category.Vegetables];
    const categories:string[] = [...(Object.keys(Category))];

    // const productsList = inventory.map( r => <ProductRow product={r} />)

    const productsList = categories.map( (cr,i) => {
        const productRows = inventory.map( (inv, j) => {
        // const productRows = inventory.filter( (inv, j) => {
            if(inv.category === cr) return <ProductRow key={`${cr}_${j}`} product={inv}/>;
        });
        return <>
            <ProductCategoryRow key={i} label={cr} />
            {productRows}
        </>
    });


    // return <div className="products_table">
    //     {productsList}
    // </div>;

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{productsList}</tbody>
        </table>
    );
};

export default ProductTable;