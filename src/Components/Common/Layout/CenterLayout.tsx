import { PropsWithChildren } from 'react';

const CenterLayout = ({ children }: PropsWithChildren) => {
  return <div className="flex min-h-screen items-center justify-center">{children}</div>;
};

export default CenterLayout;
