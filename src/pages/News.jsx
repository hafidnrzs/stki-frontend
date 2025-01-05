import React, { useEffect, useState } from "react";
import fetchData from "../api/News";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

const News = ({ category }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await fetchData({ category, page: currentPage });
      if (error) {
        setError(error);
      } else {
        setData(data);
      }
    };

    getData();
  }, [category, currentPage]);

  if (error) {
    return <div className="text-red-500">Error fetching data: {error}</div>;
  }

  return (
    <div className="w-full h-full font-mulish">
      <div className="max-w-screen-xl mx-auto">
        {/* Render data */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item) => (
            <Card
              key={item.id}
              id={item.id} // Pastikan item memiliki properti id
              title={item.title}
              image={item.image}
              category={item.category}
            />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={4} // Sesuaikan dengan total halaman yang ada
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default News;
