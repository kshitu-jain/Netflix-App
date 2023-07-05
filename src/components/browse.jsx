import { BASE_URL } from "./apiUrl";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Search = () => {
  let [shows, setShows] = useState([]);
  let navigate = useNavigate();
  let [showImage, setShowImage] = useState([]);

  let getShows = async () => {
    let url = BASE_URL + "/browseShows";
    let { data } = await axios.get(url);
    console.log(data);
    setShowImage(data.showlistImages);
  };
  let getBrowsePage = async () => {
    let url = BASE_URL + "/browse";
    let { data } = await axios.get(url);
    console.log(data);
    setShows(data.showDetails);
  };

  useEffect(() => {
    getBrowsePage();
    getShows();
  }, []);
  return (
    <>
      <section className="container-fluid browse-page">
        <main className="row">
          <main className="col-12">
            {/* <!-- navbar section --> */}
            <main className="row bg-black">
              <section className="col-lg-12 m-lg-auto mb-lg-4 d-flex justify-content-between">
                <section className="d-flex justify-content-start pt-lg-3">
                  <img
                    src="/images/netflix-logo-png-large.png"
                    alt=""
                    className="netflix-logo2 pt-2 ps-3 ms-0 mb-0"
                  />
                  <div className="pt-1">
                    <ul className="nav">
                      <li className="nav-item">
                        <a className="nav-link active text-white" href="#">
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-white-50" href="#">
                          TV shows
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-white-50" href="#">
                          Movies
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-white-50">New & Popular</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-white-50">My List</a>
                      </li>
                    </ul>
                  </div>

                  <div className="me-lg-3">
                    {/* <!-- <button className="text-white p-1 px-3 rounded-1 border-0 get-colour netflix-sign-in">
                    Sign In
                  </button> --> */}
                  </div>
                </section>
                <div className="pt-4">
                  <input
                    className="w-25 bg-dark"
                    type="search"
                    name=""
                    id=""
                    placeholder="search"
                  />
                  <span className="text-white m-2">Kids</span>
                  <span className="m-2 text-white">
                    <i class="fa fa-bell" aria-hidden="true"></i>
                  </span>
                </div>
              </section>
            </main>

            {/* <!-- body section --> */}
            <section className="">
              <div className="m-auto d-flex flex-column justify-content-center">
                <section className="mt-5">
                  <h5 className="text-white mt-5">Popular on Netflix</h5>
                  <div className="d-flex wrapper">
                    {shows.map((show, index) => {
                      return (
                        <div
                          onClick={() => {
                            navigate("/shows-details/" + show._id);
                          }}
                          key={index}>
                          <div className="item">
                            <img src={"/" + show.image} alt="" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>

                <section className="mt-5">
                  <h5 className="text-white">Comedy Shows</h5>
                  <div className="wrapper">
                    <div className="item">
                      <img src="./comedy-images/angry birds.jpg" alt="" />
                    </div>
                    <div className="item">
                      <img src="./comedy-images/boss baby.jpg" alt="" />
                    </div>
                    <div className="item">
                      <img src="./comedy-images/clifford.jpg" alt="" />
                    </div>
                    <div className="item">
                      <img src="./comedy-images/kathal.jpg" alt="" />
                    </div>
                    <div className="item">
                      <img src="./comedy-images/shehzada.jpg" alt="" />
                    </div>
                    <div className="item">
                      <img src="./comedy-images/stuart.jpg" alt="" />
                    </div>
                    <div className="item">
                      <img src="./comedy-images/the croods.jpg" alt="" />
                    </div>
                    <div className="item">
                      <img src="./comedy-images/tom and jerry.jpg" alt="" />
                    </div>
                    <div className="item">
                      <img src="./comedy-images/tu jhoothi main makkar.jpg" alt="" />
                    </div>
                    <div className="item">
                      <img src="./comedy-images/spiderman.jpg" alt="" />
                    </div>
                  </div>
                </section>
              </div>
            </section>
          </main>
        </main>
      </section>
    </>
  );
};

export default Search;
