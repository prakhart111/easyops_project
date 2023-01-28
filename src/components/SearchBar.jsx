import React from 'react'
import { searchRow } from './tableFunctions'
import "../assets/styles/search.css"

const SearchBar = ({masterData}) => {

    const [searchTerm,setSearchTerm] = React.useState("")
    const [searchResult,setSearchResult] = React.useState([])
    const [loading,setLoading] = React.useState(false)

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        setSearchResult(searchRow(masterData,searchTerm,loading,setLoading))
        console.log(searchResult);
    }

  return (
    <div>
        <form onSubmit={handleFormSubmit} className="search-form">
            <input type="text" onChange={(e)=>setSearchTerm(e.target.value)} placeholder="Search By Name" required/>
            <input type="submit" value="🔍" className='btn submit' />
        </form>
        {!loading && <div className='search-res'>
           {searchResult.length!=0 ? <ul>
                {searchResult.map((item,index)=>{
                    return <li key={index}>
                        <span>{item.serial} </span>
                        <span className='name'>{item.name}</span>
                        <span>{item.contact}</span>
                        </li>
                })}
            </ul>:""}
        </div>}
    </div>
  )
}

export default SearchBar