import { useEffect, useState } from "react";
import CollegeList from "./components/CollegeList/CollegeList";
import SortBy from "./components/Sort/Sort";
import { DATA } from "./Data/data";
import GoToTop from "./components/GoToTop/GoToTop";
// import { useEffect } from "react";

function App() {
  const [collegeData, setCollegeData] = useState([]);

  useEffect(() => {
    setCollegeData(DATA);
  }, []);

  const sortByUserReview = () => {
    const sortedData = [...collegeData].sort((a, b) => b.rating - a.rating);
    setCollegeData(sortedData);
  };

  const sortByHighestFees = () => {
    const sortedData = [...collegeData].sort((a, b) => b.fees - a.fees);
    setCollegeData(sortedData);
  };

  const sortByLowestFees = () => {
    // console.log("sortByLowestFees");
    const sortedData = [...collegeData].sort((a, b) => a.fees - b.fees);
    setCollegeData(sortedData);
  };

  const sortByCollegeDuniaRank = () => {
    const sortedData = [...collegeData].sort((a, b) => a.rank - b.rank);
    setCollegeData(sortedData);
  };

  // search by college name
  const searchByCollegeName = (e) => {
    const query = e.target.value.toLowerCase();
    const filteredColleges = DATA.filter((college) =>
      college.Name.toLowerCase().includes(query)
    );
    setCollegeData(filteredColleges);
  };

  return (
    <>
      <div className="main-heading">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGufZx5n7uaXbdOGoeAPt2VjwN1j3U3n9Vc92d5KdGXKY_23WTsJ1cHa8u_UEKeQhd3-4&usqp=CAU"
          alt="heading-logo"
        />
      </div>
      <SortBy
        sortByUserReview={sortByUserReview}
        sortByCollegeDuniaRank={sortByCollegeDuniaRank}
        sortByLowestFees={sortByLowestFees}
        sortByHighestFees={sortByHighestFees}
        searchByCollegeName={searchByCollegeName}
      />
      <CollegeList collegeData={collegeData} />
      <GoToTop />
    </>
  );
}

export default App;
