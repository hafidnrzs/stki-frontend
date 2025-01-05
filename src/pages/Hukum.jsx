import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import Loader from "../components/Loader"; // Import the Loader component

const Hukum = ({ category }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
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

    fetchData();
  }, [category, currentPage]);

  if (error) {
    return <div className="text-red-500">Error fetching data: {error}</div>;
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex items-start lg:ml-3 font-mulish">
      <div className="max-w-screen-xl mt-2 mx-auto w-full px-4 lg:px-8">
        <div className="font-black text-[#F60E2A] text-xl lg:text-2xl mb-4">
          BERITA HUKUM
        </div>
        {loading ? ( // Show loader if loading is true
          <Loader />
        ) : (
          <>
            {/* Grid container for cards */}
            <div className="grid grid-cols-2 gap-4 pb-4 lg:pb-0 lg:grid-cols-4 mt-4">
              {Array.isArray(data) && data.length > 0 ? (
                data.map((item) => (
                  <Card
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
            <div className="flex justify-center items-center gap-5 sm:mb-5 xl:mb-2">
              <div className="join">
                {[1, 2, 3, 4].map((page) => (
                  <input
                    key={page}
                    className={`join-item btn btn-square hover:bg-[#C9C7C5] ${
                      currentPage === page ? "bg-[#C9C7C5]" : "bg-white"
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

export default Hukum;
