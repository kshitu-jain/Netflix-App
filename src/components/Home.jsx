import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main className="container-fluid homepage">
        {/* <!--main section start  --> */}
        <section className="row main-height ">
          <main className=" col-12 background  ">
            {/* <!-- login section start --> */}
            <main className="row ">
              <section className="col-lg-11  m-lg-auto mb-lg-4  ">
                <section className=" d-flex justify-content-between p-lg-4  pt-lg-3 ">
                  <img
                    src="/images/netflix-logo-png-large.png"
                    alt=""
                    className="netflix-logo pt-2 ps-3 mb-0"
                  />

                  <div className="me-lg-3 links">
                    <i className="fa fa-globe globe-icon" aria-hidden="true"></i>
                    <select className="p-1 m-2 me-4 bg-transparent border-1 border-secondary text-white rounded-1 px-4 button-icon ">
                      <option>English</option>
                      <option>Hindi</option>
                    </select>
                    <button className=" text-white p-1 px-3 rounded-1 border-0  get-colour netflix-sign-in">
                      Sign In
                    </button>
                    <Link to="/search" className="text-white ms-3">
                      ? Go to home
                    </Link>
                  </div>
                </section>
              </section>
            </main>
            {/* <!-- login section end --> */}

            {/* <!--header start  -->             */}
            <section className="row d-flex justify-content-center  mt-5 ">
              <section className="col-lg-10 col-11 m-auto mt-lg-0 mt-3  pt-lg-5">
                <div>
                  <span className="display-5 text-white fw-bolder ms-lg-5 ms-2">
                    Unlimited movies, TV shows and more.
                  </span>
                </div>

                <div className="pt-3 pb-4 d-flex justify-content-center ">
                  <span className="h4 text-white fw-normal net-font-size  ">
                    Watch anywhere. Cancel anytime.
                  </span>
                </div>

                <p className="h5 fw-normal text-white d-flex justify-content-center net-font-size ps-lg-0 ps-3">
                  Ready to watch? Enter your email to create or restart your membership.
                </p>

                <div className=" d-lg-flex justify-content-center m-auto  mt-lg-4 mt-3 ms-lg-0  ms-4 ">
                  <div className="form-floating width-email me-lg-2 pe-lg-0 pe-3 ">
                    <input
                      type="email"
                      className="form-control rounded-1 email-color"
                      placeholder="Email address"
                      required
                    />
                    <label htmlFor="" className=" text-color">
                      Email address
                    </label>
                  </div>

                  <button className=" h4 get-colour rounded-2 border-0 text-white px-lg-4 px-3 pb-lg-2 my-lg-0 m-5 mt-3 m-lg-0 py-2 py-lg-0">
                    Get Started
                    <i className="fa fa-angle-right fs-2 " aria-hidden="true"></i>
                  </button>
                </div>
              </section>
            </section>
            {/* <!-- header end -->             */}
          </main>
        </section>
        {/* <!-- mian section end --> */}

        <section className="row bg-dark net-line"></section>

        {/* <!-- 2nd section start --> */}
        <section className="row bg-black section-1">
          <section className="col-lg-11 col-12 bg-black d-flex flex-lg-row flex-column justify-content-center mb-lg-5 p-lg-1 ">
            <div className="row bg-black  ">
              <div className=" col-lg-9 col-11  m-auto d-flex justify-content-center flex-column  pt-lg-4 me-lg-5 pe-lg-3">
                <div className=" mb-3 ms-lg-0 ms-2">
                  <span className="text-white display-5 fw-bold text-lg-start text-center ms-4 ">
                    Enjoy on your TV.
                  </span>
                </div>
                <div className="">
                  <p className="text-white fw-normal h4 net-font-size">
                    Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players{" "}
                    <span className="ms-lg-0 ms-5 ps-lg-0 ps-5">and more.</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="tv-section me-lg-5 mt-lg-5 mb-lg-0 mb-2 ">
              <img src="/images/tv.png" className="TV-images mt-3 me-0" />
              <video src="/images/video-tv-in-0819.mp4" autoPlay loop className="tv-video"></video>
            </div>
          </section>
        </section>
        {/* <!-- 2nd section end -->                                                                                                                                                                                                         */}

        <section className="row bg-dark net-line"></section>

        {/* <!-- 3rd section start --> */}
        <section className="row bg-black section-2">
          <section className="col-lg-11  m-lg-auto d-flex justify-content-center flex-lg-row flex-column-reverse mb-lg-5 p-lg-3 mt-lg-3 ">
            <div className=" ps-lg-5  ms-lg-3 ">
              <img src="./images/mobile-0819.jpg" className="mobile-images mt-lg-4" />
            </div>
            <div className="row  ms-lg-0 ps-lg-0  ">
              <article className="col-lg-10 col-11 ps-lg-0  m-auto ms-lg-0  ">
                <section className="display-5 text-white fw-bold mb-3 text-lg-start text-center ">
                  Download your shows to watch offline.
                </section>
                <section className="h4 text-white fw-normal me-lg-5 text-lg-start text-center net-font-size">
                  Save your favourites easily and always have something to watch.
                </section>
              </article>
            </div>
          </section>
        </section>
        {/* <!-- 3rd section end --> */}

        <section className="row bg-dark  net-line"></section>

        {/* <!-- 4th section start --> */}
        <section className="row bg-black">
          <section className="col-lg-11 bg-black d-lg-flex justify-content-lg-center mb-lg-5 p-lg-1 section-4 ">
            <div className="row bg-black  ">
              <div className=" col-lg-9 col-11 m-auto d-flex justify-content-center flex-column  pt-4 me-lg-1 pe-lg-3 ">
                <div className=" mb-3 mt-lg-0 mt-4">
                  <span className="text-white display-5 fw-bold text-lg-start text-center ms-4 ms-lg-0">
                    Watch everywhere.
                  </span>
                </div>
                <div className="bg-black">
                  <p className="text-white fw-normal h4 text-lg-start text-center net-font-size">
                    Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                  </p>
                </div>
              </div>
            </div>

            <div className="desktop-images me-lg-5 mt-lg-5 mt-4 mb-0">
              <img src="/images/device-pile-in.png" className=" mt-lg-3" />
              <video src="/images/video-devices-in.mp4" loop autoPlay></video>
            </div>
          </section>
        </section>
        {/* <!-- 4th section end --> */}

        <section className="row bg-dark  net-line"></section>

        {/* <!-- 5th section start --> */}
        <section className="row bg-black">
          <section className="col-lg-11  m-lg-auto d-lg-flex justify-content-lg-center ps-lg-5 mb-lg-5 p-lg-3 mt-lg-3 section-5">
            <div className=" ps-lg-5  ms-lg-3 mt-lg-5 pe-lg-0 me-lg-0 mb-lg-0 mb-5 ">
              <img src="./images/cartoon image.png" className="mobile-images " />
            </div>
            <div className="row  ms-lg-0 ps-lg-0 ">
              <article className="col-lg-10 col-12 ps-lg-0 ms-lg-2 m-lg-auto ">
                <section className="display-5 text-white fw-bold mb-3 text-lg-start text-center ">
                  Create profiles for children.
                </section>
                <section className="h4 text-white fw-normal  text-lg-start text-center net-font-size">
                  Send children on adventures with their favourite characters in a space made just
                  for them—free with your membership.
                </section>
              </article>
            </div>
          </section>
        </section>
        {/* <!-- 5th section end --> */}

        <section className="row bg-dark net-line"></section>

        {/* <!-- FAQ section start --> */}
        <section className="row bg-black  ">
          <section className="col-12 d-flex flex-column align-items-center   ">
            <div>
              <p className="display-5 text-white fw-bold pt-5 pb-1 text-center">
                Frequently Asked Questions
              </p>
            </div>

            {/* <!-- 1st que --> */}
            <div className="row">
              <article className="col-lg-12 d-flex justify-content-start FAQ  ">
                <p
                  className="h4 bg-dark text-white h-25 fw-normal d-flex justify-content-between align-items-center que-width  p-4 m-0 "
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne">
                  What is Netflix?
                  <i className="fa fa-plus add-icon" aria-hidden="true"></i>
                </p>
              </article>
            </div>

            <div className="d-flex justify-content-center align-items-center mb-2 ">
              <div
                id="collapseOne"
                className="collapse bg-dark text-white h4 fw-normal collapse-width p-4">
                <p className="">
                  Netflix is a streaming service that offers a wide variety of award-winning TV
                  shows, movies, anime, documentaries and more - on thousands of internet-connected
                  devices.
                  <p className="pe-5">
                    You can watch as much as you want, whenever you want, without a single ad - all
                    for one low monthly price. There's always something new to discover, and new TV
                    shows and movies are added every week!
                  </p>
                </p>
              </div>
            </div>

            {/* <!-- 2nd que --> */}
            <div className="row ">
              <article className="col-12 d-flex justify-content-start  FAQ">
                <p
                  className="h4 bg-dark text-white h-25 fw-normal d-flex justify-content-between align-items-center que-width p-4 "
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo">
                  How Much does Netflix cost?
                  <i className="fa fa-plus add-icon" aria-hidden="true"></i>
                </p>
              </article>
            </div>

            <div className="d-flex justify-content-center align-items-center mb-2 ">
              <div
                id="collapseTwo"
                className="collapse bg-dark text-white h4 fw-normal collapse2-width p-4">
                <p className="pe-lg-5">
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device,
                  all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra
                  costs, no contracts.
                </p>
              </div>
            </div>

            {/* <!-- 3rd que --> */}

            <div className="row ">
              <article className="col-12 d-flex justify-content-start FAQ">
                <p
                  className="h4 bg-dark text-white fw-normal d-flex justify-content-between align-items-center que-width p-4 "
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree">
                  Where can I watch?
                  <i className="fa fa-plus add-icon" aria-hidden="true"></i>
                </p>
              </article>
            </div>

            <div className="d-flex justify-content-center align-items-center mb-2 ">
              <div
                id="collapseThree"
                className="collapse bg-dark text-white h4 fw-normal collapse3-width p-4">
                <p className="">
                  Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on
                  the web at netflix.com from your personal computer or on any internet-connected
                  device that offers the Netflix app, including smart TVs, smartphones, tablets,
                  streaming media players and game consoles.
                  <p className="pt-3 ">
                    You can also download your favourite shows with the iOS, Android, or Windows 10
                    app. Use downloads to watch while you're on the go and without an internet
                    connection. Take Netflix with you anywhere.
                  </p>
                </p>
              </div>
            </div>

            {/* <!-- 4th que --> */}

            <div className="row ">
              <article className="col-12 d-flex justify-content-start  FAQ">
                <p
                  className="h4 bg-dark text-white h-25 fw-normal d-flex justify-content-between align-items-center que-width p-4 "
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour">
                  How do I cancel?
                  <i className="fa fa-plus add-icon" aria-hidden="true"></i>
                </p>
              </article>
            </div>

            <div className="d-flex justify-content-center align-items-center mb-2 ">
              <div
                id="collapseFour"
                className="collapse bg-dark text-white h4 fw-normal collapse2-width p-4">
                <p className="">
                  Netflix is flexible. There are no annoying contracts and no commitments. You can
                  easily cancel your account online in two clicks. There are no cancellation fees –
                  start or stop your account anytime.
                </p>
              </div>
            </div>

            {/* <!-- 5th que --> */}

            <div className="row ">
              <article className="col-12 d-flex justify-content-start  FAQ">
                <p
                  className="h4 bg-dark text-white h-25 fw-normal d-flex justify-content-between align-items-center que-width p-4 "
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive">
                  What can I watch on Netflix?
                  <i className="fa fa-plus add-icon" aria-hidden="true"></i>
                </p>
              </article>
            </div>

            <div className="d-flex justify-content-center align-items-center mb-2 ">
              <div
                id="collapseFive"
                className="collapse bg-dark text-white h4 fw-normal collapse2-width p-4">
                <p className="pe-lg-5">
                  Netflix has an extensive library of feature films, documentaries, TV shows, anime,
                  award-winning Netflix originals, and more. Watch as much as you want, anytime you
                  want.
                </p>
              </div>
            </div>

            {/* <!-- 6th que --> */}

            <div className="row ">
              <article className="col-12 d-flex justify-content-start  FAQ">
                <p
                  className="h4 bg-dark text-white h-25 fw-normal d-flex justify-content-between align-items-center que-width p-4 "
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix">
                  Is Netflix good for kids?
                  <i className="fa fa-plus add-icon" aria-hidden="true"></i>
                </p>
              </article>
            </div>

            <div className="d-flex justify-content-center align-items-center mb-2 ">
              <div
                id="collapseSix"
                className="collapse bg-dark text-white h4 fw-normal collapse-width p-4">
                <p className="pe-3">
                  The Netflix Kids experience is included in your membership to give parents control
                  while kids enjoy family-friendly TV shows and films in their own space.
                  <p className="pt-3 pe-lg-5">
                    Kids profiles come with PIN-protected parental controls that let you restrict
                    the maturity rating of content kids can watch and block specific titles you
                    don't want kids to see.
                  </p>
                </p>
              </div>
            </div>

            {/* <!-- email address  --> */}
            <div className="mb-4">
              <p className="h5 fw-normal text-white d-lg-flex justify-content-lg-center mt-5 ms-4 ms-lg-0 mb-lg-3">
                Ready to watch? Enter your email to create or restart your membership.
              </p>

              <div className=" d-lg-flex justify-content-lg-center m-auto mb-5 ms-4 ms-lg-0">
                <div className="form-floating width-email me-lg-2 mt-3 mt-lg-0">
                  <input
                    type="email"
                    className="form-control email-color"
                    placeholder="Email address"
                  />
                  <label htmlFor="" className=" text-color">
                    Email address
                  </label>
                </div>
                <button className="h4 get-colour rounded-2 border-0 text-white px-5 pb-lg-2 px-lg-4 py-lg-0 py-3 my-lg-0 mt-lg-0 mt-4 ms-lg-0 ms-5  ">
                  Get Started
                  <i className="fa fa-angle-right fs-2 " aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </section>
        </section>
        {/* <!-- FAQ section end --> */}

        <section className="row bg-dark net-line"></section>

        {/* <!-- footer section start --> */}

        <footer className="row footer-height bg-black ">
          <footer className="col-lg-9 col-12 d-flex flex-column m-lg-auto ms-lg-5 me-lg-0 ps-lg-5 pe-lg-0  footer2-height">
            <section className="pt-3 ms-lg-5 ps-lg-4 ms-3 ">
              <p className="text-color pb-3 ">
                Questions? Call
                <span className="text-decoration-underline"> 000-800-919-1694</span>
              </p>
            </section>

            <section className="d-lg-flex justify-content-lg-between  ms-lg-5 ps-lg-4 ms-3 ">
              <div className="">
                <ol className="text-color list-unstyled ">
                  <li className="pb-2 text-decoration-underline">FAQ</li>
                  <li className="pb-2 text-decoration-underline">Account</li>
                  <li className="pb-2 text-decoration-underline">Jobs</li>
                  <li className="pb-2 text-decoration-underline">Privacy</li>
                  <li className="pb-2 text-decoration-underline">Contact Us</li>
                  <li className="pb-2 text-decoration-underline">Only on Netflix</li>
                </ol>
              </div>

              <div className=" ">
                <ol className="text-color list-unstyled ">
                  <li className="pb-2 text-decoration-underline">Gift Card Terms</li>
                  <li className="pb-2 text-decoration-underline">Media Centre</li>
                  <li className="pb-2 text-decoration-underline">Ways to Watch</li>
                  <li className="pb-2 text-decoration-underline">Cookie Preferences</li>
                  <li className="pb-2 text-decoration-underline">Speed Test</li>
                </ol>
              </div>

              <div className="  ">
                <ol className="text-color list-unstyled">
                  <li className="pb-2 text-decoration-underline">Help Centre</li>
                  <li className="pb-2 text-decoration-underline">Investor Relations</li>
                  <li className="pb-2 text-decoration-underline">Terms of Use</li>
                  <li className="pb-2 text-decoration-underline">Corporate Information</li>
                  <li className="pb-2 text-decoration-underline">Legal Notices</li>
                </ol>
              </div>
            </section>

            <div className=" ps-lg-5 ms-lg-4 ms-3 py-lg-2">
              <select className="bg-transparent text-white p-1 px-3 rounded-1 ">
                <option>English</option>
                <option>Hindi</option>
              </select>
            </div>
            <div className="pt-3 ps-lg-5 ms-lg-4 ms-3">
              <p className="text-color fs-6">Netflix India</p>
            </div>
          </footer>
        </footer>
      </main>
    </>
  );
};

export default Home;
