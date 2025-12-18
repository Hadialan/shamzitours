import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

// Placeholder pages
const ServicesPage = () => <div className="p-5 text-center"><h1>Services</h1><p>Coming Soon</p></div>;
const DestinationsPage = () => <div className="p-5 text-center"><h1>Destinations</h1><p>Coming Soon</p></div>;
const AboutPage = () => <div className="p-5 text-center"><h1>About Us</h1><p>Coming Soon</p></div>;
const ConnectPage = () => <div className="p-5 text-center"><h1>Connect With Us</h1><p>Coming Soon</p></div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="destinations" element={<DestinationsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="connect" element={<ConnectPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
