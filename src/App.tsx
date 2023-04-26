import PageLayout from "./components/layout/PageLayout";
import { CategoryProvider } from "./state/context/CategoryContext";

const App = () => {
  return (
    <CategoryProvider>
    <PageLayout/>
    </CategoryProvider>
  );
};

export default App;
