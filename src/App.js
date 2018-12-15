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
                      src="img/other/unicorn-logo.png"
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
                    <li className="nav-02__item">
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
                    </li>
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
              <h2 className="heading">
                Ever wondered what real climbing in Mixed Reality looks like?
              </h2>
              <p>
                At Infinity Climbing we are on a mission to enhance physical
                health by making climbing captivating and accessible for all
              </p>
            </div>
            <div className="header-39__buttons">
              <div className="buttons-set">
                <ul className="buttons-set__list">
                  <li className="buttons-set__item">
                    <a
                      className="button   button--accent-bg  button--large "
                      href="/"
                      target=""
                    >
                      <span>Keep me updated!</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-39__video" id="youtube">
              <iframe
                src="https://www.youtube.com/embed/GQOWCfMWzvg"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen=""
                title="iframe"
              />
              <div className="spinner" />
            </div>
          </div>
        </header>
        {/* <!-- ===== END OF: Header 39-->
<!-- START OF: Features 2 =====-->
 */}
        <div className="features-02" id="features">
          <div className="container container--small">
            <div className="title-box title-box--center">
              <h2 className="heading">
                Integrated play to increase physical well being
              </h2>
              <p className="title-box__text">
                In a hackathon with the purpose to create XR solutions to
                activate kids we learned a few stats we want to change
              </p>
            </div>
          </div>
          <div className="container">
            <ul className="features-02__items">
              <li className="features-02__item">
                <div className="features-02__item_box">
                  <div className="features-02__number">
                    40%
                    <span className="features-02__word">
                      reduced fitness level
                    </span>
                  </div>
                  <p className="features-02__description">
                    for hospitalized kids during treatment, which equals men &
                    women in their 70's. And their fitness level is still
                    reduced a year after treatment.
                  </p>
                </div>
              </li>
              <li className="features-02__item">
                <div className="features-02__item_box">
                  <div className="features-02__number">
                    20%
                    <span className="features-02__word">
                      lower strength of handgrip
                    </span>
                  </div>
                  <p className="features-02__description">
                    which is an indicator for overall physical level. The higher
                    the strength, the better physical shape.
                  </p>
                </div>
              </li>
              <li className="features-02__item">
                <div className="features-02__item_box">
                  <div className="features-02__number">
                    100%<span className="features-02__word">enjoyment</span>
                  </div>
                  <p className="features-02__description">
                    while working out is possible. Climbing distracts the
                    climber from physical pain & mental issues while speeding up
                    own recovery
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- ===== END OF: Features 2-->
<!-- START OF: Slider 01 =====-->
 */}
        <div className="slider-01" id="pictures">
          <div className="container container--small">
            <div className="slider-01__title_box">
              <h1 className="heading">
                How can these kids be motivated to move?
              </h1>
              <p>
                By creating an interesting environment and adding gamification
                to climbing activities, can it become an addicting &
                strengthening activity
              </p>
            </div>
          </div>
          <div className="container slider-01__container">
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
                  <img
                    alt="img"
                    className="slider__img"
                    src="img/other/manequin.png"
                    style={{ "object-fit": "cover" }}
                  />
                </li>
                <li className="slider__item">
                  <img
                    alt="img"
                    className="slider__img"
                    src="img/other/strength.PNG"
                    style={{ "object-fit": "cover" }}
                  />
                </li>

                <li className="slider__item">
                  <img
                    alt="img"
                    className="slider__img"
                    src="img/other/monkeybar.png"
                    style={{ "object-fit": "cover" }}
                  />
                </li>
                {/* <li className="slider__item">
                  <img
                    alt="img"
                    className="slider__img"
                    src="https://unicornplatform.com/app/img/screenshots/dashboard-concept-4.png"
                  />
                </li> */}
              </ul>
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
        </div> */}
        {/* <!-- ===== END OF: Testimonials 01-->
<!-- START OF: Pricing 01 =====-->
 */}
        {/* <div className="pricing-01">
          <div className="container container--small">
            <div className="title-box title-box--center">
              <h2 className="heading">Choose Your Plan</h2>
              <p className="title-box__text">
                Ubi est talis stella? Mirabilis, regius habitios semper
                acquirere de gratis, domesticus consilium.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="pricing-01__buttons">
              <ul className="pricing-01__buttons_list">
                <li className="tab">
                  <button
                    className="tab__button js-open-tab"
                    type="button"
                    data-index="monthly-price-1"
                    data-group="my-pricing-group-1"
                  >
                    Monthly
                  </button>
                </li>
                <li className="tab">
                  <button
                    className="tab__button  state-active-tab js-open-tab"
                    type="button"
                    data-index="yearly-price-1"
                    data-group="my-pricing-group-1"
                  >
                    Yearly
                  </button>
                </li>
              </ul>
              <div
                className="pricing-01__badge js-tab-content state-active-tab"
                data-index="yearly-price-1"
                data-group="my-pricing-group-1"
              >
                <span className="pointed-badge   pointed-badge--acid-bg pointed-badge--left">
                  <span className="pointed-badge__text">+2 free months</span>
                  <img
                    className="emoji  "
                    src="img/emoji/gift.png"
                    alt="Emoji Gift PNG"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="pricing-01__cards_container">
              <img
                alt="img"
                className="pricing-01__decoration"
                src="img/other/grid.png"
              />
              <ul className="pricing-01__cards_list">
                <li className="pricing-01__card_box">
                  <div className="pricing-01__card">
                    <div className="pricing-01__card_top">
                      <img
                        alt="img"
                        className="pricing-01__card_img"
                        src="img/emoji/scooter.png"
                      />
                    </div>
                    <div className="pricing-01__card_bottom">
                      <div className="pricing-01__card_title_box">
                        <h3 className="pricing-01__card_title">Freelancer</h3>
                        <div
                          className="pricing-01__card_price js-tab-content state-active-tab"
                          data-index="yearly-price-1"
                          data-group="my-pricing-group-1"
                        >
                          $9
                          <div className="pricing-01__card_period">/month</div>
                        </div>
                        <div
                          className="pricing-01__card_price js-tab-content"
                          data-index="monthly-price-1"
                          data-group="my-pricing-group-1"
                        >
                          $11
                          <div className="pricing-01__card_period">/month</div>
                        </div>
                      </div>
                      <div className="pricing-01__card_info text">
                        After boiling the tofus, garnish leek, meatballs and
                        teriyaki with it in a pan. With apples drink coconut
                        milk. Honey soup is just not the same.
                      </div>
                      <div className="pricing-01__card_button">
                        <button
                          className="button   button--black-outline "
                          type="submit"
                        >
                          <span className="button__text">Start Now</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="pricing-01__card_box">
                  <div className="pricing-01__card">
                    <div className="pricing-01__card_top">
                      <img
                        alt="img"
                        className="pricing-01__card_img"
                        src="img/emoji/motorcycle.png"
                      />
                    </div>
                    <div className="pricing-01__card_bottom">
                      <div className="pricing-01__card_title_box">
                        <h3 className="pricing-01__card_title">Team</h3>
                        <div
                          className="pricing-01__card_price js-tab-content state-active-tab"
                          data-index="yearly-price-1"
                          data-group="my-pricing-group-1"
                        >
                          $19
                          <div className="pricing-01__card_period">/month</div>
                        </div>
                        <div
                          className="pricing-01__card_price js-tab-content"
                          data-index="monthly-price-1"
                          data-group="my-pricing-group-1"
                        >
                          $23
                          <div className="pricing-01__card_period">/month</div>
                        </div>
                      </div>
                      <div className="pricing-01__card_info text">
                        Everyone loves the consistency of turkey mousse garnishd
                        with thin szechuan pepper. Chicory combines greatly with
                        roasted avocado.
                      </div>
                      <div className="pricing-01__card_button">
                        <button
                          className="button   button--alt-accent-bg "
                          type="submit"
                        >
                          <span className="button__text">Start Now</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        {/* <!-- ===== END OF: Pricing 01-->
<!-- START OF: Clients 03 =====-->
 */}
        <div className="clients-03">
          <div className="container container--mid">
            <ul className="clients-03__list">
              {/*       <!--Please specify the height of each logo manually.-->
               */}{" "}
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
        {/* <!-- ===== END OF: Clients 03-->
<!-- START OF: Footer 02 =====-->
 */}
        <div className="footer-02">
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
        {/* <div className="via-unicorn-platform">
          <a
            className="via-unicorn-platform__link"
            href="https://unicornplatform.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="This page was generated via Unicorn Platform"
          >
            Page via <b>Unicorn Platform</b>
          </a>
        </div> */}
      </div>
    );
  }
}

export default App;
