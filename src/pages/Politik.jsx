import axios from "axios";
import Card from "../components/Card";
import TopicPopuler_Card from "../components/TopicPopuler_Card";
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader"; // Import the Loader component

const News = ({ category }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [popularData, setPopular] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // State untuk melacak halaman saat ini
  const [loading, setLoading] = useState(false); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true before fetching data
      try {
        const url = category
          ? `${
              import.meta.env.VITE_API_URL
            }/news?category=${category}&page=${currentPage}`
          : `${import.meta.env.VITE_API_URL}/news?page=${currentPage}`;

        const response = await axios.get(url);
        const news = await response.data?.news;
        setData(news);
        console.log(category);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message || "An error occurred");
      }
      setLoading(false); // Set loading to false after fetching data
    };

    const fetchPopularData = async () => {
      setLoading(true); // Set loading to true before fetching data
      try {
        const url = category
          ? `${
              import.meta.env.VITE_API_URL
            }/news?category=${category}&page=${currentPage}`
          : `${import.meta.env.VITE_API_URL}/news?page=${currentPage}`;

        const response = await axios.get(url);
        const news = await response.data?.news;
        setPopular(news);
        console.log(category);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message || "An error occurred");
      }
      setLoading(false); // Set loading to false after fetching data
    };

    fetchData();
    fetchPopularData();
  }, [category, currentPage]); // Menambahkan currentPage ke dependencies

  if (error) {
    return <div className="text-red-500">Error fetching data: {error}</div>;
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full h-full font-mulish">
      <div className="max-w-screen-xl mx-auto">
        <div className="font-black text-[#F60E2A] text-xl lg:text-2xl mb-4 lg:mt-2 lg:ml-3">
          BERITA POLITIK
        </div>
        {loading ? ( // Show loader if loading is true
          <Loader />
        ) : (
          <>
            {/* Grid untuk kartu */}
            <div className="ml-3 grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
              {Array.isArray(popularData) && popularData.length > 0 ? (
                popularData.slice(0, 4).map((item) => (
                  <TopicPopuler_Card
                    key={item.id} // Pastikan ada key unik
                    title={item.title}
                    image={item.image}
                    category={item.category}
                  />
                ))
              ) : (
                <div>No data available</div>
              )}
            </div>
            {/* Grid container for cards */}
            <div className="ml-1 grid grid-cols-2 gap-4 pb-4 md:ml-3 lg:pb-0 lg:grid-cols-4 mt-4">
              {Array.isArray(data) && data.length > 0 ? (
                data.map((item) => (
                  <Card
                    key={item.id} // Pastikan ada key unik
                    url={`/news/${item.id}`}
                    title={item.title}
                    image={item.image}
                    category={item.category}
                  />
                ))
              ) : (
                <div>No data available</div>
              )}
            </div>
            <div className="flex justify-center items-center gap-5 sm:mb-5 xl:mb-2">
              <div className="join">
                {[1, 2, 3, 4].map((page) => (
                  <input
                    key={page}
                    className={`join-item btn btn-square hover:bg-red-600 ${
                      currentPage === page ? "btn-active" : "bg-[#C9C7C5]"
                    }`}
                    type="button"
                    name="options"
                    aria-label={page}
                    value={page}
                    onClick={() => handlePageChange(page)}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default News;
