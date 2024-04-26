import React from "react";
import EmblaCarousel from "./Corousel";
import pic from "../../assets/events/cabinet1.jpg";

const cabinet = [
  {
    img: pic,
  },
  {
    img: pic,
  },
  {
    img: pic,
  },
  {
    img: pic,
  },
  {
    img: pic,
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
            <h3 className="text-white text-[38px] font-semibold text-center">
              2k22 - 2k23
            </h3>
            <EmblaCarousel slides={cabinet} options={OPTIONS} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cabinet;
