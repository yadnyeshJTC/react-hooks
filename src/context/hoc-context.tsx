import React, { createContext, PropsWithChildren, useState } from "react";

export type HocContextType = {
  getData: () => string;
  setData: (data: string) => void;
};

export const HocContext = createContext<HocContextType>({
  getData: () => "",
  setData: () => "",
});

declare type HocContextProps = PropsWithChildren & {
  value: string;
  name: string;
};

export const HocContextProvider: React.FC<HocContextProps> = ({
  children,
  value,
  name,
}) => {
  const [data, setData] = useState(value);
  console.log(name);
  const getData = () => data;

  return (
    <HocContext.Provider
      value={{
        getData,
        setData,
      }}
    >
      {children}
    </HocContext.Provider>
  );
};
