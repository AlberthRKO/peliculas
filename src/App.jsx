// import Routes from "./routers/routes";

import { LandingPage } from "./pages/LandingPage";
import { MyRoutes } from "./routers/routes";
import "./App.scss";

const App = () => {
  return (
    <div>
      <header className="text-center">{/* <h3>Hola</h3> */}</header>
      <MyRoutes />
    </div>
  );
};

export default App;
