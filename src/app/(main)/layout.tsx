import React from "react";

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Layout;
