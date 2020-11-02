import React from "react";
import { useSelector } from "react-redux";
import ResourceCard from "./ResourceCard";
import { selectResources } from "../store/resources/selectors";

export default function ResourcesSection() {
  const resources = useSelector(selectResources);

  return (
    <div id="allResources">
      <h2>All resources</h2>
      <div>
        {resources.map((resource) => {
          return <ResourceCard key={resource.id} {...resource} />;
        })}
      </div>
    </div>
  );
}
