"use client";
import { useState } from "react";
import { Close, Search } from "./icon";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="w-full hidden md:inline-flex  flex-1 h-12 relative">
        <Search className="text-lg absolute left-2.5 mt-4 text-primary" />
        <input
          type="text"
          className="flex-1 h-full outline-none bg-transparent text-gray-500 border-[1px] border-black/30 rounded-sm pl-8 pr-28"
          placeholder="Buscar Productos..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        {search && <Close onClick={() => setSearch("")} />}
        <button className="bg-primary text-white absolute right-2 px-2.5 py-1.5 text-sm hover:bg-primary/60 duration-300 ease-out font-medium top-2 ">
          Search
        </button>
      </div>
    </>
  );
};

export default SearchInput;
