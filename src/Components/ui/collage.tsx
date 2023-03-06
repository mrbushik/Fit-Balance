import React from "react";

const Collage: React.FC = () => {
  const collageImagesUrl: string[] = [
    "https://res.cloudinary.com/drfjcq9hg/image/upload/v1677947623/fit_balance/no_compress_2_-min_lempq6.jpg",
    "https://res.cloudinary.com/drfjcq9hg/image/upload/v1677602517/fit_balance/3_f3wf0y.jpg",
    "https://res.cloudinary.com/drfjcq9hg/image/upload/v1677602517/fit_balance/2_dp990s.jpg",
  ];

  return (
    <div className="container">
      <h1>Multimedia collage</h1>
      <div className="collage__wrapper">
        <div className="main__collage-item">
          <img src={collageImagesUrl[0]} className="main__collage-img" />
        </div>
        <div className='other__collage-item'>
          <div>
            <img src={collageImagesUrl[1]} />
          </div>
          <div>
            <img src={collageImagesUrl[2]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collage;
