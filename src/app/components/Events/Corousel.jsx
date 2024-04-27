"use client";
import React, { useCallback } from "react";
import { DotButton, useDotButton } from "../shared/EmblaCarouselDotButton";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import pic from "../../assets/events/cabinet1.jpg";
//import pic2 from "../../assets/events/event-2-pic-1.jpg";

import pic1 from "../../assets/events/Cabinet22-23.jpg";
import pic2 from "../../assets/events/Cabinet21-22.jpg";
import pic3 from "../../assets/events/Cabinet20-21.jpg";
import pic4 from "../../assets/events/Cabinet19-20.jpg";
import pic5 from "../../assets/events/Cabinet18-19.jpg";
import pic6 from "../../assets/events/Cabinet17-18.jpg";
import pic7 from "../../assets/events/Cabinet16-17.jpg";
import pic8 from "../../assets/events/Cabinet16-17-2.jpg";
import pic9 from "../../assets/events/Cabinet15-16.jpg";
import pic10 from "../../assets/events/Cabinet14-15.jpg";

// const cabinet = [
//   {
//     pic: pic,
//   },
//   {
//     pic: pic2,
//   },
// ];

const EmblaCarousel = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );
  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {/* {cabinet?.map((index, { pic }) => (
            <div
              className="embla__slide h-[280px] sm:h-[400px] md:h-[650px]"
              key={index}
            >
              <div className="embla__slide__number relative w-[100%] h-full">
                <Image
                  src={pic}
                  alt={pic}
                  fill
                  className=" w-full h-full  absolute object-contain"
                />
              </div>
            </div>
          ))} */}
          <div className="embla__slide h-[280px] sm:h-[400px] md:h-[650px]">
            <div className="embla__slide__number relative w-[100%] h-full">
              <Image
                src={pic1}
                alt={pic1}
                fill
                className=" w-full h-full  absolute object-contain"
              />
            </div>
          </div>
          <div className="embla__slide h-[280px] sm:h-[400px] md:h-[650px]">
            <div className=" relative w-[100%] h-full">
              <Image
                src={pic2}
                alt={pic2}
                fill
                className=" w-full h-full  absolute object-contain"
              />
            </div>
          </div>
          <div className="embla__slide h-[280px] sm:h-[400px] md:h-[650px]">
            <div className=" relative w-[100%] h-full">
              <Image
                src={pic3}
                alt={pic3}
                fill
                className=" w-full h-full  absolute object-contain"
              />
            </div>
          </div>
          <div className="embla__slide h-[280px] sm:h-[400px] md:h-[650px]">
            <div className=" relative w-[100%] h-full">
              <Image
                src={pic4}
                alt={pic4}
                fill
                className=" w-full h-full  absolute object-contain"
              />
            </div>
          </div>
          <div className="embla__slide h-[280px] sm:h-[400px] md:h-[650px]">
            <div className=" relative w-[100%] h-full">
              <Image
                src={pic5}
                alt={pic5}
                fill
                className=" w-full h-full  absolute object-contain"
              />
            </div>
          </div>
          <div className="embla__slide h-[280px] sm:h-[400px] md:h-[650px]">
            <div className=" relative w-[100%] h-full">
              <Image
                src={pic6}
                alt={pic6}
                fill
                className=" w-full h-full  absolute object-contain"
              />
            </div>
          </div>
          <div className="embla__slide h-[280px] sm:h-[400px] md:h-[650px]">
            <div className=" relative w-[100%] h-full">
              <Image
                src={pic7}
                alt={pic7}
                fill
                className=" w-full h-full  absolute object-contain"
              />
            </div>
          </div>
          <div className="embla__slide h-[280px] sm:h-[400px] md:h-[650px]">
            <div className=" relative w-[100%] h-full">
              <Image
                src={pic8}
                alt={pic8}
                fill
                className=" w-full h-full  absolute object-contain"
              />
            </div>
          </div>
          <div className="embla__slide h-[280px] sm:h-[400px] md:h-[650px]">
            <div className=" relative w-[100%] h-full">
              <Image
                src={pic9}
                alt={pic9}
                fill
                className=" w-full h-full  absolute object-contain"
              />
            </div>
          </div>
          <div className="embla__slide h-[280px] sm:h-[400px] md:h-[650px]">
            <div className=" relative w-[100%] h-full">
              <Image
                src={pic10}
                alt={pic10}
                fill
                className=" w-full h-full  absolute object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
