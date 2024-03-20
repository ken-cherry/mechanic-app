import "./App.css";
import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Hero, Layout, Customers } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: "customers",
        element: <Customers />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <main>
        <RouterProvider router={router} />
      </main>
    </>
  );
}

export default App;
