import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Home } from './page/Home';
import { CardCantaner } from "./components";

import './App.css';




function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,     
     },
     {
      path: "/cardCantaner",
      element: <CardCantaner/>     
     },
  ]);
  return <RouterProvider router={router}/>;
}

export default App;
