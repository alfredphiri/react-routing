import { Routes, Route, useLocation } from "react-router-dom"
import { ThemeProvider } from './context/ThemeContext'
import { Layout } from './components/Layout'
import { Error404 } from './components/error404'
import { Home } from './components/home'
import { Series } from './components/series'
import { Movies } from './components/movies'
import { Latest } from './components/latest'
import { Contacts } from './components/contacts'
import { SignIn } from './components/signIn'
import { SignUp } from './components/signUp'
import { AnimatePresence } from 'framer-motion'
import './Myapp.css'

function App() {
  const location = useLocation();

  return (
    <ThemeProvider>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/series" element={<Series />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/latest" element={<Latest />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  )
}

export default App
