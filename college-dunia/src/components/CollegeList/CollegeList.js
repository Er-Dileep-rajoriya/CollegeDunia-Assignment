import "./collegeList.css";
// import { DATA as collegeList } from "../../Data/data";
const maxSafeInteger = Number.MAX_SAFE_INTEGER;
function CollegeList({ collegeData }) {
  return (
    <div className="college-list-container">
      <table className="college-list-table">
        <thead>
          <tr className="table-heading">
            <th className="rank-width">CD Rank</th>
            <th className="college-width">Colleges</th>
            <th className="course-width">Course Fees</th>
            <th className="placement-width">Placement</th>
            <th className="rating-width">User Reviews</th>
            <th className="ranking-width">Ranking</th>
          </tr>
        </thead>

        {collegeData.map((college, index) => {
          return (
            <tbody key={index}>
              <tr className={college.featured ? "featured" : null}>
                <td>
                  <p>
                    {college.rank !== maxSafeInteger ? "#" + college.rank : " "}
                  </p>
                </td>
                <td>
                  {/* College Featured */}
                  {college.featured && (
                    <span class="college-featured">Featured</span>
                  )}
                  <div className="college">
                    <div className="left">
                      <img
                        className="college-logo"
                        src={college.logo}
                        alt="logo"
                      />
                    </div>
                    <div className="right">
                      <span className="heading heading-font-size">
                        {college.Name}
                      </span>
                      <br />
                      <span className="college-address small-desc">
                        {college.address}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="fees">
                  <h3 className="heading heading-font-size">
                    ₹ {college.fees}
                  </h3>
                  <p className="small-desc">BE/B.Tech</p>
                  <p className="small-desc">-1st Year Fees</p>
                </td>
                <td className="placement">
                  <h3 className="heading heading-font-size">
                    ₹ {college.placement.average}
                  </h3>
                  <p className="small-desc">Average Package</p>
                  <h3 className="heading heading-font-size">
                    ₹ {college.placement.highest}
                  </h3>
                  <p className="small-desc">Highest Package</p>
                </td>
                <td className="ratting">
                  <h3 className="heading-font-size">{college.rating}/10</h3>
                  <p className="small-desc">Based on trusted Users</p>
                </td>
                <td className="ranking">
                  <h3 className="heading-font-size">{college.ranking}</h3>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default CollegeList;
