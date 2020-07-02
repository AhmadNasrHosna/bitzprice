import Fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Prices from "../components/Prices";

function Index({ bpi }) {
  return (
    <Layout>
      <h1>Welcome to BitzPrice</h1>
      <h6 className="mt-4">Check current Bitcoin rate</h6>
      <Prices bpi={bpi} />
    </Layout>
  );
}

Index.getInitialProps = async function () {
  const result = await fetch(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );
  const data = await result.json();

  return {
    bpi: data.bpi,
  };
};

export default Index;
