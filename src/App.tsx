import { BrowserRouter, Route, Routes } from 'react-router-dom';

// common
import Header from "./Components/Header";
import Logos from "./Components/Logos";
import Footer from "./Components/Footer";

// components
import WhatWeDo from "./Components/WhatWeDo";
import About from "./Components/About";

import Monkeypox from "./Components/Monkeypox";
import WNV from "./Components/WNV";

import Results from "./Components/Results";
import ClinicalInterest from "./Components/ClinicalInterest";
import News from "./Components/News";
import Contact from "./Components/Contact";

import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <div className="Site">
          <Header />
          <div className="Site-content">
            <Routes>
              <Route path='surveillance_circuit/' element={<WhatWeDo />} />
              <Route path='surveillance_circuit/about' element={<About />} />

              <Route path='surveillance_circuit/Monkeypox' element={<Monkeypox />} />
              <Route path='surveillance_circuit/WNV' element={<WNV />} />

              <Route path='surveillance_circuit/results' element={<Results />} />
              <Route path='surveillance_circuit/clinical' element={<ClinicalInterest />} />
              <Route path='surveillance_circuit/news' element={<News />} />
              <Route path='surveillance_circuit/contact' element={<Contact />} />

              <Route path='*' element={<WhatWeDo />}></Route>
            </Routes>
          </div>
          <Logos />
          <Footer />
        </div>
      </BrowserRouter >
    </RecoilRoot>

  );
}

export default App;
