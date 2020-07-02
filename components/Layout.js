import Head from "next/head";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>BitzPrice</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/litera/bootstrap.min.css"
        />
      </Head>
      <Navbar />
      <div className="container">{children}</div>
    </>
  );
}

export default Layout;
