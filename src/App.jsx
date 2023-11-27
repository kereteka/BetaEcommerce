import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import SearchBar from "./components/SearchBar";
import useGetSessionId from "./hooks/useGetSessionId";
import { HomePage } from "./pages/home-page";

function App() {
  const { sessionId, isError, isLoading } = useGetSessionId();
  const storedSessionId = sessionStorage.getItem("sessionId");
  return (
    <>
      <SearchBar />
      <HomePage />
    </>
  );
}

export default App;
