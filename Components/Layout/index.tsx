import React, { ReactNode } from "react";
import { Container } from "./styles";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return <Container>{children}</Container>;
};

export default Layout;
