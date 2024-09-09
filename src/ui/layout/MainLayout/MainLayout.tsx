import type { ReactNode } from "react";
import type { IMainLayoutProps } from "./models/interfaces/mainlayout-props.interface";

export const MainLayout = ({ children }: IMainLayoutProps): ReactNode => {
  return <main>{children}</main>;
};
