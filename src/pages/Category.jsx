import { useParams } from "react-router-dom";
import News from "./News";

const Category = () => {
  const { category } = useParams();
  switch(category){
    case 'news':
        return <News category={category} />
        default: return ""
  }
};

export default Category;
