import { ProductObject } from "../FilterableProductTable";
import "./productTable.css";

interface ProductRowProps{
    product: ProductObject
}

const ProductRow = ({product}:ProductRowProps) => {

    //Todo
    // return <div className={"productRow"+(!product.stocked ? " stocked":"")} style={{ display:"flex" }}>
    //     <p>{product.name}</p>
    //     <p>{product.price}</p>
    // </div>;

    const name = product.stocked ? product.name :
        <span style={{ color: 'red' }}>
            {product.name}
        </span>;

    return <tr>
        <td>{name}</td>
        <td>{product.price}</td>
    </tr>;
};

export default ProductRow;