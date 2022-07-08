import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const fetchApiData = async () => {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        const data = await res.json();
        setData(data);
        setFilter(data);
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    fetchApiData();
  }, []);

  return (
    <ProductContext.Provider value={[{ data, setData }]}>
      {props.children}
    </ProductContext.Provider>
  );
};
