import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import { Container } from "react-bootstrap"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import LeftSidebar from "../components/left_sidebar"
import RightSidebar from "../components/right_sidebar"

import article1 from '../public/images/article-1.jpg'
import { SVGSprite } from "../components/SVGSprite";


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8"/>
	      <meta name="viewport" content="width=device-width, initial-scale=1"/>

      </Head>
      <section className="home-wrap">
        <Container className="container">
          <Row>
            <Col className="col-lg-6 order-2">
              <div className="home-main-sec">
                <div className="ulcwp-main-card-data ulcwp-border ulcwp-rounded">
                  <div className="ulcwp-main-card-head d-flex justify-content-between ulcwp-border-bottom">
                    <div className="ulcwp-card-head-left">
                      <h4>Afghanistan vs Pakistan</h4>
                      <p>Men's T20 World Cup 2022, warm-ups</p>
                    </div>
                    <div className="ulcwp-card-head-right">
                      <Link href="/">
                        <a>
                          <h4><span><SVGSprite id="right-arrow" size="16" stroke="#858895"/></span></h4>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="ulcwp-fixtures-data-card">
                    <Link href="/">
                      <a>
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
                                <img src="https://www.sportsadda.com/static-assets/images/cricket/teams/1188.png" alt=""/>
                              </span>
                              <div className="ulcwp-team-name">
                                <span className="ulcwp-team-longname">Afghanistan</span>
                                <span className="ulcwp-team-shortname">AFG</span>
                              </div>
                            </div>
                            <div className="ulcwp-team-score">301 &amp; 18/2 <span>(7 ov)</span></div>
                          </div>
                        </div>
                        <div className="ulcwp-match-info">
                          <p>Day 2 - Amo-Region lead by 120 runs.</p>
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div className="article-card">
                    <Link href="/">
                      <a>
                        <div className="article-card-inner">
                          <div className="article-img"><Image src={article1} alt=""/></div>
                          <div className="article-card-content">
                            <h4>Rizwan and Babar lead dominant Pakistan to 3-0 sweep</h4>
                            <p>They add 158 together to make light work of a chase of 208 against severely depleted WI. They add 158 together to make light work of a chase of 208 against severely depleted WI...</p>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>	
								</div>
                <div className="ulcwp-main-card-data ulcwp-border ulcwp-rounded">
                  <div className="ulcwp-main-card-head d-flex justify-content-between ulcwp-border-bottom">
                    <div className="ulcwp-card-head-left">
                      <h4>Pakistan news</h4>
                      <p>T20 cricket</p>
                    </div>
                    <div className="ulcwp-card-head-right">
                      <Link href="/">
                        <a>
                          <h4>Men's T20 World Cup <span><SVGSprite id="right-arrow" size="16" stroke="#858895"/></span></h4>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="article-card">
                    <Link href="/">
                      <a>
                        <div className="article-card-inner">
                          <div className="article-img"><Image src={article1} alt=""/></div>
                          <div className="article-card-content">
                            <h4>Rizwan and Babar lead dominant Pakistan to 3-0 sweep</h4>
                            <p>They add 158 together to make light work of a chase of 208 against severely depleted WI. They add 158 together to make light work of a chase of 208 against severely depleted WI...</p>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>	
								</div>
                <div className="ulcwp-main-card-data ulcwp-border ulcwp-rounded">
                  <div className="ulcwp-main-card-head d-flex justify-content-between ulcwp-border-bottom">
                    <div className="ulcwp-card-head-left">
                      <h4>Pakistan news</h4>
                      <p>T20 cricket</p>
                    </div>
                    <div className="ulcwp-card-head-right">
                      <Link href="/">
                        <a>
                          <h4>Men's T20 World Cup <span><SVGSprite id="right-arrow" size="16" stroke="#858895"/></span></h4>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="article-card">
                    <Link href="/">
                      <a>
                        <div className="article-card-inner">
                          <div className="article-img"><Image src={article1} alt=""/></div>
                          <div className="article-card-content">
                            <h4>Rizwan and Babar lead dominant Pakistan to 3-0 sweep</h4>
                            <p>They add 158 together to make light work of a chase of 208 against severely depleted WI. They add 158 together to make light work of a chase of 208 against severely depleted WI...</p>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div className="article-card list-article">
                    <Link href="/">
                      <a>
                        <div className="article-card-inner">
                          <div className="article-img"><Image src={article1} alt=""/></div>
                          <div className="article-card-content">
                            <h4>Rizwan and Babar lead dominant Pakistan to 3-0 sweep</h4>
                            <span className="article-date">Fri 17, 2021</span>
                            <p>They add 158 together to make light work of a chase of 208 against severely depleted WI. They add 158 together to make light work of a chase of 208 against severely depleted WI...</p>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>	
								</div>
              </div>
            </Col>
            <Col className="col-lg-3 d-none d-lg-block">
              <LeftSidebar/>
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
