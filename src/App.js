import "./App.css";
import Header from "./components/header/Header";
function App() {
  return (
    <div className="App">
    <Header/>
    <nav className="navigation">
    <div className="wrapper flex justify-between">
    <div className="search_box">
    <input type="search" placeholder="find something you love" className="serach-input"/>
    </div>
    <ul className="flex items-center navigation-items pl-5">
    <li className="navigation-item"><a href="#">Bedroom</a></li>
    <li className="navigation-item pl-7"><a href="#">living room</a></li>
    <li className="navigation-item pl-7"><a href="#">kitchen & dinning</a></li>
    <li className="navigation-item pl-7"><a href="#">Sign in / sign up</a></li>
   
    </ul>
    </div>
    </nav>
    </div>
  );
}

export default App;
