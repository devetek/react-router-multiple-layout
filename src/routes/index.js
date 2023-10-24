import { Fragment, memo } from "react";
import { useRoutes } from "react-router-dom";

import MainLayout from "../components/Layout/Main";
import SecondLayout from "../components/Layout/Second";
import FallbackLayout from "../components/Layout/Fallback";
import Home from "./Home";
import About from "./About";
import Other from "./Other";
import NoMatch from "./NoMatch";

const mainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
];

const secondRoutes = [
  {
    path: "/other",
    element: <SecondLayout />,
    children: [
      {
        index: true,
        element: <Other />,
      },
    ],
  },
];

const fallbackRoutes = [
  {
    path: "/",
    element: <FallbackLayout />,
    children: [
      {
        path: "*",
        element: <NoMatch />,
      },
    ],
  },
];

/**
 * @function SkipperRouter Router Entrypoint
 */
const SkipperRouter = () => {
  const main = useRoutes(mainRoutes);
  const second = useRoutes(secondRoutes);
  // const fallback = useRoutes(fallbackRoutes);

  return (
    <Fragment>
      {main}
      {second}
      {/* {fallback} */}
      <span
        style={{ display: "none", userSelect: "none", pointerEvents: "none" }}
      />
    </Fragment>
  );
};

export default memo(SkipperRouter);
