import { Category } from "../FilterableProductTable";
import { ProductObject } from "../FilterableProductTable";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

interface TableProps{
    inventory: ProductObject[],
    filterText: string,
    inStockOnly: boolean
}


const ProductTable = ({ inventory, filterText, inStockOnly }:TableProps) => {
    //Todo

    // const categories:string[] = [Category.Fruits, Category.Vegetables];
    // const categories:string[] = [...(Object.keys(Category))];
    // const productsList = categories.map( (cr,i) => {
    //     const productRows = inventory.map( (inv, j) => {
    //     // const productRows = inventory.filter( (inv, j) => {
    //         if(inv.category === cr) return <ProductRow key={`${cr}_${j}`} product={inv}/>;
    //     });
    //     return <>
    //         <ProductCategoryRow key={i} label={cr} />
    //         {productRows}
    //     </>
    // });
    // const rows = [];
    // let lastCategory = null;

    // products.forEach((product) => {
    //     if (
    //         product.name.toLowerCase().indexOf(
    //             filterText.toLowerCase()
    //         ) === -1
    //     ) {
    //         return;
    //     }
    //     if (inStockOnly && !product.stocked) {
    //         return;
    //     }
    //     if (product.category !== lastCategory) {
    //         rows.push(
    //             <ProductCategoryRow
    //             category={product.category}
    //             key={product.category} />
    //     );
    //     }
    //     rows.push(
    //         <ProductRow
    //             product={product}
    //             key={product.name} />
    //     );
    //     lastCategory = product.category;
    // });

    const rows:React.ReactElement[] = [];
    let lastCategory:(string|null) = null;

    inventory.forEach((product) => {
        if (
            product.name.toLowerCase().indexOf(
                filterText.toLowerCase()
            ) === -1
        ) {
            return;
        }
        if (inStockOnly && !product.stocked) {
            return;
        }
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    label={product.category}
                    key={product.category} />
            );
        }
        rows.push(
            <ProductRow
                product={product}
                key={product.name} />
        );
        lastCategory = product.category;
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
            {/* <tbody>{productsList}</tbody> */}
        </table>
    );
};

export default ProductTable;