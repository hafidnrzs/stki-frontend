import Card from "../components/Card";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PreviewArticle_Card from "../components/PreviewArticle_Card";

const Hot = () => {
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
