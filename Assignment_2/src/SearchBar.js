function SearchBar(props) {
    return <div>
        <input type="search" onChange={props.set_search}></input>
        <button type="submit" onClick={props.search_api}>Search</button>
        </div>;
}
  
export default SearchBar;
  