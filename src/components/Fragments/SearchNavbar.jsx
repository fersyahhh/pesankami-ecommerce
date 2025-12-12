import { Search, X } from "lucide-react";
import { useSearch } from "../../context/searchContext";

const SearchNavbar = () => {
  const { query, setQuery } = useSearch();

  return (
    <div>
      <div className="relative flex h-10 w-54 items-center gap-3 rounded-lg border border-black/30 bg-white px-2">
        <div className="absolute top-1/2 -translate-y-1/2 text-gray-600/70">
          <Search size={20} />
        </div>
        {query !== "" ? (
          <button onClick={() => setQuery('')} className="absolute w-4 h-4 flex items-center justify-center bg-slate-500 rounded-full top-1/2 right-2 -translate-y-1/2 text-white">
            <X size={12} />
          </button>
        ) : (
          ""
        )}

        <input
          className="h-full w-full pl-8 pr-8 text-sm outline-none placeholder:text-sm"
          placeholder="Cari di PesanKami"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchNavbar;
