import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import GetTheMedicine from "../pages/GetTheMedicine";
import Doctor from "../pages/Doctor";
import { Suspense } from "react";
import LoadingSceond from "../components/LoadingSceond/LoadingSceond";
const newRouter = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/medicine",
    element: <GetTheMedicine />,
  },
  {
    path: "/doctor",
    element: <Doctor />,
  },
];

function RouterEl() {
  const elements = useRoutes(newRouter);
  return <>{elements}</>;
}

function LazyRouterEl() {
  return (
    <Suspense fallback={LoadingSceond}>
      <RouterEl />
    </Suspense>
  );
}
export default LazyRouterEl;
