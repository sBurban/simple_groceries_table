interface SearchProps{
    filterText: string,
    inStockOnly: boolean,
    onFilterTextChange: (value:string) => void
    onInStockOnlyChange: (value:boolean) => void
}


const Searchbar = ({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange}:SearchProps) => {

    //Todo
    return <form>
      <input
        value={filterText}
        type="text"
        placeholder="Search..."
        style={{ display:"block" }}
        onChange={(e)=> onFilterTextChange(e.target.value) }
      />
      <label>
        <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />
        {' '}
        Only show products in stock
      </label>
    </form>;
};

export default Searchbar;