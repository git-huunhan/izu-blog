import moment from "moment";

const GetFullTime = ({ date }) => {
  return <>{moment(date).format("dddd, MMMM DD,YYYY [at] LT")}</>;
};

export default GetFullTime;
