// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";

// import Father from "./pages/Father";
// import Mother from "./pages/Mother";
// import Brother from "./pages/Brother";
// import GrandFather from "./pages/GrandFather";
// import Me from "./pages/Me";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Father />} />
//         <Route path="/mother" element={<Mother />} />
//         <Route path="/brother" element={<Brother />} />
//         <Route path="/grandfather" element={<GrandFather />} />
//         <Route path="/me" element={<Me />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Me from "./pages/Hero/Hero";
import About from "./pages/Hero/About";
import GrandFather from "./pages/GrandFather";
import Father from "../src/pages/Father";
import Mother from "../src/pages/Mother";
import Brother from "../src/pages/Brother";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Me />} />
        <Route path="/about" element={<About />} />
        <Route path="/grandfather" element={<GrandFather />} />
        <Route path="/father" element={<Father />} />
        <Route path="/mother" element={<Mother />} />
        <Route path="/brother" element={<Brother />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
