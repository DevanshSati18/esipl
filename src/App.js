import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Common/Navbar';
import Footer from './Common/Footer';

import Gallery from './Pages/Gallery/Gallery';

//Knowledge Center 

//What We Do
import GeohazardMitigation from './Pages/WhatWeDo/GeohazardMitigation.jsx'
import GroundImprovements from './Pages/WhatWeDo/GroundImprovements.jsx';
import GeosyntheticPavementApplications from './Pages/WhatWeDo/GeosyntheticPavementApplications.jsx'
import ReinforcedSoilSlope from './Pages/WhatWeDo/ReinforcedSoilSlope.jsx'
import ErosionControl from './Pages/WhatWeDo/ErosionControl.jsx'
import RepairRehabilitation from './Pages/WhatWeDo/Repair&Rehabilitation.jsx'
import FrictionSlabcumCrashBarrier from './Pages/WhatWeDo/FrictionSlabcumCrashBarrier.jsx'

//Projets
import Projects from './Pages/Projects/Projects.jsx'
import RetainingStructures from './Pages/WhatWeDo/RetainingStructures.jsx';


// Lazy load pages
const HomePage = lazy(() => import('./Pages/Home/HomePage'));
/* const Gallery = lazy(() => import('./Pages/Gallery/Gallery')); */

// Layout Component 
function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="/gallery" element={<Gallery />} />
            {/* Add more routes for the application dropdown links */}

            {/* What We Do pages path */}
            <Route path='/GeohazardMitigation' element={<GeohazardMitigation />} />
            <Route path='/GroundImprovements' element={<GroundImprovements />} />
            <Route path='/RetainingStructures' element={<RetainingStructures />} />
            <Route path='/GeosyntheticPavementApplications' element={<GeosyntheticPavementApplications />} />
            <Route path='/ReinforcedSoilSlope' element={<ReinforcedSoilSlope />} />
            <Route path='/ErosionControl' element={<ErosionControl />} />
            <Route path='/RepairRehabilitation' element={<RepairRehabilitation />} />
            <Route path='/FrictionSlabcumCrashBarrier' element={<FrictionSlabcumCrashBarrier />} />

            {/* Projects pages path */}
            <Route path='/Projects' element={<Projects />} />
            <Route path="*" element={<div>404 Not Found</div>} /> {/* Fallback for undefined routes */}
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
