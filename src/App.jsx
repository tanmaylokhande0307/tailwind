import React from "react";
import { NavBar, Hero } from "./components/";

const App = () => {
  return <div className="bg-primary w-full overflow-hidden">
    <div className="px-6 sm:px-16 flex justify-center items-center">
      <div className="w-full xl:max-w-[1280px]">
        <NavBar />
      </div>
    </div>

    <div className="bg-primary flex justify-center items-start">
      <div className="xl:max-w-[1280px] w-full">
        <Hero />
      </div>
    </div>

    <div className="bg-primary flex justify-center items-start sm:px-16 px-6">
      <div className="xl:max-w-[1280px] w-full">
        Hero
      </div>
    </div>

  </div>;
};

export default App;
