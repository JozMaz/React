import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Serials from "./components/Serials";
import SharedLayout from "./components/SharedLayout";
import Error from "./components/Error";
import Info from "./components/Info";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/serials" element={<Serials />} />
          <Route path="/movies/:id" element={<Info />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
