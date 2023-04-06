import React from "react";
import Nav from "./Nav";
import Main from "./Main";
import "../style.css";
import Data from "./Data";
export default function App() {
  const AllDAta = Data.map(function (item) {
    return <Main {...item} />;
  });
  return (
    <div>
      <Nav />
      {AllDAta}
    </div>
  );
}
