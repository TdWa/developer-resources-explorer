import React from "react";
import { useSelector } from "react-redux";
import "./OverviewCards.css";
import { selectDevelopers } from "../store/developers/selectors";
import { selectResources } from "../store/resources/selectors";

export default function OverviewCard() {
  const developers = useSelector(selectDevelopers);
  const resources = useSelector(selectResources);

  return (
    <div className="container">
      <div className="overviewCard">
        <p style={{ fontSize: 30, marginBottom: 0 }}>{developers.length}</p>
        <p>developers</p>
      </div>
      <div className="overviewCard">
        <p style={{ fontSize: 30, marginBottom: 0 }}>{resources.length}</p>
        <p>resources</p>
      </div>
    </div>
  );
}
