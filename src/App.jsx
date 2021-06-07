import React from "react";
import { ChevronLeftIcon, LightningBoltIcon } from "./Icons";

function App() {
  return (
    <div className="absolute 8 inset-0 flex flex-col">
      <div className="bg-white h-24 p-8 justify-between text-lg font-medium hidden md:flex">
        <span>Home</span>
        <span>Pricing</span>
        <span>Login</span>
      </div>
      <div className="flex flex-col justify-between bg-indigo-800 flex-grow">
        <div className="p-8 ">
          {/* HEADER */}
          <div className="mt-8 flex justify-between items-center">
            <ButtonCircle>
              <ChevronLeftIcon className="h-4 w-4" />
            </ButtonCircle>
            <SearchBar />
          </div>
          {/* TITLE */}
          <div className="flex items-center justify-between mt-16 ">
            <LightningBoltIcon className="text-white opacity-50 w-8 h-8" />
            <div className="text-right text-white">
              <div className="text-5xl font-black">Ambient</div>
              <div className="font-semibold">
                72 listerners - created by Eric
              </div>
            </div>
          </div>
        </div>
        {/* PLAYLIST */}
        <div className="mt-12 bg-white rounded-tl-alot shadow-lgnoblur flex-grow"></div>
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <input
      type="text"
      placeholder="Song"
      className="w-72 md:flex-grow md:ml-8 text-white py-4 px-4 -mr-8 rounded-l-full bg-white-opacity outline-none ring-opacity-50 ring-white focus:ring-2"
    />
  );
}

function ButtonCircle({ children }) {
  return (
    <button className="text-white bg-white-opacity w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-100 ease-in-out transform hover:scale-150">
      {children}
    </button>
  );
}

export default App;
