import CapsuleBg from './CapsuleBg';
import IntroductionHeroGraphics from './IntroductionHeroGraphics';

export default function Introduction() {
  return (
    <header className="flex flex-col xl:flex-row-reverse xl:gap-[7.5rem]">
      <div className="my-9 relative xl:pr-[3.25rem]">
        <CapsuleBg
          extraStyles="rounded-l-[11rem] right-0 bottom-[0.625rem]
            xl:bottom-[-3rem] xl:w-[32.125rem]"
        >
          <IntroductionHeroGraphics />
        </CapsuleBg>
      </div>
      <div
        className="flex flex-col items-center xl:items-start  
          xl:pl-[10.3125rem] xl:pr-0 xl:max-w-[41rem]">
        <h1
          className="font-rubik font-medium text-center xl:text-left 
            text-3xl/[1.333] xl:text-5xl/[1.083] text-very-dark-blue
            xl:pt-[8.875rem] gap-0"
        >
          A Simple Bookmark Manager
        </h1>
        <p
          className="font-rubik font-normal text-center xl:text-left 
            text-[0.9375rem]/[1.667] xl:text-lg/[1.556] text-very-dark-blue/50 
            mt-[1.625rem]"
        >
          A clean and simple interface to organize your favourite websites. 
          Open a new browser tab and see your sites load instantly. Try it for
          free.
        </p>
        <div className="flex gap-[0.6875rem] mt-9">
          <a
            href="#"
            className="flex flex-col justify-center font-rubik font-medium 
              text-center text-sm text-white hover:text-soft-blue/75
              px-[1.15rem] hover:px-[1.025rem] hover:border-2
              hover:border-soft-blue/75 h-12 bg-soft-blue
              hover:bg-[rgba(0,_0,_0,_0)] rounded"
          >
            Get it on Chrome
          </a>
          <a
            href="#"
            className="flex flex-col justify-center font-rubik font-medium 
              text-center text-sm text-very-dark-blue/75
              hover:text-very-dark-blue/60 px-[1.2rem]
              hover:px-[1.075rem] hover:border-2
              hover:border-very-dark-blue/60 h-12 bg-white
              hover:bg-[rgba(0,_0,_0,_0)] rounded
              shadow-[0_5px_8px_1px] shadow-soft-blue/[0.15]"
          >
            Get it on Firefox
          </a>
        </div>
      </div>
    </header>
  );
}
