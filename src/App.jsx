import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import { HelloWord } from "./Pages/HelloWord";
import { Main } from "./Pages/Main";
import { Types } from "./Pages/Types";
import { Lists } from "./Pages/Lists";
import { Operators } from "./Pages/Operators";
import { Conditions } from "./Pages/Conditions";
import { Loops } from "./Pages/Loops";
import { Test } from "./Pages/Test/Test";
import { TestHW } from "./Pages/Test/TestHW";
import { TestT } from "./Pages/Test/TestT";
import { TestL } from "./Pages/Test/TestL";
import { TestO } from "./Pages/Test/TestO";
import { TestC } from "./Pages/Test/TestC";
import { TestLoo } from "./Pages/Test/TestLoo";

function App() {
  return (
    <>
      <div className="div1">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/HW" element={<HelloWord />} />
          <Route path="/T" element={<Types />} />
          <Route path="/L" element={<Lists />} />
          <Route path="/O" element={<Operators />} />
          <Route path="/C" element={<Conditions />} />
          <Route path="/Loo" element={<Loops />} />
          <Route path="/Test" element={<Test />} />
          <Route path="/TestHW" element={<TestHW />} />
          <Route path="/TestT" element={<TestT />} />
          <Route path="/TestL" element={<TestL />} />
          <Route path="/TestO" element={<TestO />} />
          <Route path="/TestC" element={<TestC />} />
          <Route path="/TestLoo" element={<TestLoo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
