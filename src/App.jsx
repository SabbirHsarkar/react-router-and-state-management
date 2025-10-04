
import { Suspense } from 'react'
import './App.css'
import DaisyUiNavbar from './Components/DaisyUiNavbar/DaisyUiNavbar'
import NavBar from './Components/NavBar/NavBar'
import PricingOptions from './Components/PricingOptions/PricingOptions'


const pricingPromise=fetch('pricingData.json').then(res=>res.json());

function App() {
 

  return (
    <>
  <NavBar></NavBar>
  <header>
    {/* <DaisyUiNavbar></DaisyUiNavbar> */}
  </header>
  <main>
    <Suspense fallback='<span className="loading loading-bars loading-xl"></span>'>
      <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
    </Suspense>
  </main>
    </>
  )
}

export default App
