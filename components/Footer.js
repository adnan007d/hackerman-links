import RedditIcon from "@material-ui/icons/Reddit";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
const Footer = () => {
  return (
    <div className="h-60 mt-10 bg-black w-full grid place-items-center">
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-white mb-5">You can Contact me here</h1>
        <div className="flex space-x-10">
          <a
            target="_blank"
            href="https://www.reddit.com/user/AnEternityOfMisery"
          >
            <RedditIcon className="text-red-500 icon" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/an.eternity.of.misery"
          >
            <InstagramIcon className="text-[#bc2a8d] icon" />
          </a>
          <a target="_blank" href="https://github.com/adnan007d">
            <GitHubIcon className="text-white icon" />
          </a>
        </div>
        <h1 className="text-white mt-5">I don't know what else to add here</h1>
      </div>
    </div>
  );
};

export default Footer;
