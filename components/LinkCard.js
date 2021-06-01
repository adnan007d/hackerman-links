import { DuplicateIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";

const LinkCard = ({ name, path, to }) => {
  const router = useRouter();
  const copyToClipboard = () => {
    const input = document.createElement("input");
    input.value = `${window.location.protocol}//${window.location.host}/${path}`;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
  };

  return (
    <div className="flex flex-col m-3 shadow-xl rounded-xl">
      <div className=" flex flex-col items-center rounded-xl w-36 sm:w-48 md:w-56 lg:w-64 xl:w-80 flex-grow bg-gray-500">
        <h1 className="text-base text-white sm:text-lg md:text-xl lg:text-3xl p-2 text-center">
          {name}
        </h1>
        <div className="border-t border-black w-full"></div>
        <div className="flex justify-center items-center mt-1 w-full h-full p-2">
          <img
            className="object-contain h-full justify-self-center"
            src={to}
            loading="lazy"
            alt={name}
          />
        </div>
      </div>
      <div className="flex items-center p-2">
        <Link href={`/${path}`}>
          <div className="flex flex-1 justify-center cursor-pointer transition duration-200 transform md:hover:scale-105">
            <span className="text-sm sm:text-base lg:text-lg">Visit</span>
          </div>
        </Link>
        <div className="border border-black h-full justify-center"></div>
        <div
          className="flex flex-1 items-center flex-grow justify-center cursor-pointer transition duration-200 transform md:hover:scale-105"
          onClick={copyToClipboard}
        >
          <DuplicateIcon className="h-5" />
          <span className="hidden lg:inline-flex ml-2">Copy Link</span>
        </div>
      </div>
    </div>
  );
};

export default LinkCard;
