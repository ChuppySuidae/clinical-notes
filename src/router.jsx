// import { BrowserRouter } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import LayOut from "./pages/LayOut";
import Home from "./pages/Home/Home";
import SearchPage from "./pages/SearchPage/SearchPage";
import DetailClinicalNote from "./pages/DetailClinicalNote/DetailClinicalNote";

const router = [
  {
    path: "/",
    element: <LayOut/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "detail",
        element: <DetailClinicalNote />,
      },
    ],
  },
  {
    path: '/sign-in',
    element: <SignIn/>
  }
];

export default router;
