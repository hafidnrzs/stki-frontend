import Card from "../components/Card";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PreviewArticle_Card from "../components/PreviewArticle_Card";
import axios from "axios";

const Hot = () => {
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
    <>
      <div className="w-full">
        <div className=" text-[#F60E2A] text-xl font-black mt-2 ml-2">
          PALING HOT MINGGU INI
        </div>
        <div className="ml-1 grid grid-cols-2 gap-4 pb-4  md:ml-3 lg:pb-0 lg:grid-cols-4 mt-4">
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
        <div className=" text-[#F60E2A] text-xl font-black mt-2 ml-2">
          PREVIEW ARTIKEL
        </div>
        <div className="">
          <PreviewArticle_Card
            id="1"
            image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            title="Judul Artikel 1"
            summary="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            tempo="Tempo.co"
            date="12/12/2021"
          />
        </div>
      </div>
    </>
  );
};

export default Hot;
