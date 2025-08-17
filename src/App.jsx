import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import HomeScreen from './Screen/HomeScreen/homeScreen';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <HomeScreen/>
     <Footer/>
    </div>
  );
}

export default App;
