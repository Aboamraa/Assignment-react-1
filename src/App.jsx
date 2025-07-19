import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Portfolio from "./components/Pages/Portfolio/Portfolio";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";
import Error from "./components/Pages/Error/Error";
import Home from "./components/Pages/Home/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  { path: "*", element: <Error /> },
]);
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={routes} />

      {/* <About /> */}
    </>
  );
}

export default App;
