
// import React, { useState } from "react";
// import Slider from "react-slick";
// import { RiStarFill } from "react-icons/ri";
// import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
// import Title from "../layouts/Title";
// import { quote } from "../../assets";

// function SampleNextArrow({ onClick }) {
//   return (
//     <div
//       className="w-10 h-10 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow cursor-pointer z-10"
//       onClick={onClick}
//     >
//       <HiArrowRight />
//     </div>
//   );
// }

// function SamplePrevArrow({ onClick }) {
//   return (
//     <div
//       className="w-10 h-10 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-xl text-gray-400 flex justify-center items-center absolute top-0 right-12 shadow cursor-pointer z-10"
//       onClick={onClick}
//     >
//       <HiArrowLeft />
//     </div>
//   );
// }

// const Testimonial = () => {
//   const [dotActive, setDotActive] = useState(0);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//     beforeChange: (_, next) => setDotActive(next),
//     appendDots: (dots) => (
//       <div className="pt-6">
//         <ul className="flex gap-3 justify-center">{dots}</ul>
//       </div>
//     ),
//     customPaging: (i) => (
//       <div
//         className={`w-3 h-3 rounded-full ${
//           i === dotActive ? "bg-[#ff014f]" : "bg-gray-500"
//         }`}
//       />
//     ),
//   };

//   return (
//     <section
//       id="testimonial"
//       className="w-full py-20 border-b-[1px] border-b-black"
//     >
//       <div className="flex justify-center items-center text-center mb-10">
//         <Title title="" des="Testimonial" />
//       </div>

//       <div className="max-w-5xl mx-auto">
//         <Slider {...settings}>
//           {/* === Single Feedback Slide === */}
//           <div className="flex flex-col lgl:flex-row items-center gap-8 bg-gradient-to-r from-[#1e2024] to-[#23272b] p-6 rounded-xl shadow-lg">
//             {/* Left side (Initials & Name) */}
//             <div className="flex flex-col items-center text-center lgl:w-1/3">
//               <div className="w-24 h-24 bg-gray-600 rounded-full flex items-center justify-center text-white text-3xl font-semibold">
//                 <img
//                   src="https://t4.ftcdn.net/jpg/09/64/89/17/360_F_964891760_h0DymPvgJ0dZtcdWLts0qQIrk9fKWpjG.jpg"
//                   alt="Muhammad Ahsan"
//                   className="w-24 h-24 rounded-full object-cover border-2 border-designColor"
//                 />
//               </div>
//               <h3 className="text-xl font-bold mt-4">Muhammad Ahsan</h3>
//               <p className="text-sm text-gray-400">Reviewed on LinkedIn</p>
//               <div className="flex text-yellow-500 mt-2">
//                 <RiStarFill />
//                 <RiStarFill />
//                 <RiStarFill />
//                 <RiStarFill />
//                 <RiStarFill />
//               </div>
//             </div>

//             {/* Right side (Feedback Text) */}
//             <div className="lgl:w-2/3 text-gray-400 text-base font-medium leading-relaxed relative">
//               <img src={quote} alt="quote" className="w-10 mb-4" />
//               <p>
//                 "Muhammad Ahsan’s portfolio was quite impressive — especially
//                 the frontend work. The layout was clean, responsive, and
//                 well-structured. Both code readability and design consistency
//                 were strong. Ahsan is a developer with great potential."
//               </p>
//             </div>
//           </div>
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default Testimonial;


import React, { useState } from "react";
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from "../layouts/Title";
import { ahsanprofile, quote } from "../../assets";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow({ onClick }) {
  return (
    <div
      className="w-10 h-10 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-xl text-gray-400 flex justify-center items-center absolute top-1/2 -translate-y-1/2 right-0 shadow cursor-pointer z-10 relative"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>

  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div
      className="w-10 h-10 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-xl text-gray-400 flex justify-center items-center absolute top-1/2 -translate-y-1/2 left-0 shadow cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDotActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (_, next) => setDotActive(next),
    appendDots: (dots) => (
      <div className="pt-6">
        <ul className="flex gap-3 justify-center">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-3 h-3 rounded-full ${i === dotActive ? "bg-[#ff014f]" : "bg-gray-500"
          }`}
      />
    ),
    responsive: [
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // 2 slides (same content)
  const slides = [1, 2];

  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center mb-10">
        <Title title="" des="Testimonial" />
      </div>

      <div className="max-w-5xl mx-auto">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="px-3"> {/* px-3 se slides ke beech gap */}
              <div className="flex flex-col lgl:flex-row items-center gap-8 bg-gradient-to-r from-[#1e2024] to-[#23272b] p-6 rounded-xl shadow-lg">
                {/* Left side (Image & Name) */}
                <div className="flex flex-col items-center text-center lgl:w-1/3">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-black flex items-center justify-center">
                    <img
                      src={ahsanprofile}
                      alt="Muhammad Ahsan"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mt-4">Muhammad Ahsan</h3>
                  <p className="text-sm text-gray-400">Reviewed on LinkedIn</p>
                  <div className="flex text-yellow-500 mt-2">
                    {Array(5).fill().map((_, i) => (
                      <RiStarFill key={i} />
                    ))}
                  </div>
                </div>

                {/* Right side (Feedback Text) */}
                <div className="lgl:w-2/3 text-gray-400 text-base font-medium leading-relaxed relative">
                  <img src={quote} alt="quote" className="w-10 mb-4" />
                  <p>
                    "Muhammad Ahsan’s portfolio was quite impressive — especially
                    the frontend work. The layout was clean, responsive, and
                    well-structured. Both code readability and design consistency
                    were strong. Ahsan is a developer with great potential."
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;

