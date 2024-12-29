import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const Home = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { category } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = category
          ? `/api/data/example.json`
          : "/api/data/example.json";

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const text = await response.text();
        console.log("Raw response:", text);

        const jsonData = JSON.parse(text);
        setData(jsonData);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      }
    };

    fetchData();
  }, [category]);

  if (error) {
    return <div>Error fetching data: {error}</div>;
  }

  if (!data) {
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
              key={index}
              id={item.id}
              title={item.title}
              image={item.image}
              // summary={item.summary}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
