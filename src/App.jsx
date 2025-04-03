import "./App.css";
import Navbar from "./components/navbar/navbar";
import Landingpage from "./pages/landingpage/landingpage";
import SecondPage from "./pages/second-page/SecondPage";
import ThirdPage from "./pages/thirdPage/thirdPage";
function App() {
  return (
    <div>
      <Navbar />
      <Landingpage />
      <SecondPage />
      <ThirdPage />
    </div>
  );
}

export default App;
