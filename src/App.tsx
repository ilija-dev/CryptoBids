import { useState } from "react";
import MainContent from "./components/Page/MainContent/MainContent";
import PageLayout from "./components/layout/PageLayout";

const App = () => {
  const [selectedSport] = useState("all");
  return (
    <PageLayout children={<MainContent selectedCategory={selectedSport} />} />
  );
};

export default App;
