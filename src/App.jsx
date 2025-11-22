import { Link } from "react-router-dom"

function App() {

  return (
    <div>
      <header>
        <nav>
          <div className="header-nav">

            {/* logo */}
            <div className="logo">
              <Link to="/" className="my-logo">alfred</Link>
            </div>

            {/* center header list */}
            <div className="header-center">
              <Link to="/" className="home">Home</Link>
              <Link to="/series" className="series">series</Link>
              <Link to="/movies" className="movies">movies</Link>
              <Link to="/latest" className="latest">latest</Link>
              <Link to="/myList" className="myList">myList</Link>
              <Link to="/contact" className="contact">contact</Link>
              <Link to="*" className="error404"></Link>
            </div>

            {/* right header */}

            <div className="right-header">
              <Link to="/" className="signIn">Sign in</Link>
              <Link to="/" className="signUp">sign up</Link>
            </div>

          </div>

        {/* mobile menu */}
          <div className="header-nav display-none">
            <Link to="/" className="header-logo"></Link>
            <Link to="/" className="header-logo"></Link>
            <Link to="/" className="header-logo"></Link>
            <Link to="/" className="header-logo"></Link>
            <Link to="/" className="header-logo"></Link>
            <Link to="/" className="header-logo"></Link>
          </div>


        </nav>
      </header>
    </div>
  )
}

export default App
