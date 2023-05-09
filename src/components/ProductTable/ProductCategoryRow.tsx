import './productTable.css';

interface Props {
    label: string
}

const ProductCategoryRow = ({label}:Props) => {
    //Todo
    // return <div className="CategoryRow">
    //     {label}
    // </div>;

    return <tr>
        <th colSpan={2} >
            {label}
        </th>
    </tr>
};

export default ProductCategoryRow;