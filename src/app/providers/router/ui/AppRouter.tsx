import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import PageLoader from "widgets/PageLoader";

const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routeConfig.map((route) => {
          const { path, element } = route;

          return <Route key={path} path={path} element={element} />;
        })}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
