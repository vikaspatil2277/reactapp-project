import "./App.css";
import BlogRoute from "./BlogRoute/BlogRoute";
import Details from "./Components/Details";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
// import { useContext } from 'react';
// import { store } from './Components/Details';

function App() {
  return (
    <div>
      <Details>
        <Header />
        <NavBar />
        <BlogRoute />
      </Details>
      <Footer/>
    </div>
  );
}

export default App;
