import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import NotFound from './components/NotFound'

const App = () => (
  <div className="border-line">
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
)

export default App
