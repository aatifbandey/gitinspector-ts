import React from 'react';
import { node } from "prop-types";
import { container } from './styles';
type LayoutProps = {
  children: React.ReactNode
}
const Layout:React.FC<LayoutProps> = (props) => {
  const { children } = props;

  return <div className={container}>{children}</div>;
};

Layout.propTypes = {
  children: node.isRequired
}



export default Layout;
