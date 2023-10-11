import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Products from './components/Products';

import './App.css'

const App = () => {
  return (
    <main>
        <div className="main">
            <div className="app">
                <Hero />
                <About />
                <Portfolio />
                <Contact />
                <Products/>
            </div>
        </div>
        </main>
  )
}

export default App
