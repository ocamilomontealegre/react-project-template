import { RouterProvider } from "react-router-dom";
import { router } from "@routes/router";
import type { ReactNode } from "react";

export const App = (): ReactNode => {
  return <RouterProvider router={router} />;
};
