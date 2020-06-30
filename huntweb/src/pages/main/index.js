import React, { useEffect, useState } from "react";
import api from "../../services/config";

const Main = () => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get(`/products`);
      setDocs(res.data.docs);
    };
    fetchData();
  }, []);

  return (
    <ul>
      {docs.map((doc) => (
        <li key={doc._id}>{doc.title}</li>
      ))}
    </ul>
  );
};

export default Main;
