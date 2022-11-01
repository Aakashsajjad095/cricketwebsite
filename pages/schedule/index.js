import React from "react"
import Head from "next/head"
import RightSidebar from "../../components/right_sidebar"
import { Container } from "react-bootstrap"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Form from 'react-bootstrap/Form'
import { SVGSprite } from "../../components/SVGSprite"
import Link from "next/link"

import Select from 'react-select'

const formats = [
  { value: 'TEST', label: 'TEST' },
  { value: 'ODI', label: 'ODI' },
  { value: 'T20I', label: 'T20I' },
]
const teams = [
  { value: 'TEST', label: 'TEST' },
  { value: 'ODI', label: 'ODI' },
  { value: 'T20I', label: 'T20I' },
]
const competitions = [
  { value: 'TEST', label: 'TEST' },
  { value: 'ODI', label: 'ODI' },
  { value: 'T20I', label: 'T20I' },
]

export default function SchedulePage(){
    return(
      <>
      <Head>
        <title>Schedule Page</title>
      </Head>
      <section className="schedule-wrap">
        <Container>
          <Row>
            <Col className="col-lg-9">
              <div className="ulcwp-tabs">
                <Tabs
                  defaultActiveKey="live"
                  id="ulcwp-tabs"
                  justify
                >
                  <Tab eventKey="live" title="Live">
                    <div className="matches-filter-wrap">
                      <Form>
                        <Row>
                          <Col className="col-lg-4 col-md-4">
                            <Select name="formats" placeholder="Formats" openMenuOnFocus={true} options={formats} className="ulcwp-border ulcwp-search" />
                          </Col>
                          <Col className="col-lg-4 col-md-4">
                            <Select name="formats" placeholder="Teams" options={teams} className="ulcwp-border ulcwp-search" />
                          </Col>
                          <Col className="col-lg-4 col-md-4">
                            <Select name="formats" placeholder="Competitions" options={competitions} className="ulcwp-border ulcwp-search" />
                          </Col>
                        </Row>
                      </Form>
                    </div>
                    <div className="ulcwp-series-wrap">
                      <div className="ulcwp-series-card ulcwp-border ulcwp-rounded overflow-hidden">
                        <div className="ulcwp-series-header">
                          <div className="ulcwp-series-name">
                            <h4>
                              <Link href="/">
                                <a>Bangladesh Cricket League</a>
                              </Link>
                            </h4>
                          </div>
                          <div className="ulcwp-series-link">
                            <a href="#"><SVGSprite id="right-arrow" size="16" stroke="#858895"/></a>
                          </div>
                        </div>
                        <div className="ulcwp-series-card-content">
                          <Row>
                            <Col className="col-lg-4 col-md-12">
                              <div className="ulcwp-main-card-data ulcwp-border ulcwp-rounded bg-white">
                                <Link href="/">
                                  <a>
                                    <div className="ulcwp-main-card-head ulcwp-border-bottom">
                                      <h4>2nd Test (D/N), Adelaide, Dec 16 - 20 2021</h4>
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
                            </Col>
                            <Col className="col-lg-4 col-md-12">
                              <div className="ulcwp-main-card-data ulcwp-border ulcwp-rounded bg-white">
                                <Link href="/">
                                  <a>
                                    <div className="ulcwp-main-card-head ulcwp-border-bottom">
                                      <h4>2nd Test (D/N), Adelaide, Dec 16 - 20 2021</h4>
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
                            </Col>
                            <Col className="col-lg-4 col-md-12">
                              <div className="ulcwp-main-card-data ulcwp-border ulcwp-rounded bg-white">
                                <Link href="/">
                                  <a>
                                    <div className="ulcwp-main-card-head ulcwp-border-bottom">
                                      <h4>2nd Test (D/N), Adelaide, Dec 16 - 20 2021</h4>
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
                            </Col>
                          </Row>
                        </div>
                      </div>
                      <div className="ulcwp-series-card ulcwp-border ulcwp-rounded overflow-hidden">
                        <div className="ulcwp-series-header">
                          <div className="ulcwp-series-name">
                            <h4>
                              <Link href="/">
                                <a>Bangladesh Cricket League</a>
                              </Link>
                            </h4>
                          </div>
                          <div className="ulcwp-series-link">
                            <a href="#"><SVGSprite id="right-arrow" size="16" stroke="#858895"/></a>
                          </div>
                        </div>
                        <div className="ulcwp-series-card-content">
                          <Row>
                            <Col className="col-md-4">
                              <div className="ulcwp-main-card-data ulcwp-border ulcwp-rounded bg-white">
                                <Link href="/">
                                  <a>
                                    <div className="ulcwp-main-card-head ulcwp-border-bottom">
                                      <h4>2nd Test (D/N), Adelaide, Dec 16 - 20 2021</h4>
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
                            </Col>
                            <Col className="col-md-4">
                              <div className="ulcwp-main-card-data ulcwp-border ulcwp-rounded bg-white">
                                <Link href="/">
                                  <a>
                                    <div className="ulcwp-main-card-head ulcwp-border-bottom">
                                      <h4>2nd Test (D/N), Adelaide, Dec 16 - 20 2021</h4>
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
                            </Col>
                            <Col className="col-md-4">
                              <div className="ulcwp-main-card-data ulcwp-border ulcwp-rounded bg-white">
                                <Link href="/">
                                  <a>
                                    <div className="ulcwp-main-card-head ulcwp-border-bottom">
                                      <h4>2nd Test (D/N), Adelaide, Dec 16 - 20 2021</h4>
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
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="upcoming" title="Upcoming">
                    <div className="matches-filter-wrap">
                      <Form>
                        <Row>
                          <Col className="col-md-4">
                            <Select name="formats" placeholder="Formats" openMenuOnFocus={true} options={formats} className="ulcwp-border ulcwp-search" />
                          </Col>
                          <Col className="col-md-4">
                            <Select name="formats" placeholder="Teams" options={teams} className="ulcwp-border ulcwp-search" />
                          </Col>
                          <Col className="col-md-4">
                            <Select name="formats" placeholder="Competitions" options={competitions} className="ulcwp-border ulcwp-search" />
                          </Col>
                        </Row>
                      </Form>
                    </div>
                    <div className="ulcwp-series-wrap">
                      <div className="ulcwp-series-card ulcwp-border ulcwp-rounded overflow-hidden">
                        <div className="ulcwp-series-header">
                          <div className="ulcwp-series-name">
                            <h4>
                              <Link href="/">
                                <a>Bangladesh Cricket League</a>
                              </Link>
                            </h4>
                          </div>
                          <div className="ulcwp-series-link">
                            <a href="#"><SVGSprite id="right-arrow" size="16" stroke="#858895"/></a>
                          </div>
                        </div>
                        <div className="ulcwp-series-card-content">
                          <Row>
                            <Col className="col-md-4">
                              <div className="ulcwp-main-card-data ulcwp-border ulcwp-rounded bg-white">
                                <Link href="/">
                                  <a>
                                    <div className="ulcwp-main-card-head ulcwp-border-bottom">
                                      <h4>2nd Test (D/N), Adelaide, Dec 16 - 20 2021</h4>
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
                            </Col>
                            <Col className="col-md-4">
                              <div className="ulcwp-main-card-data ulcwp-border ulcwp-rounded bg-white">
                                <Link href="/">
                                  <a>
                                    <div className="ulcwp-main-card-head ulcwp-border-bottom">
                                      <h4>2nd Test (D/N), Adelaide, Dec 16 - 20 2021</h4>
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
                            </Col>
                            <Col className="col-md-4">
                              <div className="ulcwp-main-card-data ulcwp-border ulcwp-rounded bg-white">
                                <Link href="/">
                                  <a>
                                    <div className="ulcwp-main-card-head ulcwp-border-bottom">
                                      <h4>2nd Test (D/N), Adelaide, Dec 16 - 20 2021</h4>
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
                            </Col>
                          </Row>
                        </div>
                      </div>
                      <div className="ulcwp-series-card ulcwp-border ulcwp-rounded overflow-hidden">
                        <div className="ulcwp-series-header">
                          <div className="ulcwp-series-name">
                            <h4>
                              <Link href="/">
                                <a>Bangladesh Cricket League</a>
                              </Link>
                            </h4>
                          </div>
                          <div className="ulcwp-series-link">
                            <a href="#"><SVGSprite id="right-arrow" size="16" stroke="#858895"/></a>
                          </div>
                        </div>
                        <div className="ulcwp-series-card-content">
                          <Row>
                            <Col className="col-md-4">
                              <div className="ulcwp-main-card-data ulcwp-border ulcwp-rounded bg-white">
                                <Link href="/">
                                  <a>
                                    <div className="ulcwp-main-card-head ulcwp-border-bottom">
                                      <h4>2nd Test (D/N), Adelaide, Dec 16 - 20 2021</h4>
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
                            </Col>
                            <Col className="col-md-4">
                              <div className="ulcwp-main-card-data ulcwp-border ulcwp-rounded bg-white">
                                <Link href="/">
                                  <a>
                                    <div className="ulcwp-main-card-head ulcwp-border-bottom">
                                      <h4>2nd Test (D/N), Adelaide, Dec 16 - 20 2021</h4>
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
                            </Col>
                            <Col className="col-md-4">
                              <div className="ulcwp-main-card-data ulcwp-border ulcwp-rounded bg-white">
                                <Link href="/">
                                  <a>
                                    <div className="ulcwp-main-card-head ulcwp-border-bottom">
                                      <h4>2nd Test (D/N), Adelaide, Dec 16 - 20 2021</h4>
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
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="result" title="Result">
                  <div className="matches-filter-wrap">
                      <Form>
                        <Row>
                          <Col className="col-md-4">
                            <Select name="formats" placeholder="Formats" openMenuOnFocus={true} options={formats} className="ulcwp-border ulcwp-search" />
                          </Col>
                          <Col className="col-md-4">
                            <Select name="formats" placeholder="Teams" options={teams} className="ulcwp-border ulcwp-search" />
                          </Col>
                          <Col className="col-md-4">
                            <Select name="formats" placeholder="Competitions" options={competitions} className="ulcwp-border ulcwp-search" />
                          </Col>
                        </Row>
                      </Form>
                    </div>
                    <div className="ulcwp-series-wrap">
                      <div className="ulcwp-series-card ulcwp-border ulcwp-rounded overflow-hidden">
                        <div className="ulcwp-series-header">
                          <div className="ulcwp-series-name">
                            <h4>
                              <Link href="/">
                                <a>Bangladesh Cricket League</a>
                              </Link>
                            </h4>
                          </div>
                          <div className="ulcwp-series-link">
                            <a href="#"><SVGSprite id="right-arrow" size="16" stroke="#858895"/></a>
                          </div>
                        </div>
                        <div className="ulcwp-series-card-content">
                          <Row>
                            <Col className="col-md-4">
                              <div className="ulcwp-main-card-data ulcwp-border ulcwp-rounded bg-white">
                                <Link href="/">
                                  <a>
                                    <div className="ulcwp-main-card-head ulcwp-border-bottom">
                                      <h4>2nd Test (D/N), Adelaide, Dec 16 - 20 2021</h4>
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
                            </Col>
                            <Col className="col-md-4">
                              <div className="ulcwp-main-card-data ulcwp-border ulcwp-rounded bg-white">
                                <Link href="/">
                                  <a>
                                    <div className="ulcwp-main-card-head ulcwp-border-bottom">
                                      <h4>2nd Test (D/N), Adelaide, Dec 16 - 20 2021</h4>
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
                            </Col>
                            <Col className="col-md-4">
                              <div className="ulcwp-main-card-data ulcwp-border ulcwp-rounded bg-white">
                                <Link href="/">
                                  <a>
                                    <div className="ulcwp-main-card-head ulcwp-border-bottom">
                                      <h4>2nd Test (D/N), Adelaide, Dec 16 - 20 2021</h4>
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
                            </Col>
                          </Row>
                        </div>
                      </div>
                      <div className="ulcwp-series-card ulcwp-border ulcwp-rounded overflow-hidden">
                        <div className="ulcwp-series-header">
                          <div className="ulcwp-series-name">
                            <h4>
                              <Link href="/">
                                <a>Bangladesh Cricket League</a>
                              </Link>
                            </h4>
                          </div>
                          <div className="ulcwp-series-link">
                            <a href="#"><SVGSprite id="right-arrow" size="16" stroke="#858895"/></a>
                          </div>
                        </div>
                        <div className="ulcwp-series-card-content">
                          <Row>
                            <Col className="col-md-4">
                              <div className="ulcwp-main-card-data ulcwp-border ulcwp-rounded bg-white">
                                <Link href="/">
                                  <a>
                                    <div className="ulcwp-main-card-head ulcwp-border-bottom">
                                      <h4>2nd Test (D/N), Adelaide, Dec 16 - 20 2021</h4>
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
                            </Col>
                            <Col className="col-md-4">
                              <div className="ulcwp-main-card-data ulcwp-border ulcwp-rounded bg-white">
                                <Link href="/">
                                  <a>
                                    <div className="ulcwp-main-card-head ulcwp-border-bottom">
                                      <h4>2nd Test (D/N), Adelaide, Dec 16 - 20 2021</h4>
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
                            </Col>
                            <Col className="col-md-4">
                              <div className="ulcwp-main-card-data ulcwp-border ulcwp-rounded bg-white">
                                <Link href="/">
                                  <a>
                                    <div className="ulcwp-main-card-head ulcwp-border-bottom">
                                      <h4>2nd Test (D/N), Adelaide, Dec 16 - 20 2021</h4>
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
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>  
            </Col>
            <Col className="col-lg-3 order-3 d-none d-lg-block">
              <RightSidebar/>
            </Col>
          </Row>
          </Container>
      </section>
      </>
    )

}
