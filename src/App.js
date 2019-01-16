import React, { Component } from "react";
import "./layout/css/main.css";
/* import "./layout/js/main.js"; */

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header-39">
          {/*  <!-- START OF: Nav 2 =====--> */}
          <nav className="nav-02">
            <div className="container container--large">
              <div className="nav-02__box">
                <div className="nav-02__logo">
                  <a
                    className="nav-02__link"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="nav-02__logo_img"
                      src="favicon-32x32.png"
                      alt="Logo"
                    />
                    {/* <!--Or uncomment this <span> to have a word-logo.-->
            <!--span.nav-02__logo_text.white-text
            | Unicorn
            
            --> */}
                  </a>
                </div>
                <div className="nav-02__links js-menu">
                  <ul className="nav-02__list">
                    {/* <li className="nav-02__item">
                      <a
                        className="button   button--black-outline  button--empty "
                        href="#youtube"
                        rel="noopener noreferrer"
                      >
                        <span>About</span>
                      </a>
                    </li>
                    <li className="nav-02__item">
                      <a
                        className="button   button--black-outline  button--empty "
                        href="#features"
                        rel="noopener noreferrer"
                      >
                        <span>Features</span>
                      </a>
                    </li>
                    <li className="nav-02__item">
                      <a
                        className="button   button--black-outline  button--empty "
                        href="mailto:jeprasher@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Contact us</span>
                      </a>
                    </li>
                    <li className="nav-02__item">
                      <a
                        className="button   button--black-outline  button--empty "
                        href="#youtube"
                        rel="noopener noreferrer"
                      >
                        <span>Demo</span>
                      </a>
                    </li> */}
                    <li className="nav-02__item">
                      <a
                        className="button   button--black-outline "
                        href="http://eepurl.com/gbpdar"
                        rel="noopener noreferrer"
                      >
                        <span>Subscribe to follow progress</span>
                      </a>
                    </li>
                  </ul>
                  <div className="nav-02__burger">
                    <button
                      className="burger burger--black js-open-menu"
                      type="button"
                    >
                      <div className="burger__box">
                        <div className="burger__inner" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          {/*   <!-- ===== END OF: Nav 2-->
           */}{" "}
          <div className="container container--mid header-39__container">
            <div className="header-39__text_box">
              <h1 className="heading">
                <strong>Infinite Climbing</strong>{" "}
              </h1>

              <h2 className="">
                An Augmented Reality climbing game that supports kids in their
                rehabilitation.
              </h2>
              <p>
                Infinite Climbing helps sick kids perform tedious exercises by
                turning it into a game.
              </p>
            </div>

            <div className="header-39__video" id="youtube">
              <iframe
                src="https://www.youtube.com/embed/i1H5X_d0qYA"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen=""
                title="iframe"
              />
              <div className="spinner" />
            </div>
          </div>
        </header>

        {/* What is it section */}
        <div className="features-02" id="features">
          <div className="container container--small">
            <div className="title-box title-box--center">
              <h1>What is it?</h1>
              <div className="features-02__item_box">
                <p>
                  Infinite Climbing is a an Augmented Reality app for your
                  phone. <br />
                  <br />
                  You start the app and put it into your AR cardboard headset.{" "}
                </p>
                <img
                  alt="img"
                  className=""
                  src="img/other/aryzonimage.jpg"
                  style={{ "max-width": "500px", height: "300px" }}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <ul className="features-02__items">
              <li className="features-02__item">
                <div className="features-02__item_box">
                  <img
                    alt="img"
                    className=""
                    src="img/other/collectgif.gif"
                    style={{ "max-width": "500px", height: "300px" }}
                  />
                </div>
              </li>
              <li className="features-02__item">
                <div className="features-02__item_box">
                  <p>
                    When you start, red & green cubes start to appear and come
                    towards you on a digital layer that blends into the real
                    world. <br />
                    <br />
                    You get points by moving your head towards where the green
                    cubes appear & you lose points if you don't manage to avoid
                    the red cubes.
                    <br />
                    <br />
                    This requires climbing left, right, up, down & really
                    activates your muscles in the upper body. <br />
                    <br />
                    Challenge yourself with harder levels & see the progress you
                    have made since you started using the app.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- ===== END OF: Header 39-->
<!-- START OF: Features 2 =====-->
 */}
        <div className="features-02" id="features">
          <div className="container container--small">
            <div className="title-box title-box--center">
              <h1>How does it work? </h1>
              <p>
                We are creating a game that adds digital elements for the kids
                to collect on real life climbing structures, so they can do real
                exercise & regain their strength faster. All while playing.
              </p>
            </div>
          </div>
          <div className="container">
            <ul className="features-02__items">
              <li className="features-02__item">
                <div className="features-02__item_box">
                  <p className="">
                    <strong>- Gamification:</strong> Dozens of levels to
                    complete & scores to beat! Positive reinforcement to keep
                    kids engaged while being challenging. <br />
                    <br />
                    <strong>- Adaptability:</strong> Ability to adjust level
                    based on physical strength level. Use elastic bands or wall
                    bars for beginners instead of monkey bars.
                    <br />
                    <br />
                    <strong>- Focus on recovery:</strong> Data of the kids
                    progress will be visible at all times. Extra data on
                    strength level can optionally be fed to assist
                    physiotherapists supporting the kids recovery.
                    <br />
                  </p>
                </div>
              </li>
              <li className="features-02__item">
                <div className="features-02__item_box">
                  <img
                    alt="img"
                    className=""
                    src="img/other/climbgifpretendloop2.gif"
                    style={{ "max-width": "500px", height: "300px" }}
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- ===== END OF: Features 2-->
<!-- START OF: Slider 01 =====-->
 */}

        <div className="features-02" id="features">
          <div className="container container--small">
            <div
              className="title-box title-box--center"
              style={{ "margin-bottom": "0px" }}
            >
              <h1 className="heading">Why Infinite Climbing?</h1>
              <p>
                Thousands of kids are physically weakened due to sickness &
                especially in their upper body. <br />
                <br />
                Currently kids are pushed to do push ups and sit with
                uninspiring hand grippers to improve upper body strength. <br />
                This can be made 10x more engaging if it was a natural fun
                activity for the kids. Like climbing. <br />
                <br />
                Climbing is an excellent tool to help climbers gain strength,
                improve cognitive functions & gain self-esteem. <br />
                <br />
                By turning climbing into a competitive game can kids be
                motivated to move & thereby recover faster.
              </p>
            </div>
            <div className="header-39__buttons" style={{ "margin-top": "0px" }}>
              <div className="buttons-set">
                <div id="mc_embed_signup">
                  <form name="mailchimp" method="POST">
                    <input type="hidden" name="form-name" value="mailchimp" />

                    <input
                      type="email"
                      name="email"
                      className="email"
                      placeholder="Keep me updated!"
                      style={{ height: "52px" }}
                      required
                    />

                    <button
                      type="submit"
                      className="button   button--accent-bg  button--large "
                      style={{
                        "background-color": "#4D61FC",
                        padding: "10px"
                      }}
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ===== END OF: Slider 01-->
<!-- START OF: Testimonials 01 =====-->
 */}
        {/* <div className="testimonials-01">
          <div className="container container--small">
            <div className="title-box title-box--center">
              <h2 className="heading">What People Say</h2>
              <p className="title-box__text">
                Grey, aged pudding is best marinated with sweet hollanders
                sauce.
              </p>
            </div>
          </div>
          <div className="testimonials-01__container container">
            <div className="slider">
              <div className="slider__arrow slider__arrow--prev">
                <button
                  className="circle-button js-prev-arrow circle-button--icon circle-button--light-blue-bg"
                  type="button"
                >
                  <span className="icon">
                    <svg
                      width="24"
                      height="17"
                      viewBox="0 0 24 17"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="styleguide" fill="none" fillRule="evenodd">
                        <g
                          id="Unicorn-Styleguide"
                          transform="translate(-121 -2006)"
                          fillRule="nonzero"
                          fill="#00396B"
                        >
                          <g id="Icons" transform="translate(55 1963)">
                            <g
                              id="arrow-pointing-to-right"
                              transform="translate(66 43)"
                            >
                              <path
                                d="M23.673 7.688L16.531.336a1.094 1.094 0 0 0-1.578 0 1.173 1.173 0 0 0 0 1.625l5.237 5.39H1.116C.5 7.351 0 7.866 0 8.5s.5 1.149 1.116 1.149H20.19l-5.237 5.39a1.173 1.173 0 0 0 0 1.625 1.097 1.097 0 0 0 1.578 0l7.142-7.352a1.173 1.173 0 0 0 0-1.624z"
                                id="Shape"
                                transform="matrix(-1 0 0 1 24 0)"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                </button>
              </div>
              <div className="slider__arrow slider__arrow--next">
                <button
                  className="circle-button js-next-arrow circle-button--icon circle-button--light-blue-bg"
                  type="button"
                >
                  <span className="icon">
                    <svg viewBox="0 0 13 10" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.823 4.164L8.954.182a.592.592 0 0 0-.854 0 .635.635 0 0 0 0 .88l2.836 2.92H.604A.614.614 0 0 0 0 4.604c0 .344.27.622.604.622h10.332L8.1 8.146a.635.635 0 0 0 0 .88.594.594 0 0 0 .854 0l3.869-3.982a.635.635 0 0 0 0-.88z"
                        fillRule="nonzero"
                        fill="#00396B"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <ul
                className="slider__box js-slider"
                data-slider-config='{"dots": true, "infinite": true, "speed": 300, "fade": false, "cssEase": "ease", "adaptiveHeight": false, "lazyLoad": "ondemand"}'
              >
                <li className="slider__item">
                  <div className="testimonials-01__item">
                    <img
                      alt="img"
                      className="testimonials-01__logo"
                      src="img/logos/companies/intercom.svg"
                    />
                    <p className="testimonials-01__text">
                      "Lotus nixs ducunt ad domina. A falsis, orgia festus
                      castor. Sunt brodiumes convertam superbus, fortis
                      galataees. Pol, historia! Nobilis sagas ducunt ad sectam.
                      Eheu. Nunquam quaestio medicina. Acipensers ire! Cur era
                      messis? Cum accentor velum, omnes demolitionees
                      experientia talis, neuter finises. Lotus brabeuta callide
                      anhelares messor est."
                    </p>
                    <div className="testimonials-01__author">
                      John Allen
                      <br />
                      Co-founder & CMO
                    </div>
                  </div>
                </li>
                <li className="slider__item">
                  <div className="testimonials-01__item">
                    <img
                      alt="img"
                      className="testimonials-01__logo"
                      src="img/logos/companies/instacart.svg"
                    />
                    <p className="testimonials-01__text">
                      "Hippotoxotas crescere! Burgus de flavum omnia, quaestio
                      mons! Audax accentor unus experientias xiphias est. A
                      falsis, rumor lotus finis. Ignigena de secundus exsul,
                      locus idoleum! Nunquam locus torquis. Sunt absolutioes
                      amor neuter, castus plasmatores. A falsis, lura lotus
                      luna. Ferox, placidus caesiums acceleratrix captis de
                      fatalis, grandis nuclear vexatum iacere."
                    </p>
                    <div className="testimonials-01__author">
                      Bob Musk
                      <br />
                      Chief Designer
                    </div>
                  </div>
                </li>
                <li className="slider__item">
                  <div className="testimonials-01__item">
                    <img
                      alt="img"
                      className="testimonials-01__logo testimonials-01__logo--round"
                      src="https://unicornplatform.com/app/img/photos/team-2/via-talen-de-st-croix.jpg"
                    />
                    <p className="testimonials-01__text">
                      "Sunt habenaes carpseris camerarius, varius abaculuses.
                      Nunquam locus cacula. Cur amor ortum? Vortex raptus
                      candidatus est. Hercle, fraticinida varius!, fiscina!
                      Hercle, nuptia audax!, mirabilis torquis! Lumens studere
                      in albus aetheres! Impositios ridetis, tanquam azureus
                      eleates. Azureus, nobilis indexs hic attrahendam de talis,
                      mirabilis solitudo. Est festus lura, cesaris."
                    </p>
                    <div className="testimonials-01__author">
                      Mark Jobs
                      <br />
                      Frontend developer-freelancer
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div> 
          <!-- ===== END OF: Testimonials 01-->

<!-- START OF: Clients 03 =====--> 
          <div className="clients-03">
            <div className="container container--mid">
              <ul className="clients-03__list">
               
                <li className="clients-03__item">
                  <img
                    alt="img"
                    className="clients-03__logo"
                    src="img/logos/companies/facebook.svg"
                    height="30"
                  />
                </li>
                <li className="clients-03__item">
                  <img
                    alt="img"
                    className="clients-03__logo"
                    src="img/logos/companies/ibm.svg"
                    height="20"
                  />
                </li>
                <li className="clients-03__item">
                  <img
                    alt="img"
                    className="clients-03__logo"
                    src="img/logos/companies/dribbble.svg"
                    height="30"
                  />
                </li>
                <li className="clients-03__item">
                  <img
                    alt="img"
                    className="clients-03__logo"
                    src="img/logos/companies/microsoft.svg"
                    height="20"
                  />
                </li>
                <li className="clients-03__item">
                  <img
                    alt="img"
                    className="clients-03__logo"
                    src="img/logos/companies/adobe.svg"
                    height="30"
                  />
                </li>
                <li className="clients-03__item">
                  <img
                    alt="img"
                    className="clients-03__logo"
                    src="img/logos/companies/invision.svg"
                    height="30"
                  />
                </li>
                <li className="clients-03__item">
                  <img
                    alt="img"
                    className="clients-03__logo"
                    src="img/logos/companies/virgin.svg"
                    height="40"
                  />
                </li>
              </ul>
            </div>
          </div>
         <!-- ===== END OF: Clients 03-->
<!-- START OF: Footer 02 =====-->
 */}

        <div className="footer-02">
          <div>
            <div className="container">
              <div className="footer-02__wrapper">
                <div className="footer-02__text">
                  &copy; 2018&nbsp;
                  <a className="footer-02__link" href="/">
                    Infinite Climbing
                  </a>
                  . All rights reserved.
                </div>
                <div className="social-buttons">
                  <ul className="social-buttons__list">
                    {/* <li className="social-buttons__item">
                    <a
                      className="social-buttons__link"
                      href="https://www.facebook.com/unicornplatform/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        alt="img"
                        className="social-buttons__icon"
                        src="img/icons/social/white/facebook.svg"
                      />
                    </a>
                  </li> */}
                    <li className="social-buttons__item">
                      <a
                        className="social-buttons__link"
                        href="https://twitter.com/jepras_"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          alt="img"
                          className="social-buttons__icon"
                          src="img/icons/social/white/twitter.svg"
                        />
                      </a>
                    </li>
                    <li className="social-buttons__item">
                      <a
                        className="social-buttons__link"
                        href="http://instagram.com/jep.ras"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          alt="img"
                          className="social-buttons__icon"
                          src="img/icons/social/white/instagram.svg"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- ===== END OF: Footer 02-->
    <!-- This is the root element of the image gallery plugin - PhotoSwipe (https://github.com/dimsemenov/PhotoSwipe)-->
    <!-- Do not delete it.-->
    <!-- It's invisible to user.-->
 */}{" "}
          <div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="pswp__bg" />
            <div className="pswp__scroll-wrap">
              <div className="pswp__container">
                <div className="pswp__item" />
                <div className="pswp__item" />
                <div className="pswp__item" />
              </div>
              <div className="pswp__ui pswp__ui--hidden">
                <div className="pswp__top-bar">
                  <div className="pswp__counter" />
                  <button
                    className="pswp__button pswp__button--close"
                    title="Close (Esc)"
                  />
                  <button
                    className="pswp__button pswp__button--share"
                    title="Share"
                  />
                  <button
                    className="pswp__button pswp__button--fs"
                    title="Toggle fullscreen"
                  />
                  <button
                    className="pswp__button pswp__button--zoom"
                    title="Zoom in/out"
                  />
                  <div className="pswp__preloader">
                    <div className="pswp__preloader__icn">
                      <div className="pswp__preloader__cut">
                        <div className="pswp__preloader__donut" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                  <div className="pswp__share-tooltip" />
                </div>
                <button
                  className="pswp__button pswp__button--arrow--left"
                  title="Previous (arrow left)"
                />
                <button
                  className="pswp__button pswp__button--arrow--right"
                  title="Next (arrow right)"
                />
                <div className="pswp__caption">
                  <div className="pswp__caption__center" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
