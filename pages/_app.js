
import AuthContext from "../context/AuthContext";
import "../styles/globals.css";
import NextNProgress from 'nextjs-progressbar';
import { Toaster } from "react-hot-toast";



export default function App({ Component, pageProps }) {
  return (
    <AuthContext>
      <NextNProgress />
      <Component {...pageProps} />
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </AuthContext>
  );
}
