import axios from "axios";
import React, { useState } from "react";
import WeatherCard from "../../Components/Cards/WeatherCard/WeatherCard";
import Input_Field from "../../Components/Input/Input";
import Cliploader from "../../Components/Loader/ClipLoader/ClipLoader";
import Search from "../../Components/Search/Search";
import "./HomePage.scss";

export default function HomePage() {
  const [loading, setloading] = useState(false);
  const [country, setcountry] = useState("");
  const [results, setresults] = useState([]);
  const [render, setrender] = useState(false);

  const getResults = async (val) => {
    setloading(true);
    await axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${val.lat}&lon=${val.lon}&appid=39ac41ad6d4b5d4498d6bf81de469910`
      )
      .then(function (response) {
        console.log(response.data);
        let temp = results;
        temp.push(response.data);
        setresults(temp);
        setloading(false);
      })
      .catch(function (error) {
        console.log(error);
        setloading(false);
      });
    setrender(!render);
  };

  const getData = async (val) => {
    setloading(true);
    setresults([]);
    if (val !== "" && country !== "") {
      await axios
        .get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${val},${country}&limit=5&appid=39ac41ad6d4b5d4498d6bf81de469910`
        )
        .then(function (response) {
          if (response.data.length > 0) {
            response.data.forEach((element) => {
              getResults(element);
            });
            setloading(false);
          }
          setloading(false);
        })
        .catch(function (error) {
          console.log(error);
          setloading(false);
        });
    }
  };

  return (
    <div>
      <Cliploader loading={loading} />
      {/* Country Search */}
      <Search country={(val) => setcountry(val)} />
      <br />
      <br />
      {/* City Search */}
      <Input_Field getData={(val) => getData(val)} />
      <div
        style={{
          padding: "20px",
          textAlign: "left",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        {results.length > 0 ? "Results" : "Nothing To Show"}
      </div>
      {results.length > 0
        ? results.map((element, index) => (
            <WeatherCard key={index} data={element} />
          ))
        : null}
    </div>
  );
}
