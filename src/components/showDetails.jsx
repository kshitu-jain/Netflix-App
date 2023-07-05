import { useParams } from "react-router-dom";
import { BASE_URL } from "./apiUrl";
import { useEffect, useState } from "react";
import axios from "axios";

const ShowDetails = () => {
  let { id } = useParams();
  let [moviedetails, setMoviedetails] = useState([]);

  let getMoviesDetails = async () => {
    let url = BASE_URL + "/browse/" + id;
    let { data } = await axios.get(url);
    console.log(data);
    setMoviedetails(data.showDetails);
  };

  useEffect(() => {
    getMoviesDetails();
  }, []);
  return (
    <>
      <section className="row background-img">
        <main className="col-12">
          {/* <!-- login section --> */}
          <main className="row bg-black">
            <section className="col-lg-11 m-lg-auto mb-lg-2">
              <section className="d-flex justify-content-between pt-lg-3">
                <img
                  src="/images/netflix-logo-png-large.png"
                  alt=""
                  className="netflix-logo ps-3 mb-0"
                />

                <div className="me-lg-3">
                  <button className="btn btn-danger text-white p-1 px-3 rounded-1 border-0">
                    Sign In
                  </button>
                </div>
              </section>
            </section>
          </main>
          {/* <!-- login end --> */}

          {/* <!-- body section --> */}
          <section className="row mt-5">
            <section className="d-flex flex-column justify-content-between mt-5 ms-2">
              <div className="ms-5 mt-2">
                <img src={"/" + moviedetails.titleImage} alt="" className="title-image" />
              </div>
              <div className="col-4 ms-5 text-white pt-5">
                <h2 className="">{moviedetails.title}</h2>
                <p className="text-white-50 release-font mt-1">{moviedetails.release}</p>
                <p className="descript">{moviedetails.description}</p>
                <p className="descript">
                  <span className="text-white-50">Starring:</span> {moviedetails.starring}
                </p>
                <div className="buttons">
                  <i className="fa fa-play" aria-hidden="true"></i>
                  <button className="btn btn-light border-0 rounded-0 m-3 play-button">Play</button>
                  <button className="btn btn-dark border-0 rounded-0">More Info</button>
                </div>
              </div>
            </section>
          </section>
          {/* <!-- end --> */}
        </main>
      </section>
    </>
  );
};

export default ShowDetails;
