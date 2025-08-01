"use client";
import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./CarouselArrowButtons";
// import {
//   NextButton,
//   PrevButton,
//   usePrevNextButtons,
// } from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./CarouselDotButton";
import Image from "next/image";

const TWEEN_FACTOR_BASE = 0.84;

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

const CustomersReviews = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenOpacity = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const opacity = numberWithinRange(tweenValue, 0, 1).toString();
        emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenFactor(emblaApi);
    tweenOpacity(emblaApi);
    emblaApi
      .on("reInit", setTweenFactor)
      .on("reInit", tweenOpacity)
      .on("scroll", tweenOpacity)
      .on("slideFocus", tweenOpacity);
  }, [emblaApi, tweenOpacity]);

  return (
    <div className="mt-15 mx-auto">
      <div className="flex flex-col justify-center items-center space-y-8">
        <Image src="/customer-top.png" alt="customer-top." width="246" height="102" />
        <h2 className="font-extrabold text-center text-[#03373D] text-4xl">What our Customers are sayings</h2>
        <p className="text-[#606060] text-base w-3/6 text-center">Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
      </div>
      <div className="overflow-hidden mt-16" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom -ml-4">
        

          {slides.map(slide=>(
  <div key={slide.id} className="bg-white rounded-3xl space-x-20 space-y-6 p-8 min-w-[410] ">
            <Image src="/reviewQuote.png" alt="alt" width="48" height="48" />
            <p className="text-[#606060] text-base">
              {slide.desc}
            </p>
            <div className="border-dashed  border-[#03464D] border"></div>
            <div className="flex space-x-4">
              <Image src={slide.avatar} alt="alt" width="48" height="48" className="rounded-full "/>
              <div>
                <h3 className="text-xl font-bold text-[#03373D]">{slide.name}</h3>
                <p className="text-[#606060] text-base">
                  {slide.designation}
                </p>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>

      <div
        className="flex justify-center gap-5 mt-7
"
      >
        <div
          className="grid grid-cols-2 gap-50 items-center
"
        >
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />

          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        {/* <div
          className="flex flex-wrap justify-end items-center -mr-[0.6rem]
"
        >
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"flex flex-wrap justify-end items-center -mr-[0.6rem]".concat(
                index === selectedIndex
                  ? " shadow-[inset_0_0_0_2px_var(--text-body)] content-[''] flex items-center w-[1.4rem] h-[1.4rem] rounded-full shadow-[inset_0_0_0_2px_var(--detail-medium-contrast)] content-[''] flex items-center w-[1.4rem] h-[1.4rem] rounded-full shadow-[inset_0_0_0_2px_var(--detail-medium-contrast)]"
                  : ""
              )}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default CustomersReviews;
