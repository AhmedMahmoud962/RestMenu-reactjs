import React from "react";
import "./Card.css";
import CardData from "../../CardData";

function Card({ itemsData }) {
  return (
    <>
      <div className="container" id="menu">
        {itemsData.length >= 1 ? (
          itemsData.map((item) => {
            return (
              <div className="card" key={item.id}>
                <img loading="lazy" src={item.image} alt="" />
                <div className="card-text">
                  <div className="line">
                    <h6>{item.title}</h6>
                    <p>{item.price}</p>
                  </div>
                  <p>{item.descraption}</p>
                  <button className="buy">{item.btn}</button>
                </div>
              </div>
            );
          })
        ) : (
          <h1>no data to display</h1>
        )}
      </div>
    </>
  );
}

export default Card;
