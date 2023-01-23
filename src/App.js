import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import WeatherAPPProvider from './Context/Context';

function App() {
  return (
    <div className="App">
      <WeatherAPPProvider>
        <Home/>
      </WeatherAPPProvider>
      
    </div>
  );
}

export default App;
