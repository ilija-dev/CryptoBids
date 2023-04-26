import { createContext, useState } from "react";

export const CategoryContext = createContext({ category: '', setCategory: (() => {}) as React.Dispatch<React.SetStateAction<string>> });

export const CategoryProvider = ({ children }: any) => {
    const [category, setCategory] = useState('');
  
    return (
      <CategoryContext.Provider value={{ category, setCategory }}>
        {children}
      </CategoryContext.Provider>
    );
  };