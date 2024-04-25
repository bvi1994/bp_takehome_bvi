/**
 * The main component of the application.
 * @returns {JSX.Element} The rendered component.
 */
import './App.css';
import DigitalCard from './components/Level3/DigitalCard/DigitalCard';
import mockValues from './mockvalues.constants'; // This will be used for testing purposes, simulate the data from the API for purposes of this take-home

function App() {
  return (
    <div 
      className={"flex-column"}
    >
      <h2>{"Flex Card"}</h2>
      <h3>{"Used for purchases"}</h3>
      <DigitalCard {...mockValues}/>
    </div>
  )
}

export default App;
