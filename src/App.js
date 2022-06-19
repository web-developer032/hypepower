import React from "react";
import "./App.css";

// importing Component
import Home from "./components/Home";
import Work from "./components/Work";
import Service from "./components/Service";
import Features from "./components/Features";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Home />
            <Work />
            <Service />
            <Features />
            <Counter />
            <Footer />
        </>
    );
}

export default App;
