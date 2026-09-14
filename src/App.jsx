import { Suspense } from "react";
import "./App.css";
import Banner from "./components/homepage/banner/Banner";
import PremiumContainer from "./components/homepage/PremiumContainer/PremiumContainer";
import Navbar from "./components/Navbar/Navbar";

const productsDataPromise = fetch("data.json").then((res) => res.json());

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Banner></Banner>

        {/* products data */}
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <PremiumContainer
            productsDataPromise={productsDataPromise}
          ></PremiumContainer>
        </Suspense>
      </main>
    </>
  );
}

export default App;
