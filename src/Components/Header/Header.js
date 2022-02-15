import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./styles.scss";

export default function Header() {
  let history = useHistory();
  let location = useLocation();

  return (
    <div className="header-body">
      <div
        className="title"
        onClick={() => {
          history.push({
            pathname: `/main`,
            state: {
              detail: "I am from Search Bar",
            },
          });
        }}
      >
        Weather App
      </div>
    </div>
  );
}
