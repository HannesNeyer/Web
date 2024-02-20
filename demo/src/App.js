import FootballTableReact from './components/footballCompoonents/FootballTableReact';
import FootballTeamsReact from './components/footballCompoonents/FootballTeamsReact';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FootballTableReact/>,
  },
  {
    path: "/Clubs",
    element: <FootballTeamsReact/>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;