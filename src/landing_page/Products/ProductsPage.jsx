import ProductsHero from "./ProductsHero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import { useState } from "react";
function ProductsPage() {



    const [isHover, setIsHover] = useState(false);

  return (
    <>
      <ProductsHero />
      <LeftSection
        imgUrl="media/images/kite.png"
        productTitle="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite
experience seamlessly on your Android and &nbsp;&nbsp;
iOS devices."
        tryLink=<a href="#" style={{ textDecoration: "none" }}>
          Try demo <i class="fa-solid fa-arrow-right-long"></i>
        </a>
        learnMore=<a href="#" style={{ textDecoration: "none" }}>
          Learn more
          <i class="fa-solid fa-arrow-right-long"></i>
        </a>
        playStoreLogo=<img src="media/images/googlePlayBadge.svg" />
        appStoreLogo=<img src="media/images/appstoreBadge.svg" />
      />
      <RightSection
        productTitle="Console"
        productDescription="The central dashboard for your Zerodha &nbsp; account. Gain insights into your trades and investments with in-depth reports and visualisations."
        link=<a href="#" style={{ textDecoration: "none" }}>
          Learn more <i class="fa-solid fa-arrow-right-long"></i>
        </a>
        imgUrl="media/images/console.png"
      />
      <LeftSection
        imgUrl="media/images/coin.png"
        productTitle="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices. &nbsp;&nbsp;&nbsp;"
        tryLink=<a href="#" style={{ textDecoration: "none" }}>
          Coin <i class="fa-solid fa-arrow-right-long"></i>
        </a>
        playStoreLogo=<img src="media/images/googlePlayBadge.svg" />
        appStoreLogo=<img src="media/images/appstoreBadge.svg" />
      />
      <RightSection
        imgUrl="media/images/kiteconnect.png"
        productTitle="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        link=<a href="#" style={{ textDecoration: "none" }}>
          Kite Connect <i class="fa-solid fa-arrow-right-long"></i>
        </a>
      />
      <LeftSection
        imgUrl="media/images/varsity.png"
        imgwidth="160%"
        productTitle="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go. &nbsp;&nbsp;&nbsp;"
        playStoreLogo=<img src="media/images/googlePlayBadge.svg" />
        appStoreLogo=<img src="media/images/appstoreBadge.svg" />
      />

      <p className="text-center mt-5 fs-5 text-muted" style={{marginBottom:'4em'}}>
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </p>
      <h1 className='fs-3 text-center'>The Zerodha Universe</h1>
                    <p className="text-center">Extend your trading and investment experience even further with our partner platforms</p>
      <Universe
        imgUrlZerodhaFund="media/images/zerodhaFundhouse.png"
        imgUrlZerodhaSensibul="media/images/sensibullLogo.svg"
        imgUrlZerodhaTijori="media/images/tijori.svg"
        paraforfund="
Our asset management venture
that is creating simple and transparent index 
funds to help you save for your goals.
"
        paraforsensibul="Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more."


        parafortijori="Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.
"
      />


    <Universe  
        imgUrlZerodhaSensibul="media/images/streakLogo.png"  
        imgUrlZerodhaFund="media/images/smallcaseLogo.png"
        imgUrlZerodhaTijori="media/images/dittoLogo.png"
        paraforfund="
Systematic trading platform
that allows you to create and backtest
strategies without coding.
"
        paraforsensibul="
Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs."


        parafortijori="Personalized advice on life
and health insurance. No spam
and no mis-selling.
Sign up for free
"
     />

<div className="text-center mt-5 mb-5">
<button className="btn btn-primary fs-5 px-3" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} style={{backgroundColor: isHover?"Black":"blue"}}>Sign up for free</button>
</div>
    </>
  );
}

export default ProductsPage;
