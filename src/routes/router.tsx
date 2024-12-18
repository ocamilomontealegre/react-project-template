import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@ui/layout/MainLayout/MainLayout";
import { Home } from "@pages/Home/Home";
import { RoutesEnum } from "./models/enums/routes.enum";

export const router = createBrowserRouter([
  {
    path: RoutesEnum.ROOT,
    element: (
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      </MainLayout>
    ),
  },
]);
