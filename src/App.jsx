import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import AtaGlance from './Pages/AtaGlance'
import Chairman from './Pages/Chairman'
import Financial from './Pages/Financial'
import GulfOilInternational from './Pages/GulfOilInternational'
import HindujaGroup from './Pages/HindujaGroup'
import Home from './Pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ManagingDirector from './Pages/ManagingDirector'
import MarketOverview from './Pages/MarketOverview'
import UnlockPage from './Pages/Unlock'
import CorporateIdentity from './Pages/CorporateIdentity'
import StrategicP from './Pages/StrategicP'
import SuperiorP from './Pages/SuperiorP'
import EnhancingV from './Pages/EnhancingV'
import DigitalTrans from './Pages/DigitalTrans'
import EMobilityTrans from './Pages/EMobilityTrans'

function App() {

  return (
<div>
  <BrowserRouter> 
  <Navbar/>
  <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/at-a-glance" element={<AtaGlance/>} />
  <Route path="/chaimans-message" element={<Chairman/>} />
  <Route path="/key-performance-indicators" element={<Financial/>} />
  <Route path="/gulf-oil-international" element={<GulfOilInternational/>} />
  <Route path="/hinduja-group" element={<HindujaGroup/>} />
  <Route path="/md-and-ceos-message" element={<ManagingDirector/>} />
  <Route path="/market-overview" element={<MarketOverview/>} />
  <Route path="/unlock-2.0" element={<UnlockPage/>} />
  <Route path="/corporate-identity" element={<CorporateIdentity/>} />
  <Route path="/strategic-pathways-to-growth-opportunities" element={<StrategicP/>} />
  <Route path="/superior-products-and-advanced-technology" element={<SuperiorP/>} />
  <Route path="/enhancing-value" element={<EnhancingV/>} />
  <Route path="/digital-transformation" element={<DigitalTrans/>} />
  <Route path="/e-mobility-transformation" element={<EMobilityTrans/>} />
  </Routes>
  <Footer/>
  </BrowserRouter> 
</div>
  )
}

export default App
