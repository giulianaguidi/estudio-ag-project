import React, { ReactNode } from 'react';

interface ContainerFooterProps {
  children?: ReactNode;
}

const ContainerFooter: React.FC<ContainerFooterProps> = ({ children }) => {

  return <div >{children}</div>;
};

export default ContainerFooter;