import React, { Suspense, lazy, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Body from "./components/Body";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Body />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <Header />
                  <About />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Header />
                  <Contact />
                </>
              }
            />
            <Route
              path="/cart"
              element={
                <>
                  <Header />
                  <Cart />
                </>
              }
            />
            <Route
              path="/grocery"
              element={
                <>
                  <Header />
                  <Suspense
                    fallback={
                      <div className="loader">
                        <Oval
                          visible={true}
                          height="80"
                          width="80"
                          color="#4fa94d"
                          ariaLabel="oval-loading"
                          wrapperStyle={{}}
                          wrapperClass=""
                        />
                      </div>
                    }
                  >
                    <Grocery />
                  </Suspense>
                </>
              }
            />
            <Route
              path="/restaurant/:resId"
              element={
                <>
                  <Header />
                  <RestaurantMenu />
                </>
              }
            />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppLayout />
  </React.StrictMode>
);
