"use client";
import React, { useCallback } from "react";
import { DotButton, useDotButton } from "../shared/EmblaCarouselDotButton";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import pic from "../../assets/events/cabinet1.jpg";
import pic2 from "../../assets/events/event-2-pic-1.jpg";
const cabinet = [
  {
    pic: pic,
  },
  {
    pic: pic2,
  },
];

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
                src={pic}
                alt={pic}
                fill
                className=" w-full h-full  absolute object-contain"
              />
            </div>
          </div>
          <div className="embla__slide h-[280px] sm:h-[400px] md:h-[650px]">
            <div className=" relative w-[100%] h-full">
              <Image
                src={pic}
                alt={pic}
                fill
                className=" w-full h-full  absolute object-contain"
              />
            </div>
          </div>
          <div className="embla__slide h-[280px] sm:h-[400px] md:h-[650px]">
            <div className=" relative w-[100%] h-full">
              <Image
                src={pic}
                alt={pic}
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
