import { SearchIcon } from "@heroicons/react/outline";
const Header = ({ handleChange }) => {
  return (
    <div className="flex items-center p-2 w-full bg-white border-b">
      <div className="flex items-center bg-gray-200 rounded-full shadow-md px-2 py-1 w-3/4 max-w-lg">
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

export default Header;
