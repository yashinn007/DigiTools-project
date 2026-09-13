import "./App.css";
import Banner from "./components/homepage/banner/Banner";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Banner></Banner>
      </main>
    </>
  );
}

export default App;
