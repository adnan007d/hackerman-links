import { createContext, useState } from "react";
import { auth } from "../utils/firebase";

const LinksContext = createContext();

const LinksProvider = (props) => {
  const [user, setUser] = useState(null);

  return (
    <LinksContext.Provider value={{ user, setUser }}>
      {props.children}
    </LinksContext.Provider>
  );
};

export { LinksProvider };
export default LinksContext;
