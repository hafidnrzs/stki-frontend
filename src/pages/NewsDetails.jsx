import { useParams } from "react-router-dom";

export default function NewsDetails() {
  const { id } = useParams();

  return (
    <>
      <h1>NewsDetails id: {id}</h1>
    </>
  );
}
