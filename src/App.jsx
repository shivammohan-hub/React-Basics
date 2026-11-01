import Footer from "./components/Footer"
import Home from "./components/Home"
import Log from "./components/Log"
import Navbar from "./components/Navbar"
import ProductCard from "./components/ProductCard"
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
      {/* <Navbar />
      <Home />
      <Footer /> */}


      {/* Q.3 Create a product listing page with at least 6 products. Store product details in an array of objects and use `.map()` to display each product through a reusable `ProductCard` component. Each card should display the product name, price, and category. */}
      {/* <ProductCard /> */}


      {/* Q.4 Create a login interface using `useState`. Display “Welcome Back!” when the user is logged in and “Please Login” when logged out. Add a button to toggle between the two states. */}
      <Log />


      {/* Q.5 Create a `ResultCard` component that accepts a student's name and marks through props. Display “Pass” if marks are 40 or above; otherwise, display “Fail”. Show results for at least 5 students. */}



      {/* Q.6 Todo List Application */}



      {/* Q.7 Create a student list containing at least 8 names. Add a search input that filters students by name as the user types. Use state to manage the search value and `.map()` to display the filtered list. */}



      {/* Q.8 Create a reusable `PostCard` component that displays a post title and description. Add Like and Dislike buttons with separate counters for each post. Display at least 3 posts using props and state. */}



      {/* Q.9 Create an FAQ section containing at least 5 questions and answers. When a user clicks a question, its answer should appear. Clicking the same question again should hide the answer. Use reusable components, props, event handlers, and state. */}



      {/* Q.10 Create a mini shopping cart interface with at least 5 products. Each product should have a name, price, and Add to Cart button. When the button is clicked, update the cart item count and display the total price of the added products.
      Use components, props, lists, event handling, and `useState`. */}

      


    </>
  )
}

export default App
