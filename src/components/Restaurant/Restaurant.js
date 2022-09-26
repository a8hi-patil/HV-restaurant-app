import React from "react";
import { useEffect, useState } from "react";
import "./Restaurant.css";

export default function Restaurant() {
  const [menudata, setMenudata] = useState({
    flag: false,
    foodData: null,
    drinksData: null,
  });

  async function getData() {
    let url = "http://localhost:3200/data";
    let response = await fetch(url);
    let responseData = await response.json();
    // console.log("5555555555");
    // console.log(responseData);
    // console.log("5555555555");

    // console.log("set state A");
    setMenudata({
      flag: true,
      foodData: responseData[0],
      drinksData: responseData[1],
    });
    // console.log("set state A");
    // console.log(menudata);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1 align="left">Omkar's Special</h1>
      {menudata.flag == true ? (
        <div>
          <div className="food-item">
            <table>
              <th>Food</th>
              <th>Price</th>
              {menudata.foodData.map((item, indx) => {
                return (
                  <tr key={indx}>
                    <td>{item.foodName}</td>

                    <td> {item.price}</td>
                  </tr>
                );
              })}
            </table>
          </div>
          <br /> <br />
          <div className="drink-item">
            <table>
              <th>Drink</th>
              <th>Price</th>
              {menudata.drinksData.map((item, indx) => {
                return (
                  <tr key={indx}>
                    <td>{item.drinkName}</td>
                    <td>{item.price}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      ) : (
        <h1>Loading........</h1>
      )}
    </div>
  );
}
