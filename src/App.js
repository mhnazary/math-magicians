import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Calculator from './components/calculator';
import QuoteComponent from './components/QuoteComponent';
import HomePage from './components/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<QuoteComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
