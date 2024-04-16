import "./sort.css";

function SortBy({
  sortByUserReview,
  sortByCollegeDuniaRank,
  sortByLowestFees,
  sortByHighestFees,
  searchByCollegeName,
}) {
  return (
    <div className="sort-container">
      <h3 className="sort-heading">Sort By </h3>
      <div className="button-container">
        <input type="radio" name="sort" onChange={sortByUserReview} />
        <span>User Review</span>

        <input type="radio" name="sort" onChange={sortByHighestFees} />
        <span>Highest Fees</span>

        <input type="radio" name="sort" onChange={sortByLowestFees} />
        <span>Lowest Fees</span>

        <input type="radio" name="sort" onChange={sortByCollegeDuniaRank} />
        <span>CD Rank</span>

        <input
          type="search"
          className="search"
          onChange={searchByCollegeName}
          placeholder="Search by college name"
        />
      </div>
    </div>
  );
}

export default SortBy;
