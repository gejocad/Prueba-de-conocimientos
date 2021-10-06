import React, { useState } from "react";
import "./App.css";
import CityConditions from "@components/pages/CityConditions";
import NavBar from "@components/pages/NavBar";
import WeatherMap from "@components/pages/WeatherMap";
import WeekConditions from "@components/pages/WeekConditions.jsx";

const Dashboard = () => {
    const [city, setCity] = useState({
        lat: "4.605575533040425",
        lng: "-74.10191003067288",
      });
      return (
        <div className="App">
          <NavBar setLocation={setCity} />
          <CityConditions location={city} />
          <WeatherMap location={city} />
          <WeekConditions location={city} />
        </div>
      );
    }
export default Dashboard;
