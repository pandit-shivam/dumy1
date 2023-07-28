import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListTask from './Components/ListTask';
import Navbar from './Components/Navbar';
import TableFile from './Components/TableFile';
// import LargeCard from './Components/LargeCard';
// import SmallCard from './Components/SmallCard';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <ListTask/>} />
          <Route path="Navbar" element={ <Navbar/>} />
          <Route path="TableFile" element={ <TableFile/>} />
          {/* <Route path="LargeCard" element={ <LargeCard/>} /> */}
          {/* <Route path="SmallCard" element={ <SmallCard/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
