import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
// import StudentData from "./components/StudentData";
import VerifierData from "./components/VerifierData";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    },
    // {
    //   path: "/studentdata",
    //   element: <StudentData />,
    // },
    {
      path: "/applicantdata",
      element: <VerifierData />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
