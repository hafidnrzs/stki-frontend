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
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto w-full px-4 lg:px-8">
        <div className="text-[#F60E2A] text-xl xl:text-2xl font-black mt-2 ml-2">
          PALING HOT MINGGU INI
        </div>
        <div className="ml-1 grid grid-cols-2 gap-4 pb-4 md:ml-3 lg:pb-0 lg:grid-cols-4 mt-4">
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
        <div className="text-[#F60E2A] text-xl xl:text-2xl font-black mt-2 ml-2">
          PREVIEW ARTIKEL
        </div>
        <div>
          <PreviewArticle_Card
            id="1"
            image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            title="Depo Plumpang Terbakar, Anggota DPR Minta Pertamina Pastikan Pasokan BBM Tak Terganggu"
            summary="Depo Plumpang menyuplai sekitar 20 persen kebutuhan BBM harian di Indonesia, atau sekitar 25 persen dari total kebutuhan SPBU Pertamina."
            tempo="Tempo.co"
            date="4 Maret 2023"
            content={[
              "TEMPO.CO, Jakarta - Anggota Komisi VII DPR RI Rofik Hananto menyayangkan terjadinya insiden kebakaran yang disebabkan oleh bocornya depo Plumpang, Jakarta Utara, pada Jumat, 3 Maret 2023.",
              "Turut berbela sungkawa terhadap masyarakat sipil yang terdampak, apalagi ini daerah padat penduduk. Pertamina harus tanggung jawab.",
              "Rofik mengatakan Pertamina serta pihak terkait harus memastikan keselamatan dan keamanan warga yang tinggal di sekitar lokasi.",
              "Pipa BBM yang terbakar itu merupakan bagian dari Terminal Bahan Bakar Minyak (TBBM) Plumpang. TBBM Plumpang dinilai sebagai salah satu terminal BBM terpenting di Indonesia, sehingga Rofik juga menegaskan Pertamina harus memastikan pasokan bahan bakar minyak tetap aman meski ada insiden tersebut.",
              "Plumpang menyuplai sekitar 20 persen kebutuhan BBM harian di Indonesia, atau sekitar 25 persen dari total kebutuhan SPBU Pertamina. Maka tindakan selanjutnya adalah bagaimana memastikan suplai BBM tidak terganggu.",
            ]}
            url="https://nasional.tempo.co/read/1698528/depo-plumpang-terbakar-anggota-dpr-minta-pertamina-pastikan-pasokan-bbm-tak-terganggu"
          />
        </div>
      </div>
    </div>
  );
};

export default Hot;
