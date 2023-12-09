import React from "react";
import Navbar from "./components/Header/Navbar";
import Background from "./components/background/Background";
import Button from "./components/buttons/Button";
import Card from "./components/Menu/Card";
import Pagination from "./components/pagnation/Pagination";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import CardData from "./CardData";

function App() {
  // get all cat unique
  const allCatagory = [
    "All Menu",
    ...new Set(CardData.map((item) => item.catagory)),
  ];
  console.log(allCatagory);
  const [itemsData, setitemsData] = useState(CardData);
  // filter by catagory
  const filterbyButtons = (cat) => {
    if (cat === "All Menu") {
      setitemsData(CardData);
    } else {
      const newArr = CardData.filter((item) => item.catagory === cat);
      setitemsData(newArr);
    }
  };
  // filter by search form
  const filterbySearch = (word) => {
    if (word !== "") {
      const newArr = CardData.filter((item) => item.catagory === word);
      setitemsData(newArr);
    }
  };
  return (
    <div>
      <Navbar filterbySearch={filterbySearch} />
      <Background />
      <Button filterbyButtons={filterbyButtons} allCatagory={allCatagory} />
      <Card itemsData={itemsData} />
      <Pagination />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
