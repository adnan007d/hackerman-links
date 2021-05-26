import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useState } from "react";
import db, { auth } from "../utils/firebase";
import nookies, { setCookie } from "nookies";

const login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    if (username.trim() === "" || password.trim() === "") {
      setError("Invalid Email/password");
      setLoading(false);
      return;
    }
    auth
      .signInWithEmailAndPassword(
        process.env.NEXT_PUBLIC_EMAIL,
        process.env.NEXT_PUBLIC_PASSWORD
      )
      .then((data) => {
        return db.collection("admins").where("username", "==", username).get();
      })
      .then((snapshot) => {
        if (snapshot.docs.length == 0 || snapshot.docs.length > 1) {
          setError("Invalid Email/password");
          setLoading(false);
          return;
        }
        const admin = snapshot.docs[0];
        if (
          username === admin.data().username &&
          password === admin.data().password
        ) {
          auth.signOut();

          setUsername("");
          setPassword("");
          setError("");
          setCookie(null, "user", username, {
            maxAge: 3600 * 24,
            sameSite: true,
            path: "/",
          });
          router.push("/");
          setLoading(false);
        } else {
          setError("Invalid Email/password");
          setLoading(false);
          return;
        }
      })
      .catch((err) => {
        console.log(err);
        setError("Something went wrong");
        setLoading(false);
      });
  };

  const toggleVisible = () => setVisible(!visible);

  return (
    <div className="grid place-items-center w-screen h-screen">
      {/* <div className=""> */}
      <form
        className="bg-gray-200 p-4 flex flex-col space-y-5 shadow-lg rounded-md"
        onSubmit={onSubmit}
      >
        <h1 className="text-center text-2xl text-gray-600">Login</h1>
        <input
          className="focus:outline-none p-2 rounded-md"
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="flex items-center h-10 bg-white rounded-md">
          <input
            className="focus:outline-none p-2 rounded-l-md"
            type={`${visible ? "text" : "password"}`}
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {visible ? (
            <EyeOffIcon onClick={toggleVisible} className="pass_icon" />
          ) : (
            <EyeIcon onClick={toggleVisible} className="pass_icon" />
          )}
        </div>
        <span className="text-red-500 text-center">{error}</span>
        <div className="flex">
          <button
            className="relative btn flex justify-center"
            type="submit"
            disabled={loading}
          >
            <div
              hidden={!loading}
              className="absolute animate-spin ease-linear rounded-full border-4 border-t-4 border-gray-200 h-7 w-7"
              style={{
                borderTopColor: "blue",
              }}
            ></div>
            Login
          </button>
        </div>
      </form>
      {/* </div> */}
    </div>
  );
};

export default login;

export async function getServerSideProps(context) {
  const cookies = nookies.get(context);

  const username = cookies.user;
  if (username) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
