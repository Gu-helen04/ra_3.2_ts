import '../App.css'
import Listing from './Listing';
import etsyJson from '../data/etsy.json';

function App() {
  return (
    <>
      <Listing items={etsyJson}/>
    </>
  )
}

export default App
