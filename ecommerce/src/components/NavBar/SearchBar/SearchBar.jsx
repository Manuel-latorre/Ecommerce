import lupa from "../img/search.png"

const SearchBar = ()=>{
    return(
        <>
         <input type="text"  className="searchBar" placeholder="busca tu producto..."/>
                <button className="btn-search">
                    <img src={lupa} alt="" className="iconSearch" />
                </button>
        </>
    )
}

export default SearchBar;