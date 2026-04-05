import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Keahlian from "../pages/Keahlian";
import Sertifikat from "../pages/Sertifikat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {
        path: "keahlian",
        element: <Keahlian />, 
      },
      {
        path: "sertifikat", // Pakai huruf kecil biar konsisten sama URL
        element: <Sertifikat />, 
      },
    ],
  },
]); 

export default router;