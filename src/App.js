import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import About from './functionBased/pages/About';
import NotMatch from './functionBased/pages/NotMatch';
import AboutAuthor from './components/AboutAuthor';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<TodoContainer />} />
          <Route exact path="/about/about-author" element={<AboutAuthor />} />
          <Route exact path="/about/about-app" element={<AboutAuthor />} />

          <Route exact path="*" element={<NotMatch />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
