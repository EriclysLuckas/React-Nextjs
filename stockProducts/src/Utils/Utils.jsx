import  { useState, useEffect } from "react";

export default function Utils() {
  const [base, setBase] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/produtos");
      const jsonProducts = await response.json();

      setBase(jsonProducts);
    };
    fetchData();
  }, []);

  base.forEach((obj) => console.log(obj));
}
