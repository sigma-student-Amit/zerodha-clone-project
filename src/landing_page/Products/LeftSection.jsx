import React from "react";

function LeftSection({imgUrl, productTitle, productDescription, tryLink, learnMore, playStoreLogo, appStoreLogo}) {
  return (
    <>
      <div className="container">
        <div className="row" style={{padding: "3em" }}>
          <div className="col-4" style={{ marginTop: "3em", marginLeft:'0em'}}>
            <img src={imgUrl} style={{width:'160%'}}/>
          </div>
          <div className="col-4"></div>
          <div className="col-4 " style={{ marginTop: "7em"}}>
            <h3>{productTitle}</h3>
            <p className="mt-4 text-muted">
              {productDescription}
            </p>
            <div className="row">
              <div className="col">
               {tryLink}

              </div>
              <div className="col">
                {learnMore}
              </div>
            </div>

<div className="row">
    <div className="d-flex gap-3 mt-4">
       {playStoreLogo}
       {appStoreLogo}
       
    </div>
</div>

          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSection;
