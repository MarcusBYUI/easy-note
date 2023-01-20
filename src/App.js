import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import PrivateRoutes from "./helpers/privateRoute";
import Dashboard from "./pages/dashboard/dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="" exact element={<Home />} />
        <Route path="user/*" exact element={<Dashboard />} />

        {/* <Route element={<PrivateRoutes />}>
          <Route path="user/*" exact element={<Dashboard />} />
        </Route> */}
        <Route path={"*"} element={<Navigate replace to="" />} />
      </Routes>
    </>
  );
}

export default App;
