import { useState, createContext, useContext } from "react";

const Context = createContext({});

export const useGlobal = () => useContext(Context);

export const ContextProvider = ({ children }) => {
  const [customerData, setCustomerData] = useState({});
  const [productData, setProductData] = useState({});
  const [orderProducts, setOrderProducts] = useState([]);

  const [formAutoComplete, setFormAutoComplete] = useState({});

  const handleForm = (name, value) => {
    setFormAutoComplete({
      ...formAutoComplete,
      [name]: value,
    });
  };
  const value = { handleForm, formAutoComplete, setFormAutoComplete };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
