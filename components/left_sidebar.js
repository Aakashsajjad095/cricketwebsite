import Image from "next/image";
import Link from "next/link";

import article1 from '../public/images/article-1.jpg'

import { SVGSprite } from "./SVGSprite";



export default function LeftSidebar() {
    return (
      <>
      <sidebar className="sidebar left-sidebar">
        <div className="sidebar-card ulcwp-border ulcwp-rounded">
            <div className="sidebar-card-inner">
                <h4>Key Series</h4>
                <div className="sidebar-links">
                    <ul>
                        <li>
                            <Link href="/">
                                <a>
                                    <p>PSL 2021 <span><SVGSprite id="right-arrow" size="16" stroke="#858895"/></span></p>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>
                                    <p>Pakistan v West Indies <span><SVGSprite id="right-arrow" size="16" stroke="#858895"/></span></p>
                                </a>
                            </Link>
                        </li>
                        <li>    
                            <Link href="/">
                                <a>
                                    <p>The Ashes <span><SVGSprite id="right-arrow" size="16" stroke="#858895"/></span></p>
                                </a>
                            </Link>
                        </li>
                        <li>    
                            <Link href="/">
                                <a>
                                    <p>India v New Zealand <span><SVGSprite id="right-arrow" size="16" stroke="#858895"/></span></p>
                                </a>
                            </Link>
                        </li>
                        <li>    
                            <Link href="/">
                                <a>
                                    <p>South Africa v India <span><SVGSprite id="right-arrow" size="16" stroke="#858895"/></span></p>
                                </a>
                            </Link>
                        </li>
                        <li>    
                            <Link href="/">
                                <a>
                                    <p>BBL 2021 <span><SVGSprite id="right-arrow" size="16" stroke="#858895"/></span></p>
                                </a>
                            </Link>
                        </li>
                        <li>    
                            <Link href="/">
                                <a>
                                    <p>Super Smash <span><SVGSprite id="right-arrow" size="16" stroke="#858895"/></span></p>
                                </a>
                            </Link>
                        </li>
                        <li>    
                            <Link href="/">
                                <a>
                                    <p>Marsh Cup <span><SVGSprite id="right-arrow" size="16" stroke="#858895"/></span></p>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>
                                    <p>Sheffield Shield <span><SVGSprite id="right-arrow" size="16" stroke="#858895"/></span></p>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>
                                    <p>Associations T20 <span><SVGSprite id="right-arrow" size="16" stroke="#858895"/></span></p>
                                </a>
                            </Link>
                        </li>
                        <li>    
                            <Link href="/">
                                <a>
                                    <p>Women's Championship <span><SVGSprite id="right-arrow" size="16" stroke="#858895"/></span></p>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>
                                    <p>World Test Championship <span><SVGSprite id="right-arrow" size="16" stroke="#858895"/></span></p>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>
                                    <p>World Cup Super League <span><SVGSprite id="right-arrow" size="16" stroke="#858895"/></span></p>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="view-all-btn">
                    <Link href="/">
                        <a>
                            <p>See All Series <span><SVGSprite id="right-arrow" size="16" stroke="#EB5325"/></span></p>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
        <div className="sidebar-card ulcwp-border ulcwp-rounded">
            <div className="sidebar-card-inner">
                <h4>Featured videos</h4>
                <div className="sidebar-article">
                    <div className="sidebar-article-card">
                        <Link href="/">
                            <a>
                                <div className="sidebar-article-content">
                                    <div className="article-img">
                                        <Image src={article1} alt=""/>
                                        <div className="video-time-sec">
                                            <SVGSprite id="Play-icon" size="12" stroke="#02B875"/>
                                            <p>1.46</p>
                                        </div>
                                    </div>
                                    <h5>Stats - Rizwan, Babar set new benchmarks in T20 batting.</h5>
                                </div>
                            </a>
                        </Link>  
                    </div>
                    <div className="sidebar-article-card">
                        <Link href="/">
                            <a>
                                <div className="sidebar-article-content">
                                    <div className="article-img">
                                        <Image src={article1} alt=""/>
                                        <div className="video-time-sec">
                                            <SVGSprite id="Play-icon" size="12" stroke="#02B875"/>
                                            <p>1.46</p>
                                        </div>
                                    </div>
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