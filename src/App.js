import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import HomePage from "./pages/homePage/HomePage";
import BlogPage from "./pages/blogPage/BlogPage";
import WorkIntoPage from "./pages/workIntoPage/WorkIntoPage";
import ContactsPage from "./pages/contactsPage/ContactsPage";
import WorksPage from "./pages/workPage/WorksPage";
import { blogs_data } from "./data/blogs_data";
import { works_data } from "./data/works_data";

function App() {
  const newPosts = blogs_data.slice(0, 2);
  const postsBlog = blogs_data.slice(0, 5);
  const newWorks = works_data.slice(0, 3);

  const getDateToDisplay = (date) => {
    const a = new Date(date);
    const dateToDisplay = a.toLocaleString("en-AU", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    return dateToDisplay;
  };

  return (
    <div className="wrapper_app">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                newPosts={newPosts}
                newWorks={newWorks}
                getDateToDisplay={getDateToDisplay}
              />
            }
          />
          <Route
            path="/blog"
            element={
              <BlogPage
                postsBlog={postsBlog}
                getDateToDisplay={getDateToDisplay}
              />
            }
          />
          <Route
            path="/works"
            element={<WorksPage works_data={works_data} />}
          />
          <Route
            path="/works/:id"
            element={<WorkIntoPage works_data={works_data} />}
          />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
