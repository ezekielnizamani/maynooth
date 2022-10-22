import "./App.css";
import Logo from "./assets/logo.svg";
import Facebook from "./assets/images/icons/facebook.svg";
import Instagram from "./assets/images/icons/instagram_icon.svg";
import Pinterest from "./assets/images/icons/pinterest_icon.svg";
function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="wrapper flex justify-between">
          <select>
            <option selected>USD</option>
          </select>
          <img className="logo" src={Logo} alt="maynooth logo" />

          <ul className="social-medias_list flex items-center">
            <li className="social-media_item">
              <a
                href="https://www.facebook.com/hazqeel.niz.2"
                alt="hizqel nizamani facebook"
              >
                <img src={Facebook} alt="facebook icon" />
              </a>
            </li>
            <li className="social-media_item">
              <a
                href="https://www.facebook.com/hazqeel.niz.2"
                alt="hizqel nizamani instagram"
              >
                <img src={Instagram} alt="Instagram icon" />
              </a>
            </li>
            <li className="social-media_item">
              <a
                href="https://www.facebook.com/hazqeel.niz.2"
                alt="hizqel nizamani pinterest"
              >
                <img src={Pinterest} alt="pinterest icon" />
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
