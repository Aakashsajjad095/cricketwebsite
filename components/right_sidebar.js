import Image from "next/image";
import Link from "next/link";

import article1 from '../public/images/article-1.jpg'


import { SVGSprite } from "./SVGSprite";



export default function RightSidebar() {
    return (
      <>
      <sidebar className="sidebar right-sidebar">
        <div className="sidebar-card ulcwp-border ulcwp-rounded">
            <div className="sidebar-card-inner">
                <h4>Follow Us</h4>
                <div className="sidebar-social-sec">
                    <ul>
                        <li className="facebook">
                            {/* <img src="../public/images/arrow-right.svg" alt="" /> */}
                            <Link href="/">
                                <a>
                                    <div className="social-icon">
                                        <span>Facebook</span>
                                        <span><SVGSprite id="facebook-icon" size="16" stroke="#3B5998"/></span>
                                    </div>
                                </a>
                            </Link>  
                        </li>
                        <li className="twitter">
                            <Link href="/">
                                <a>
                                    <div className="social-icon">
                                        <span>Twitter</span>
                                        <span><SVGSprite id="twitter-icon" size="13" stroke="#00ACEE"/></span>
                                    </div>
                                </a>
                            </Link>  
                        </li>
                        <li className="instagram">
                            <Link href="/">
                                <a>
                                    <div className="social-icon">
                                        <span>Instagram</span>
                                        <span><SVGSprite id="instagram-icon" size="13" stroke="#3F729B"/></span>
                                    </div>
                                </a>
                            </Link>  
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="sidebar-card ulcwp-border ulcwp-rounded">
            <div className="sidebar-card-inner">
                <h4>News Headlines</h4>
                <div className="sidebar-links">
                    <ul>
                        <li>
                            <Link href="/">
                                <a>
                                    <p>Akmal opts out of PSL 2022 <span><SVGSprite id="right-arrow" size="16" stroke="#858895"/></span></p>
                                </a>
                            </Link>  
                        </li>
                        <li>
                            <Link href="/">
                                <a>
                                    <p>Hazlewood out of 2nd Ashes Test <span><SVGSprite id="right-arrow" size="16" stroke="#858895"/></span></p>
                                </a>
                            </Link>  
                        </li>
                        <li>
                            <Link href="/">
                                <a>
                                    <p>Broad, Anderson primed for section secv <span><SVGSprite id="right-arrow" size="16" stroke="#858895"/></span></p>
                                </a>
                            </Link>  
                        </li>
                        <li>
                            <Link href="/">
                                <a>
                                    <p>Cottrell, Chase, Mayers Covid-positive <span><SVGSprite id="right-arrow" size="16" stroke="#858895"/></span></p>
                                </a>
                            </Link>  
                        </li>
                        <li>
                            <Link href="/">
                                <a>
                                    <p>Buzz: Greig and Boycott comm <span><SVGSprite id="right-arrow" size="16" stroke="#858895"/></span></p>
                                </a>
                            </Link>  
                        </li>
                        <li>
                            <Link href="/">
                                <a>
                                    <p>PCB gets a new CEO <span><SVGSprite id="right-arrow" size="16" stroke="#858895"/></span></p>
                                </a>
                            </Link>  
                        </li>
                        <li>
                            <Link href="/">
                                <a>
                                    <p>Hazlewood out of 2nd Ashes Test <span><SVGSprite id="right-arrow" size="16" stroke="#858895"/></span></p>
                                </a>
                            </Link>  
                        </li>
                        <li>
                            <Link href="/">
                                <a>
                                    <p>PCB gets a new CEO <span><SVGSprite id="right-arrow" size="16" stroke="#858895"/></span></p>
                                </a>
                            </Link>  
                        </li>
                        <li>
                            <Link href="/">
                                <a>
                                    <p>Hazlewood out of 2nd Ashes Test <span><SVGSprite id="right-arrow" size="16" stroke="#858895"/></span></p>
                                </a>
                            </Link>  
                        </li>
                        <li>
                            <Link href="/">
                                <a>
                                    <p>PCB gets a new CEO <span><SVGSprite id="right-arrow" size="16" stroke="#858895"/></span></p>
                                </a>
                            </Link>  
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="sidebar-card ulcwp-border ulcwp-rounded">
            <div className="sidebar-card-inner">
                <h4>More News</h4>
                <div className="sidebar-article">
                    <div className="sidebar-article-card">
                        <Link href="/">
                            <a>
                                <div className="sidebar-article-content">
                                    <div className="article-img"><Image src={article1} alt=""/></div>
                                    <h5>Stats - Rizwan, Babar set new benchmarks in T20 batting.</h5>
                                </div>
                            </a>
                        </Link>  
                    </div>
                    <div className="sidebar-article-card">
                        <Link href="/">
                            <a>
                                <div className="sidebar-article-content">
                                    <div className="article-img"><Image src={article1} alt=""/></div>
                                    <h5>Pujara backs fast bowlers to make history in South Africa.</h5>
                                </div>
                            </a>
                        </Link>  
                    </div>
                </div>
            </div>
        </div>
      </sidebar>
      </>
    )
  }