import React from "react";
import EmblaCarousel from "./Corousel";
import pic1 from "../../assets/events/Cabinet22-23.jpg";
import pic2 from "../../assets/events/Cabinet21-22.jpg";
import pic3 from "../../assets/events/Cabinet20-21.jpg";
import pic4 from "../../assets/events/Cabinet19-20.jpg";
import pic5 from "../../assets/events/Cabinet18-19.jpg";


const cabinet = [
  {
    img: pic1,
  },
  {
    img: pic2,
  },
  {
    img: pic3,
  },
  {
    img: pic4,
  },
  {
    img: pic5,
  },
];
const Cabinet = () => {
  const OPTIONS = { loop: true };

  return (
    <section>
      <div className="flex  flex-col">
        <h2 className="text-[34px] font-bold  text-center sm:text-[48px]">
          Previous Cabinet
        </h2>
        <div className="py-4 bg-[#191A19]">
          <div className="w-[90%] mx-auto">
            {/* <h3 className="text-white text-[38px] font-semibold text-center">
              2k22 - 2k23
            </h3> */}
            <EmblaCarousel slides={cabinet} options={OPTIONS} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cabinet;
