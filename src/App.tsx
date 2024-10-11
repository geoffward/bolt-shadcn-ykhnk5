import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Wizard from './components/Wizard';
import PersonalInfo from './components/PersonalInfo';
import AddressInfo from './components/AddressInfo';
import CoverageInfo from './components/CoverageInfo';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-full max-w-2xl p-8 space-y-8">
          <Routes>
            <Route path="/" element={<Wizard />}>
              <Route index element={<PersonalInfo />} />
              <Route path="address" element={<AddressInfo />} />
              <Route path="coverage" element={<CoverageInfo />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;