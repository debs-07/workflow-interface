import { RouterProvider } from "react-router";
import { ToastContainer } from "react-toastify";

import { router } from "./routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
