import { useState } from "react";
import { useSelector } from "react-redux";
import OverviewCards from "./components/OverviewCards";
import ResourcesSection from "./components/ResourcesSection";
import AddResourceForm from "./components/AddResourceForm";
import "./main.css";
import { selectResources } from "./store/resources/selectors";
import {
  favoritesWithThisDeveloper,
  selectLoggedinUser,
} from "./store/selectors";
import {
  selectDevelopers,
  developersWithThisFavorite,
} from "./store/developers/selectors";

function App() {
  const [resource, setResource] = useState(null);
  const [developer, setDeveloper] = useState(null);
  const resources = useSelector(selectResources);
  const developers = useSelector(selectDevelopers);
  const user = useSelector(selectLoggedinUser);

  const resId = resource && resources.find((tool) => tool.name === resource).id;
  const filteredDevelopers = useSelector(developersWithThisFavorite(resId));

  const devId =
    developer && developers.find((dev) => dev.name === developer).id;
  const filteredResources = useSelector(favoritesWithThisDeveloper(devId));

  return (
    <div>
      <p style={{ backgroundColor: "lightGray", padding: 5 }}>
        Welcome back, <strong>{user.name}</strong>!
      </p>
      <h1>Web development resources</h1>
      <OverviewCards />
      <div className="container">
        <div className="card">
          <h2>
            Who likes{" "}
            <select
              defaultValue={"Resource..."}
              onChange={(e) => setResource(e.target.value)}
            >
              <option disabled>Resource...</option>
              {resources.map((resource) => {
                return (
                  <option key={resource.id} value={resource.name}>
                    {resource.name}
                  </option>
                );
              })}
            </select>
            &nbsp;?
          </h2>
          <div>
            {resource && filteredDevelopers.length === 0
              ? "Nobody..."
              : filteredDevelopers
                  .map((developer) => developer.name)
                  .join(", ")}
          </div>
        </div>
        <div className="card">
          <h2>
            What are{" "}
            <select
              defaultValue={"Developer..."}
              onChange={(e) => setDeveloper(e.target.value)}
            >
              <option disabled>Developer...</option>
              {developers.map((developer) => {
                return (
                  <option key={developer.id} value={developer.name}>
                    {developer.name}
                  </option>
                );
              })}
            </select>
            's favorites?
          </h2>
          <div>
            {developer && filteredResources.map((res) => res.name).join(", ")}
          </div>
        </div>
      </div>
      <ResourcesSection />
      <AddResourceForm />
    </div>
  );
}

export default App;
