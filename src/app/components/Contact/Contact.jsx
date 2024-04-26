import React from "react";

import Image from "next/image";

import phone from "../../assets/contact/phone.png";
import mail from "../../assets/contact/mail.png";
import location from "../../assets/contact/location.png";

const Contact = () => {
  return (
    <>
      <div className="w-full h-[1100px] sm:h-[1000px] md:h-[550px]  overflow-hidden bg-[#191A19] flex relative z-[-10]">
        <div className="div-1 h-[1100px] sm:h-[1000px] md:h-[500px]"></div>
        <div className="div-2 h-[1100px] sm:h-[1000px] md:h-[500px]"></div>
      </div>
      <div className="bg-white shadow-[1px_6px_8px_2px_#8A8A8A] rounded-lg min-h-[450px] w-[90%] md:w-[70%] mx-auto z-10 p-4 flex flex-col md:flex-row gap-6 md:gap-0 absolute top-[120px] left-[5%] md:left-[15%]">
        <div className="bg-[#000000] w-[100%] md:w-[40%] rounded-lg p-7 flex flex-col gap-[60px]">
          <div>
            <h2 className="text-[#FF7420] text-[1.2rem] font-bold">
              Contact Us
            </h2>
            <p className="text-[#C9C9C9]">
              Say something to start a live chat!
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <Image src={phone} height={24} width={24} alt="phone" />
              <p className="text-[#C9C9C9]">051-123-4567</p>
            </div>
            <div className="flex items-start gap-3">
              <Image src={mail} height={24} width={24} alt="mail" />
              <p className="text-[#C9C9C9]">demo@gmail.com</p>
            </div>
            <div className="flex items-start gap-3">
              <Image src={location} height={24} width={24} alt="location" />
              <p className="text-[#C9C9C9]">
                University of Engineering and Technology , Taxila
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white grow flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-9 w-[90%] mx-auto">
            <div className="flex flex-col">
              <label className="text-md font-[600]">First Name</label>
              <input
                type="text"
                placeholder="Enter your First Name"
                className="border-b-[1px] border-black outline-none p-1 w-[95%]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-md font-[600]">Last Name</label>
              <input
                type="text"
                placeholder="Enter your Last Name"
                className="border-b-[1px] border-black outline-none p-1 w-[95%]"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-9 w-[90%] mx-auto">
            <div className="flex flex-col">
              <label className="text-md font-[600]">Email</label>
              <input
                type="mail"
                placeholder="Enter your Email"
                className="border-b-[1px] border-black outline-none p-1 w-[95%]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-md font-[600]">Phone Number</label>
              <input
                type="phone"
                placeholder="+1 012 3456 789"
                className="border-b-[1px] border-black outline-none p-1 w-[95%]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 w-[90%] mx-auto">
            <label className="text-md font-[600]">Select Subject?</label>
            <div className="gap-3 grid grid-cols-2 text-[12px]">
              <div className="flex gap-1">
                <input
                  type="radio"
                  id="option1"
                  name="options"
                  value="option1"
                  className=""
                />
                <label htmlFor="option1">General inquiry</label>
              </div>

              <div className="flex gap-1">
                <input
                  type="radio"
                  id="option2"
                  name="options"
                  value="option2"
                  className=""
                />
                <label htmlFor="option2">General inquiry</label>
              </div>

              <div className="flex gap-1">
                <input
                  type="radio"
                  id="option3"
                  name="options"
                  value="option3"
                  className=""
                />
                <label htmlFor="option3">General inquiry</label>
              </div>

              <div className="flex gap-1">
                <input
                  type="radio"
                  id="option4"
                  name="options"
                  value="option4"
                  className=""
                />
                <label htmlFor="option4">General inquiry</label>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-[90%] mx-auto">
            <label className="text-md font-[600]">Select Subject?</label>
            <textarea
              placeholder="Write your message..."
              rows={1}
              cols={30}
              className="border-b-[1px] border-black outline-none p-1 w-[95%] resize-none"
            ></textarea>
          </div>
          <div className="flex justify-end w-[90%] mx-auto">
            <button className=" bg-[#FF7420] text-white px-3 rounded-xl h-[40px]">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

// import React from "react";

// import Image from "next/image";

// import phone from "../../assets/contact/phone.png";
// import mail from "../../assets/contact/mail.png";
// import location from "../../assets/contact/location.png";

// const Contact = () => {
//   return (
//     <>
//       <div className="w-full h-[550px]  overflow-hidden bg-[#191A19] flex relative z-[-10]">
//         <div className="div-1"></div>
//         <div className="div-2"></div>
//       </div>
//       <div className="bg-white shadow-[1px_6px_8px_2px_#8A8A8A] rounded-lg min-h-[450px] w-[90%] md:w-[70%] mx-auto z-10 p-4 flex flex-col md:flex-row gap-6 md:gap-0 absolute top-[120px] left-[5%] md:left-[15%]">
//         <div className="bg-[#000000] w-[100%] md:w-[40%] rounded-lg p-7 flex flex-col gap-[60px]">
//           <div>
//             <h2 className="text-[#FF7420] text-[1.2rem] font-bold">
//               Contact Us
//             </h2>
//             <p className="text-[#C9C9C9]">
//               Say something to start a live chat!
//             </p>
//           </div>
//           <div className="flex flex-col gap-4">
//             <div className="flex items-start gap-3">
//               <Image src={phone} height={24} width={24} alt="phone" />
//               <p className="text-[#C9C9C9]">051-123-4567</p>
//             </div>
//             <div className="flex items-start gap-3">
//               <Image src={mail} height={24} width={24} alt="mail" />
//               <p className="text-[#C9C9C9]">demo@gmail.com</p>
//             </div>
//             <div className="flex items-start gap-3">
//               <Image src={location} height={24} width={24} alt="location" />
//               <p className="text-[#C9C9C9]">
//                 University of Engineering and Technology , Taxila
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="bg-white grow flex flex-col gap-6">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-9 w-[90%] mx-auto">
//             <div className="flex flex-col">
//               <label className="text-md font-[600]">First Name</label>
//               <input
//                 type="text"
//                 placeholder="Enter your First Name"
//                 className="border-b-[1px] border-black outline-none p-1 w-[95%]"
//               />
//             </div>
//             <div className="flex flex-col">
//               <label className="text-md font-[600]">Last Name</label>
//               <input
//                 type="text"
//                 placeholder="Enter your Last Name"
//                 className="border-b-[1px] border-black outline-none p-1 w-[95%]"
//               />
//             </div>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-9 w-[90%] mx-auto">
//             <div className="flex flex-col">
//               <label className="text-md font-[600]">Email</label>
//               <input
//                 type="mail"
//                 placeholder="Enter your Email"
//                 className="border-b-[1px] border-black outline-none p-1 w-[95%]"
//               />
//             </div>
//             <div className="flex flex-col">
//               <label className="text-md font-[600]">Phone Number</label>
//               <input
//                 type="phone"
//                 placeholder="+1 012 3456 789"
//                 className="border-b-[1px] border-black outline-none p-1 w-[95%]"
//               />
//             </div>
//           </div>
//           <div className="flex flex-col gap-3 w-[90%] mx-auto">
//             <label className="text-md font-[600]">Select Subject?</label>
//             <div className="gap-3 grid grid-cols-2 text-[12px]">
//               <div className="flex gap-1">
//                 <input
//                   type="radio"
//                   id="option1"
//                   name="options"
//                   value="option1"
//                   className=""
//                 />
//                 <label for="option1">General inquiry</label>
//               </div>

//               <div className="flex gap-1">
//                 <input
//                   type="radio"
//                   id="option2"
//                   name="options"
//                   value="option2"
//                   className=""
//                 />
//                 <label for="option2">General inquiry</label>
//               </div>

//               <div className="flex gap-1">
//                 <input
//                   type="radio"
//                   id="option3"
//                   name="options"
//                   value="option3"
//                   className=""
//                 />
//                 <label for="option3">General inquiry</label>
//               </div>

//               <div className="flex gap-1">
//                 <input
//                   type="radio"
//                   id="option4"
//                   name="options"
//                   value="option4"
//                   className=""
//                 />
//                 <label for="option4">General inquiry</label>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col gap-3 w-[90%] mx-auto">
//             <label className="text-md font-[600]">Select Subject?</label>
//             <textarea
//               placeholder="Write your message..."
//               rows={1}
//               cols={30}
//               className="border-b-[1px] border-black outline-none p-1 w-[95%] resize-none"
//             ></textarea>
//           </div>
//           <div className="flex justify-end w-[90%] mx-auto">
//             <button className=" bg-[#FF7420] text-white px-3 rounded-xl h-[40px]">
//               Contact Us
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;
