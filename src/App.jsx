import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import StudentCard from "./components/StudentCard"

function App() {
  return (
    <>
      {/* Q.1 Student Profile Cards */}
      {/* <StudentCard name="Shivam" course="CSE" marks="88"/>
      <StudentCard name="Ankit" course="BCA" marks="89"/>
      <StudentCard name="Akash" course="CSE" marks="90"/>
      <StudentCard name="Om" course="BCA" marks="91"/> */}

      {/* Q.2 Create separate components named `Navbar`, `Home`, and `Footer` in different files. Export and import them into `App.jsx` to display a complete webpage. */}
      <Navbar />
      <Home />
      <Footer />

    </>
  )
}

export default App
