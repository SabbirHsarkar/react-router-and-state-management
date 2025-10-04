
import { Suspense } from 'react'
import './App.css'
import DaisyUiNavbar from './Components/DaisyUiNavbar/DaisyUiNavbar'
import NavBar from './Components/NavBar/NavBar'
import PricingOptions from './Components/PricingOptions/PricingOptions'
import ResultChart from './Components/ResultChart/ResultChart'
import axios from 'axios'
import MarkChart from './Components/MarksChart/MarkChart'


const pricingPromise=fetch('pricingData.json').then(res=>res.json());
 const marksPromise=axios.get('marksData.json');

function App() {
 

  return (
    <>
  <NavBar></NavBar>
  <header>
    {/* <DaisyUiNavbar></DaisyUiNavbar> */}
  </header>
  <main>
    <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
      <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
    </Suspense>

   <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
    <MarkChart marksPromise={marksPromise}></MarkChart>
   </Suspense> 

    <ResultChart ></ResultChart>
  </main>
    </>
  )
}

export default App
