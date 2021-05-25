import db from "../../utils/firebase";
import Error from "next/error";
const index = ({ errorCode }) => {
  if (errorCode) return <Error statusCode={errorCode} />;
  return (
    <div className="grid place-items-center h-screen w-screen">
      <h1>404 Not Found</h1>
    </div>
  );
};

export default index;

export async function getServerSideProps(context) {
  const path = context.query.path;
  // console.log(path);
  const docs = await (
    await db.collection("links").where("path", "==", path).get()
  ).docs;
  const link = docs.length > 0 ? docs[0].data().to : null;
  if (link) {
    return {
      redirect: {
        destination: link,
        permanent: false,
      },
    };
  }
  return {
    props: {
      errorCode: 404,
    },
  };
}
