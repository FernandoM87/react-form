import * as React from 'react';
import { ApplicationsForm, ApplicationsResult } from "./components/Index";
import { Routes, Route } from "react-router-dom";

function App () {

  return (
    <div>
      <Routes>
        <Route path="/" element={<ApplicationsForm/>} />
        <Route path="/apply-page-res" element={<ApplicationsResult />} />
      </Routes>
    </div>
  )
}


export default App
