import "./App.css";
import SideBar from "./Components/SideBar";
import Container from "./Components/Container";
import B1 from "./Components/libaray1";
import B2 from "./Components/libaray2";
// import Help from "./Components/Help";
// import Profile from "./Components/Profile";
import Chat from "./Components/Chat";
// import Store from "./Components/Store";
import Music from "./Components/Listen";
// import Cat from "./Components/Cat";
import News from "./Components/News";
import Us from "./Components/Us";
import Todo from "./Components/Todo";
import Weather from "./Components/Weather";


// import Chart from "./Components/Chart";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">

        <Router>
          <SideBar />
          {/* <Container /> */}
          <Routes>
            <Route path="/" element={<Container />} />
            <Route path="/Bib1" element={<B1 />} />
            <Route path="/Bib2" element={<B2 />} />
            {/* <Route path="/home/help" element={<Help />} /> */}
            {/* <Route path="/profile" element={<Profile />} /> */}
            {/* <Route path="/store" element={<Store />} /> */}
            <Route path="/home/chat" element={<Chat />} />
            <Route path="/home/music" element={<Music />} />
            {/* <Route path="/home/cat" element={<Cat />} /> */}
            <Route path="/home/news" element={<News />} />
            <Route path="/home/us" element={<Us />} />
            <Route path="/home/todo" element={<Todo />} />
            <Route path="/home/weather" element={<Weather />} />
            {/* <Route path="/chart" element={<Chart />} /> */}
          
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
