import React, { useState } from "react";

function Prices({ bpi }) {
  const [currency, setCurrency] = useState("USD");
  let list = "";

  if (currency === "USD") {
    list = (
      <li className="list-group-item">
        Bitcoin rate for {bpi.USD.description}:{" "}
        <span className="badge badge-primary">{bpi.USD.code}</span>{" "}
        <strong>{bpi.USD.rate}</strong>
      </li>
    );
  } else if (currency === "GBP") {
    list = (
      <li className="list-group-item">
        Bitcoin rate for {bpi.GBP.description}:{" "}
        <span className="badge badge-primary">{bpi.GBP.code}</span>{" "}
        <strong>{bpi.GBP.rate}</strong>
      </li>
    );
  } else if (currency === "EUR") {
    list = (
      <li className="list-group-item">
        Bitcoin rate for {bpi.EUR.description}:{" "}
        <span className="badge badge-primary">{bpi.EUR.code}</span>{" "}
        <strong>{bpi.EUR.rate}</strong>
      </li>
    );
  }
  return (
    <>
      <ul className="list-group mt-4">{list}</ul>
      <select
        className="form-control mt-4 bg-light col-md-2"
        onChange={(e) => setCurrency(e.currentTarget.value)}
      >
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        <option value="EUR">EUR</option>
      </select>
    </>
  );
}

export default Prices;
