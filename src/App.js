import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import { Message } from "./components/message/message";

import PrivateRoutes from "./helpers/privateRoute";
import Dashboard from "./pages/dashboard/dashboard";
import { useSelector } from "react-redux";

function App() {
  const { notify, message, loading } = useSelector(
    (state) => state.notification
  );
  return (
    <>
      <Routes>
        <Route path="" exact element={<Home />} />
        <Route element={<PrivateRoutes />}>
          <Route path="user/*" exact element={<Dashboard />} />
        </Route>
        <Route path={"*"} element={<Navigate replace to="" />} />
      </Routes>
      {notify && <Message message={message} loading={loading} />}
    </>
  );
}

export default App;
