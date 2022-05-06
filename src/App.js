import React from 'react';

import { Routes, Route  } from "react-router-dom";
import {Home} from "./Components/Home/Home";
import Detail from "./Components/Detail/Detail";

function App() {

  return (
<>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/person/:id" element={<Detail />} />
    </Routes>

</>

  );
}

export default App;
