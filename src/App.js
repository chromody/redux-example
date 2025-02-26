import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Counter from './views/counter';  // Import your Counter component

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Define your route with 'path' and 'element' */}
          <Route path="/" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
