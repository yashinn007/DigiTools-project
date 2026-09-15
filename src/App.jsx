import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/homepage/banner/Banner";
import PremiumContainer from "./components/homepage/PremiumContainer/PremiumContainer";
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

const productsDataPromise = fetch("data.json").then((res) => res.json());

function App() {
  // set state for cart data
  const [cartData, setCartData] = useState([]);

  return (
    <>
      <header>
        <Navbar cartData={cartData}></Navbar>
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
            setCartData={setCartData}
            cartData={cartData}
          ></PremiumContainer>
        </Suspense>
      </main>

      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
