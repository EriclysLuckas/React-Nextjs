import { useState, useEffect } from "react";

export default function useUtils() {
  const [base, setBase] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/products");
      const jsonProducts = await response.json();

      setBase(jsonProducts);
    };
    fetchData()
  }, []);


function teste(){
  console.log("teste")
}
 return base
}

