import LinkCard from "./LinkCard";

const Links = ({ filteredSearch, data }) => {
  return (
    <div className="flex w-full flex-wrap justify-center">
      {filteredSearch
        ? filteredSearch?.map((doc) => (
            <LinkCard
              key={doc.id}
              name={doc.name}
              path={doc.path}
              to={doc.to}
            />
          ))
        : data?.map((doc) => (
            <LinkCard
              key={doc.id}
              name={doc.name}
              path={doc.path}
              to={doc.to}
            />
          ))}
    </div>
  );
};

export default Links;
