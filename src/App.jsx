// import Routes from "./routers/routes";

import { LandingPage } from "./pages/LandingPage";
import { MyRoutes } from "./routers/routes";
import "./App.scss";

const App = () => {
  return (
    <div>
      <header className="text-center text-info mt-5">
        <h1 className="display-4 fw-bold">🎬Películas</h1>
      </header>
      <MyRoutes />
    </div>
  );
};

export default App;
