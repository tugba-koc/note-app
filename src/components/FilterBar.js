import React from "react";

function FilterBar({search,setSearch}) {
  return (
    <div className="mt-5 w-50">
      <input
        placeholder="Search.."
        className="border border-secondary w-100 px-2"
        type="search"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />
    </div>
  );
}

export default FilterBar;
