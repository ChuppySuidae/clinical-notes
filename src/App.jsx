import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn/SignIn';
import LayOut from './pages/LayOut';
import Home from './pages/Home/Home';
import Patients from './pages/Patients/Patients';
import Encounters from './pages/Encounters/Encounters';
import ListEncounters from './pages/Encounters/ListEncounters';
import CreateEncounter from './pages/Encounters/CreateEncounter/CreateEncounter';
import EncounterInfor from './pages/Encounters/EncounterInfor/EncounterInfor';
import ListPatients from './pages/Patients/ListPatients';
import PatientInfor from './pages/Patients/PatientInfor/PatientInfor';
// import Encounters from './pages/Encounters/encounters';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="search" element={<SearchPage />} /> */}
        </Route>
        <Route path="/patients" element={<Patients/>}>
              {/* <Route index element={<Patients />} /> */}
              {/* <Route path="patients" element={<PatientInfor />} />
              <Route path="encounters" element={<List />} /> */}
              <Route index element={<ListPatients />} />
              <Route path="list" element={<ListPatients />} />
              <Route path="list/:patient" element={<PatientInfor />} />
              <Route path="create" element={ <CreateEncounter/>} />
              
        </Route>
        <Route path="/encounters" element={<Encounters />}>
              <Route index element={<ListEncounters />} />
              <Route path="list" element={<ListEncounters />} />
              <Route path="list/:encounter" element={<EncounterInfor />} />
              <Route path="create" element={ <CreateEncounter/>} />
              {/* <Route path="encounters" element={<List />} /> */}
              
        </Route>
        
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
