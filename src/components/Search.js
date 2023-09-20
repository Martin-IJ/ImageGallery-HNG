import React from 'react'
import { BiSearch } from "react-icons/bi";
import { useGlobalContext } from '../Context'

const Search = () => {
    const {handleSearchInputChange, searchInput} = useGlobalContext()
  return (
    <div className="flex items-center bg-slate-100 px-5 py-2 border-2 border-gray-400 rounded-full max-w-[600px] w-full m-auto drop-shadow-lg">
        <input
            type="text"
            placeholder="Search images by tag..."
            className="outline-none bg-transparent flex-1 h-[40px]"
            value={searchInput}
            onChange={handleSearchInputChange}
          />
          <BiSearch />
    </div>
  )
}

export default Search