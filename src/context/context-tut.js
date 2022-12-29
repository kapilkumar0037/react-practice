import { createContext, useContext } from "react";

export const TreeContext = createContext();
export const useTree= ()=> useContext(TreeContext);
export const tree = [
    { id: 1, type: 'Jamun' },
    { id: 2, type: 'Neem' },
    { id: 3, type: 'Oak' },
    { id: 4, type: 'Component' }
];

