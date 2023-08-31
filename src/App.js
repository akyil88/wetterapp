import { useEffect, useState } from "react";
import "./App.css";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import Form from "./Form.js";
import List from "./List.js";

export default function App() {
  const [isForGoodWeather, setIsForGoodWeather] = useState(null);
  const [entries, setEntries] = useLocalStorageState("activities", {
    defaultValue: [
      {
        id: uid(),
        activityName: "Swimming in the sea",
        isForGoodWeather: true,
      },
    ],
  });

  async function fetchWeather() {
    const response = await fetch("https://example-apis.vercel.app/api/weather");
    const weatherData = await response.json();
    setIsForGoodWeather(weatherData.isGoodWeather);
  }
  useEffect(() => {
    fetchWeather();
  }, []);

  const filteredArray = entries.filter((entry) => {
    return entry.isForGoodWeather === isForGoodWeather;
  });

  function handleSubmit(activityName, isForGoodWeather) {
    setEntries([
      {
        id: uid(),
        activityName: activityName,
        isForGoodWeather: isForGoodWeather,
      },
      ...entries,
    ]);
  }
  if (isForGoodWeather === null) {
    return null;
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      </header>
      <main>
        <Form onAddActivity={handleSubmit} />
        <List entries={filteredArray} isForGoodWeather={isForGoodWeather} />
      </main>
    </div>
  );
}
