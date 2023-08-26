import React from "react";
import Slider from "react-slick";
import Navbar from "../components/Navbar";
import products from "../../data";

export default function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  const features = [
    { name: 'Origin', description: 'Crafted by CosmicStudio Design Craft, .Inc' },
    { name: 'Materials', description: 'Precision engineering with premium components' },
    { name: 'Dimensions', description: 'Sleek design: 7.5" x 6.2" x 2.0"' },
    { name: 'Finish', description: 'Sleek and stylish, designed for comfort' },
    { name: 'Includes', description: 'Headphones, carrying case, and user manual' },
    { name: 'Considerations', description: 'Crafted with care; slight variations may occur' },
]

  return (
    <div>
      <Navbar />
      <div className="dark:bg-slate-800">
        <Slider {...settings}>
          {products.map((item) => {
            return <div>
              <img className="mx-auto object-cover object-center" src={item.img} alt="" />
            </div>
          })}
        </Slider>
        <br />
        <div className="mx-auto" style={{ width: '80vw' }}>
          <h2 className="dark:text-white text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technical Specifications</h2>
          <p className="dark:text-slate-400 mt-4 text-gray-500">
            <strong>Crafted for Excellence:</strong> Our headphones boast top-notch technical specs, from high-fidelity audio drivers to noise-cancellation technology. Experience pure sound, precision, and comfort in every pair.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="dark:text-white font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <br />
      </div>
    </div>
  );
}