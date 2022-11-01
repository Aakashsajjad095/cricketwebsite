import React from "react"
import Link from "next/link"
import Container from 'react-bootstrap/Container'
import dynamic from "next/dynamic"





var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel/dist/assets/owl.theme.default.css"


const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Responsive = {
  0 : {
    items : 1,
  },
  667 : {
    items : 2,

  },
  992 : {
    items : 3,
  },
  1299 : {
    items : 4,
  }
}

export default function MatchesSlider() {
    return(
        <section className="matches-header-slider bg-light-gray">
          <Container>
            <OwlCarousel
            className="owl-theme ulcwp-slider"
            responsive={Responsive}
            dots={false}
            autoplay={false}
            margin={20}
            nav
            navText={[
              "<img src='/images/arrow-left.svg' alt=''>",
              "<img src='/images/arrow-right.svg' alt=''>"
            ]}
            >
            <div className="item">
              <div className="ulcwp-main-card-data ulcwp-border ulcwp-rounded bg-white">
                <Link href="/">
                  <a>
                    <div className="ulcwp-main-card-head ulcwp-border-bottom">
                      <h4>Preliminary quarter final, Jaipur, DEC...</h4>
                      <p>4th test, at indore, sep 4-8 2021</p>
                    </div>
                    <div className="ulcwp-fixtures-data-card">
                      <div className="match-status">Live</div>
                      <div className="ulcwp-match-team-data Team_Home">
                        <div className="ulcwp-match-team-info d-flex justify-content-between align-items-center">
                          <div className="ulcwp-team-col d-flex align-items-center">
                            <span className="ulcwp-team-img">
                              <img src="https://www.sportsadda.com/static-assets/images/cricket/teams/6.png" alt=""/>
                            </span>
                            <div className="ulcwp-team-name">
                              <span className="ulcwp-team-longname">Pakistan</span>
                              <span className="ulcwp-team-shortname">PAK</span>
                            </div>
                          </div>
                          <div className="ulcwp-team-score">342/10 <span>(7 ov)</span></div>
                        </div>
                      </div>
                      <div className="ulcwp-match-team-data Team_Away">
                        <div className="ulcwp-match-team-info d-flex justify-content-between align-items-center">
                          <div className="ulcwp-team-col d-flex align-items-center">
                            <span className="ulcwp-team-img">
                              <img src="https://www.sportsadda.com/static-assets/images/cricket/teams/4.png" alt=""/>
                            </span>
                            <div className="ulcwp-team-name">
                              <span className="ulcwp-team-longname">india</span>
                              <span className="ulcwp-team-shortname">IND</span>
                            </div>
                          </div>
                          <div className="ulcwp-team-score">301 &amp; 18/2 <span>(7 ov)</span></div>
                        </div>
                      </div>
                      <div className="ulcwp-match-info">
                        <p>Day 2 - Amo-Region lead by 120 runs.</p>
                      </div>
                    </div>
                    <div className="ulcwp-match-prediction">
                      <div className="ulcwp-match-prediction-top d-flex">
                        <div className="ulcwp-team-prediction-1" style={{ width: '50%' }}></div>
                        <div className="ulcwp-prediction-draw" style={{ width: '20%' }}></div>
                        <div className="ulcwp-team-prediction-2" style={{ width: '30%' }}></div>
                      </div>
                      <div className="ulcwp-match-prediction-bottom d-flex justify-content-between">
                        <div className="ulcwp-prediction-name d-flex align-items-center">
                          <span className="ulcwp-team-prediction-1"></span>
                          <p>Pakistan <span>50%</span></p>
                        </div>
                        <div className="ulcwp-prediction-name d-flex align-items-center">
                          <span className="ulcwp-prediction-draw"></span>
                          <p>Draw <span>20%</span></p>
                        </div>
                        <div className="ulcwp-prediction-name d-flex align-items-center">
                          <span className="ulcwp-team-prediction-2"></span>
                          <p>India <span>30%</span></p>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>	
							</div>
            </div>
            <div className="item">
              <div className="ulcwp-main-card-data ulcwp-border ulcwp-rounded bg-white">
                <Link href="/">
                  <a>
                    <div className="ulcwp-main-card-head ulcwp-border-bottom">
                      <h4>Preliminary quarter final, Jaipur, DEC...</h4>
                      <p>4th test, at indore, sep 4-8 2021</p>
                    </div>
                    <div className="ulcwp-fixtures-data-card">
                      <div className="ulcwp-match-team-data Team_Home">
                        <div className="ulcwp-match-team-info d-flex justify-content-between align-items-center">
                          <div className="ulcwp-team-col d-flex align-items-center">
                            <span className="ulcwp-team-img">
                              <img src="https://www.sportsadda.com/static-assets/images/cricket/teams/6.png" alt=""/>
                            </span>
                            <div className="ulcwp-team-name">
                              <span className="ulcwp-team-longname">Pakistan</span>
                              <span className="ulcwp-team-shortname">PAK</span>
                            </div>
                          </div>
                          <div className="ulcwp-team-score">342/10 <span>(7 ov)</span></div>
                        </div>
                      </div>
                      <div className="ulcwp-match-team-data Team_Away">
                        <div className="ulcwp-match-team-info d-flex justify-content-between align-items-center">
                          <div className="ulcwp-team-col d-flex align-items-center">
                            <span className="ulcwp-team-img">
                              <img src="https://www.sportsadda.com/static-assets/images/cricket/teams/4.png" alt=""/>
                            </span>
                            <div className="ulcwp-team-name">
                              <span className="ulcwp-team-longname">india</span>
                              <span className="ulcwp-team-shortname">IND</span>
                            </div>
                          </div>
                          <div className="ulcwp-team-score">301 &amp; 18/2 <span>(7 ov)</span></div>
                        </div>
                      </div>
                      <div className="ulcwp-match-info">
                        <p>Day 2 - Amo-Region lead by 120 runs.</p>
                      </div>
                    </div>
                    <div className="player-of-match d-flex align-items-center">
                      <div className="ulcwp-player-img ulcwp-border">
                        <img src="https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/312100/312178.jpg" alt="" />
                      </div>
                      <div className="ulcwp-player-name"><h4>Muhammad Rizwan</h4></div>
                    </div>
                  </a>
                </Link>	
							</div>
            </div>
            <div className="item">
              <div className="ulcwp-main-card-data ulcwp-border ulcwp-rounded bg-white">
                <Link href="/">
                  <a>
                    <div className="ulcwp-main-card-head ulcwp-border-bottom">
                      <h4>Preliminary quarter final, Jaipur, DEC...</h4>
                      <p>4th test, at indore, sep 4-8 2021</p>
                    </div>
                    <div className="ulcwp-fixtures-data-card">
                      <div className="ulcwp-match-team-data Team_Home">
                        <div className="ulcwp-match-team-info d-flex justify-content-between align-items-center">
                          <div className="ulcwp-team-col d-flex align-items-center">
                            <span className="ulcwp-team-img">
                              <img src="https://www.sportsadda.com/static-assets/images/cricket/teams/6.png" alt=""/>
                            </span>
                            <div className="ulcwp-team-name">
                              <span className="ulcwp-team-longname">Pakistan</span>
                              <span className="ulcwp-team-shortname">PAK</span>
                            </div>
                          </div>
                          <div className="ulcwp-match-date">24th December</div>
                        </div>
                      </div>
                      <div className="ulcwp-match-team-data Team_Away">
                        <div className="ulcwp-match-team-info d-flex justify-content-between align-items-center">
                          <div className="ulcwp-team-col d-flex align-items-center">
                            <span className="ulcwp-team-img">
                              <img src="https://www.sportsadda.com/static-assets/images/cricket/teams/4.png" alt=""/>
                            </span>
                            <div className="ulcwp-team-name">
                              <span className="ulcwp-team-longname">india</span>
                              <span className="ulcwp-team-shortname">IND</span>
                            </div>
                          </div>
                          <div className="ulcwp-match-time">8:30 AM (IST)</div>
                        </div>
                      </div>
                      <div className="ulcwp-match-info">
                        <p>5 hrs 21 mins to toss</p>
                      </div>
                    </div>
                    <div className="ulcwp-match-prediction">
                      <div className="ulcwp-match-prediction-top d-flex">
                        <div className="ulcwp-team-prediction-1" style={{ width: '50%' }}></div>
                        <div className="ulcwp-prediction-draw" style={{ width: '20%' }}></div>
                        <div className="ulcwp-team-prediction-2" style={{ width: '30%' }}></div>
                      </div>
                      <div className="ulcwp-match-prediction-bottom d-flex justify-content-between">
                        <div className="ulcwp-prediction-name d-flex align-items-center">
                          <span className="ulcwp-team-prediction-1"></span>
                          <p>Pakistan <span>50%</span></p>
                        </div>
                        <div className="ulcwp-prediction-name d-flex align-items-center">
                          <span className="ulcwp-prediction-draw"></span>
                          <p>Draw <span>20%</span></p>
                        </div>
                        <div className="ulcwp-prediction-name d-flex align-items-center">
                          <span className="ulcwp-team-prediction-2"></span>
                          <p>India <span>30%</span></p>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>	
							</div>
            </div>
            <div className="item">
              <div className="ulcwp-main-card-data ulcwp-border ulcwp-rounded bg-white">
                <Link href="/">
                  <a>
                    <div className="ulcwp-main-card-head ulcwp-border-bottom">
                      <h4>Preliminary quarter final, Jaipur, DEC...</h4>
                      <p>4th test, at indore, sep 4-8 2021</p>
                    </div>
                    <div className="ulcwp-fixtures-data-card">
                      <div className="ulcwp-match-team-data Team_Home">
                        <div className="ulcwp-match-team-info d-flex justify-content-between align-items-center">
                          <div className="ulcwp-team-col d-flex align-items-center">
                            <span className="ulcwp-team-img">
                              <img src="https://www.sportsadda.com/static-assets/images/cricket/teams/6.png" alt=""/>
                            </span>
                            <div className="ulcwp-team-name">
                              <span className="ulcwp-team-longname">Pakistan</span>
                              <span className="ulcwp-team-shortname">PAK</span>
                            </div>
                          </div>
                          <div className="ulcwp-team-score">342/10 <span>(7 ov)</span></div>
                        </div>
                      </div>
                      <div className="ulcwp-match-team-data Team_Away">
                        <div className="ulcwp-match-team-info d-flex justify-content-between align-items-center">
                          <div className="ulcwp-team-col d-flex align-items-center">
                            <span className="ulcwp-team-img">
                              <img src="https://www.sportsadda.com/static-assets/images/cricket/teams/4.png" alt=""/>
                            </span>
                            <div className="ulcwp-team-name">
                              <span className="ulcwp-team-longname">india</span>
                              <span className="ulcwp-team-shortname">IND</span>
                            </div>
                          </div>
                          <div className="ulcwp-team-score">301 &amp; 18/2 <span>(7 ov)</span></div>
                        </div>
                      </div>
                      <div className="ulcwp-match-info">
                        <p>Day 2 - Amo-Region lead by 120 runs.</p>
                      </div>
                    </div>
                    <div className="ulcwp-match-prediction">
                      <div className="ulcwp-match-prediction-top d-flex">
                        <div className="ulcwp-team-prediction-1" style={{ width: '50%' }}></div>
                        <div className="ulcwp-prediction-draw" style={{ width: '20%' }}></div>
                        <div className="ulcwp-team-prediction-2" style={{ width: '30%' }}></div>
                      </div>
                      <div className="ulcwp-match-prediction-bottom d-flex justify-content-between">
                        <div className="ulcwp-prediction-name d-flex align-items-center">
                          <span className="ulcwp-team-prediction-1"></span>
                          <p>Pakistan <span>50%</span></p>
                        </div>
                        <div className="ulcwp-prediction-name d-flex align-items-center">
                          <span className="ulcwp-prediction-draw"></span>
                          <p>Draw <span>20%</span></p>
                        </div>
                        <div className="ulcwp-prediction-name d-flex align-items-center">
                          <span className="ulcwp-team-prediction-2"></span>
                          <p>India <span>30%</span></p>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>	
							</div>
            </div>
            <div className="item">
              <div className="ulcwp-main-card-data ulcwp-border ulcwp-rounded bg-white">
                <Link href="/">
                  <a>
                    <div className="ulcwp-main-card-head ulcwp-border-bottom">
                      <h4>Preliminary quarter final, Jaipur, DEC...</h4>
                      <p>4th test, at indore, sep 4-8 2021</p>
                    </div>
                    <div className="ulcwp-fixtures-data-card">
                      <div className="ulcwp-match-team-data Team_Home">
                        <div className="ulcwp-match-team-info d-flex justify-content-between align-items-center">
                          <div className="ulcwp-team-col d-flex align-items-center">
                            <span className="ulcwp-team-img">
                              <img src="https://www.sportsadda.com/static-assets/images/cricket/teams/6.png" alt=""/>
                            </span>
                            <div className="ulcwp-team-name">
                              <span className="ulcwp-team-longname">Pakistan</span>
                              <span className="ulcwp-team-shortname">PAK</span>
                            </div>
                          </div>
                          <div className="ulcwp-team-score">342/10 <span>(7 ov)</span></div>
                        </div>
                      </div>
                      <div className="ulcwp-match-team-data Team_Away">
                        <div className="ulcwp-match-team-info d-flex justify-content-between align-items-center">
                          <div className="ulcwp-team-col d-flex align-items-center">
                            <span className="ulcwp-team-img">
                              <img src="https://www.sportsadda.com/static-assets/images/cricket/teams/4.png" alt=""/>
                            </span>
                            <div className="ulcwp-team-name">
                              <span className="ulcwp-team-longname">india</span>
                              <span className="ulcwp-team-shortname">IND</span>
                            </div>
                          </div>
                          <div className="ulcwp-team-score">301 &amp; 18/2 <span>(7 ov)</span></div>
                        </div>
                      </div>
                      <div className="ulcwp-match-info">
                        <p>Day 2 - Amo-Region lead by 120 runs.</p>
                      </div>
                    </div>
                    <div className="ulcwp-match-prediction">
                      <div className="ulcwp-match-prediction-top d-flex">
                        <div className="ulcwp-team-prediction-1" style={{ width: '50%' }}></div>
                        <div className="ulcwp-prediction-draw" style={{ width: '20%' }}></div>
                        <div className="ulcwp-team-prediction-2" style={{ width: '30%' }}></div>
                      </div>
                      <div className="ulcwp-match-prediction-bottom d-flex justify-content-between">
                        <div className="ulcwp-prediction-name d-flex align-items-center">
                          <span className="ulcwp-team-prediction-1"></span>
                          <p>Pakistan <span>50%</span></p>
                        </div>
                        <div className="ulcwp-prediction-name d-flex align-items-center">
                          <span className="ulcwp-prediction-draw"></span>
                          <p>Draw <span>20%</span></p>
                        </div>
                        <div className="ulcwp-prediction-name d-flex align-items-center">
                          <span className="ulcwp-team-prediction-2"></span>
                          <p>India <span>30%</span></p>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>	
							</div>
            </div>
            <div className="item">
              <div className="ulcwp-main-card-data ulcwp-border ulcwp-rounded bg-white">
                <Link href="/">
                  <a>
                    <div className="ulcwp-main-card-head ulcwp-border-bottom">
                      <h4>Preliminary quarter final, Jaipur, DEC...</h4>
                      <p>4th test, at indore, sep 4-8 2021</p>
                    </div>
                    <div className="ulcwp-fixtures-data-card">
                      <div className="ulcwp-match-team-data Team_Home">
                        <div className="ulcwp-match-team-info d-flex justify-content-between align-items-center">
                          <div className="ulcwp-team-col d-flex align-items-center">
                            <span className="ulcwp-team-img">
                              <img src="https://www.sportsadda.com/static-assets/images/cricket/teams/6.png" alt=""/>
                            </span>
                            <div className="ulcwp-team-name">
                              <span className="ulcwp-team-longname">Pakistan</span>
                              <span className="ulcwp-team-shortname">PAK</span>
                            </div>
                          </div>
                          <div className="ulcwp-team-score">342/10 <span>(7 ov)</span></div>
                        </div>
                      </div>
                      <div className="ulcwp-match-team-data Team_Away">
                        <div className="ulcwp-match-team-info d-flex justify-content-between align-items-center">
                          <div className="ulcwp-team-col d-flex align-items-center">
                            <span className="ulcwp-team-img">
                              <img src="https://www.sportsadda.com/static-assets/images/cricket/teams/4.png" alt=""/>
                            </span>
                            <div className="ulcwp-team-name">
                              <span className="ulcwp-team-longname">india</span>
                              <span className="ulcwp-team-shortname">IND</span>
                            </div>
                          </div>
                          <div className="ulcwp-team-score">301 &amp; 18/2 <span>(7 ov)</span></div>
                        </div>
                      </div>
                      <div className="ulcwp-match-info">
                        <p>Day 2 - Amo-Region lead by 120 runs.</p>
                      </div>
                    </div>
                    <div className="ulcwp-match-prediction">
                      <div className="ulcwp-match-prediction-top d-flex">
                        <div className="ulcwp-team-prediction-1" style={{ width: '50%' }}></div>
                        <div className="ulcwp-prediction-draw" style={{ width: '20%' }}></div>
                        <div className="ulcwp-team-prediction-2" style={{ width: '30%' }}></div>
                      </div>
                      <div className="ulcwp-match-prediction-bottom d-flex justify-content-between">
                        <div className="ulcwp-prediction-name d-flex align-items-center">
                          <span className="ulcwp-team-prediction-1"></span>
                          <p>Pakistan <span>50%</span></p>
                        </div>
                        <div className="ulcwp-prediction-name d-flex align-items-center">
                          <span className="ulcwp-prediction-draw"></span>
                          <p>Draw <span>20%</span></p>
                        </div>
                        <div className="ulcwp-prediction-name d-flex align-items-center">
                          <span className="ulcwp-team-prediction-2"></span>
                          <p>India <span>30%</span></p>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>	
							</div>
            </div>
            </OwlCarousel>
          </Container>  
    </section>
    )
}