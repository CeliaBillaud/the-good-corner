import { useParams } from "react-router";

const AdDetails = () => {
  const { id } = useParams();

  return <p> Details of ad {id}</p>;
};

export default AdDetails;
