import { SearchIcon } from "@heroicons/react/outline";

const SearchBar = ({ handleChange }) => {
  return (
    <div className="flex justify-center py-5">
      <div className="flex items-center bg-gray-200 rounded-full shadow-md px-2 py-1 w-10/12 max-w-4xl">
        <SearchIcon className="h-8 mr-2 text-gray-400" />
        <input
          className="bg-transparent outline-none w-full"
          type="text"
          placeholder="Search"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
