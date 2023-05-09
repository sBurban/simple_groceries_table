
const Searchbar = () => {

    //Todo
    return <form>
      <input type="text" placeholder="Search..." style={{ display:"block" }} />
      <label>
        <input type="checkbox" />
        {' '}
        Only show products in stock
      </label>
    </form>;
};

export default Searchbar;