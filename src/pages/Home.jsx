import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const { category } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = category
          ? `${import.meta.env.VITE_API_URL}?category=${category}&page=1`
          : `${import.meta.env.VITE_API_URL}?page=1`;

        const response = await axios.get(url); 
        setData(response.data.news); 
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message || "An error occurred");
      }
    };

    fetchData();
  }, [category]);

  if (error) {
    return <div className="text-red-500">Error fetching data: {error}</div>;
  }

  if (!data.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-start mt-7 lg:mt-10 lg:ml-3 font-mulish">
      <div className="ml-1 lg:ml-8 lg:w-full">
        <div className="font-bold text-[#F60E2A] text-xl lg:text-3xl mb-4">
          Berita Lainnya
        </div>
        {/* Grid container for cards */}
        <div className="grid grid-cols-2 gap-4 pb-4 lg:pb-0 lg:grid-cols-4 mt-4">
          {data.map((item, index) => (
            <Card
              key={item.id || index}
              id={item.id}
              title={item.title}
              image={item.image}
              // summary={item.summary} // Uncomment if needed
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
