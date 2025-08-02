// import React, { useState } from "react";
// import Slider from "react-slick";
// import { RiStarFill } from "react-icons/ri";
// import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
// import Title from "../layouts/Title";
// import { testimonialOne, testimonialTwo, quote } from "../../assets";

// function SampleNextArrow(props) {
//   const { onClick } = props;
//   return (
//     <div
//       className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
//       onClick={onClick}
//     >
//       <HiArrowRight />
//     </div>
//   );
// }

// function SamplePrevArrow(props) {
//   const { onClick } = props;
//   return (
//     <div
//       className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
//       onClick={onClick}
//     >
//       <HiArrowLeft />
//     </div>
//   );
// }

// const Testimonial = () => {
//   const [dotActive, setDocActive] = useState(0);
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//     beforeChange: (prev, next) => {
//       setDocActive(next);
//     },
//     appendDots: (dots) => (
//       <div
//         style={{
//           borderRadius: "10px",
//           padding: "10px",
//         }}
//       >
//         <ul
//           style={{
//             display: "flex",
//             gap: "15px",
//             justifyContent: "center",
//             marginTop: "20px",
//           }}
//         >
//           {" "}
//           {dots}{" "}
//         </ul>
//       </div>
//     ),
//     customPaging: (i) => (
//       <div
//         style={
//           i === dotActive
//             ? {
//                 width: "12px",
//                 height: "12px",
//                 color: "blue",
//                 background: "#ff014f",
//                 borderRadius: "50%",
//                 cursor: "pointer",
//               }
//             : {
//                 width: "12px",
//                 height: "12px",
//                 color: "blue",
//                 background: "gray",
//                 borderRadius: "50%",
//                 cursor: "pointer",
//               }
//         }
//       ></div>
//     ),
//   };
//   return (
//     <section
//       id="testimonial"
//       className="w-full py-20 border-b-[1px] border-b-black"
//     >
//       <div className="flex justify-center items-center text-center">
//         <Title title="WHAT CLIENTS SAY" des="Testimonial" />
//       </div>
//       <div className="max-w-6xl mx-auto">
//         {/* ================ Slider One ================== */}
//         <Slider {...settings}>
//           <div className="w-full">
//             <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
//               <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
//                 <img
//                   className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
//                   src={testimonialOne}
//                   alt="testimonialOne"
//                 />
//                 <div className="w-full flex flex-col justify-end">
//                   <p className="text-xs uppercase text-designColor tracking-wide mb-2">
//                     Bound - Trolola
//                   </p>
//                   <h3 className="text-2xl font-bold">Jone Duone Joe</h3>
//                   <p className="text-base tracking-wide text-gray-500">
//                     Operation Officer
//                   </p>
//                 </div>
//               </div>
//               <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
//                 <img className="w-20 lgl:w-32" src={quote} alt="quote" />
//                 <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
//                   <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
//                     <div>
//                       <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
//                         Travel Mobile App Design.
//                       </h3>
//                       <p className="text-base text-gray-400 mt-3">
//                         via Upwork - Mar 4, 2015 - Aug 30, 2021 test
//                       </p>
//                     </div>
//                     <div className="text-yellow-500 flex gap-1">
//                       <RiStarFill />
//                       <RiStarFill />
//                       <RiStarFill />
//                       <RiStarFill />
//                       <RiStarFill />
//                     </div>
//                   </div>
//                   <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
//                     dolorum, eos natus ipsum numquam veniam officia
//                     necessitatibus ratione quos debitis exercitationem
//                     repudiandae facilis id neque nihil accusantium perspiciatis
//                     repellat? Iste.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* ================ Slider Two ================== */}

//           <div className="w-full">
//             <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
//               <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
//                 <img
//                   className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
//                   src={testimonialTwo}
//                   alt="testimonialTwo"
//                 />
//                 <div className="w-full flex flex-col justify-end">
//                   <p className="text-xs uppercase text-designColor tracking-wide mb-2">
//                     Bound - Trolola
//                   </p>
//                   <h3 className="text-2xl font-bold">Jone Duone Joe</h3>
//                   <p className="text-base tracking-wide text-gray-500">
//                     Operation Officer
//                   </p>
//                 </div>
//               </div>
//               <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
//                 <img className="w-20 lgl:w-32" src={quote} alt="quote" />
//                 <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
//                   <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
//                     <div>
//                       <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
//                         Travel Mobile App Design.
//                       </h3>
//                       <p className="text-base text-gray-400 mt-3">
//                         via Upwork - Mar 4, 2015 - Aug 30, 2021 test
//                       </p>
//                     </div>
//                     <div className="text-yellow-500 flex gap-1">
//                       <RiStarFill />
//                       <RiStarFill />
//                       <RiStarFill />
//                       <RiStarFill />
//                       <RiStarFill />
//                     </div>
//                   </div>
//                   <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
//                     dolorum, eos natus ipsum numquam veniam officia
//                     necessitatibus ratione quos debitis exercitationem
//                     repudiandae facilis id neque nihil accusantium perspiciatis
//                     repellat? Iste.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* ================ Slider Three ================== */}

//           <div className="w-full">
//             <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
//               <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
//                 <img
//                   className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
//                   src={testimonialOne}
//                   alt="testimonialOne"
//                 />
//                 <div className="w-full flex flex-col justify-end">
//                   <p className="text-xs uppercase text-designColor tracking-wide mb-2">
//                     Bound - Trolola
//                   </p>
//                   <h3 className="text-2xl font-bold">Jone Duone Joe</h3>
//                   <p className="text-base tracking-wide text-gray-500">
//                     Operation Officer
//                   </p>
//                 </div>
//               </div>
//               <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
//                 <img className="w-20 lgl:w-32" src={quote} alt="quote" />
//                 <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
//                   <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
//                     <div>
//                       <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
//                         Travel Mobile App Design.
//                       </h3>
//                       <p className="text-base text-gray-400 mt-3">
//                         via Upwork - Mar 4, 2015 - Aug 30, 2021 test
//                       </p>
//                     </div>
//                     <div className="text-yellow-500 flex gap-1">
//                       <RiStarFill />
//                       <RiStarFill />
//                       <RiStarFill />
//                       <RiStarFill />
//                       <RiStarFill />
//                     </div>
//                   </div>
//                   <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
//                     dolorum, eos natus ipsum numquam veniam officia
//                     necessitatibus ratione quos debitis exercitationem
//                     repudiandae facilis id neque nihil accusantium perspiciatis
//                     repellat? Iste.
//                   </p>
//                 </div>
//               </div>
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
import { quote } from "../../assets";

function SampleNextArrow({ onClick }) {
  return (
    <div
      className="w-10 h-10 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div
      className="w-10 h-10 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-xl text-gray-400 flex justify-center items-center absolute top-0 right-12 shadow cursor-pointer z-10"
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
    slidesToShow: 1,
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
        className={`w-3 h-3 rounded-full ${
          i === dotActive ? "bg-[#ff014f]" : "bg-gray-500"
        }`}
      />
    ),
  };

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
          {/* === Single Feedback Slide === */}
          <div className="flex flex-col lgl:flex-row items-center gap-8 bg-gradient-to-r from-[#1e2024] to-[#23272b] p-6 rounded-xl shadow-lg">
            {/* Left side (Initials & Name) */}
            <div className="flex flex-col items-center text-center lgl:w-1/3">
              <div className="w-24 h-24 bg-gray-600 rounded-full flex items-center justify-center text-white text-3xl font-semibold">
                <img
                  src="https://t4.ftcdn.net/jpg/09/64/89/17/360_F_964891760_h0DymPvgJ0dZtcdWLts0qQIrk9fKWpjG.jpg"
                  alt="Muhammad Ahsan"
                  className="w-24 h-24 rounded-full object-cover border-2 border-designColor"
                />
              </div>
              <h3 className="text-xl font-bold mt-4">Muhammad Ahsan</h3>
              <p className="text-sm text-gray-400">Reviewed on LinkedIn</p>
              <div className="flex text-yellow-500 mt-2">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
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
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
