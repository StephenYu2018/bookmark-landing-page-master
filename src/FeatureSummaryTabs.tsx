import { useState } from 'react';

import FeatureSimpleGraphics from './FeatureSimpleGraphics';
import FeatureFastGraphics from './FeatureFastGraphics';
import FeatureSharingGraphics from './FeatureSharingGraphics';
import CapsuleBg from './CapsuleBg';

class FeatureSummaryDictionary {
  public tabLabel: string;
  public heroGraphics: JSX.Element;
  public heading: string;
  public paragraph: string;
  public href: string;
  public capsuleBgStyles: string;
  public graphicsContainerStyles: string;

  constructor(
    tabLabel: string,
    heroGraphics: JSX.Element,
    heading: string,
    paragraph: string,
    href: string,
    capsuleBgStyles: string,
    graphicsContainerStyles: string
  ) {
    this.tabLabel = tabLabel;
    this.heroGraphics = heroGraphics;
    this.heading = heading;
    this.paragraph = paragraph;
    this.href = href;
    this.capsuleBgStyles = capsuleBgStyles;
    this.graphicsContainerStyles = graphicsContainerStyles;
  }
}

const featureSummaries: FeatureSummaryDictionary[] = [
  new FeatureSummaryDictionary(
    'Simple Bookmarking', 
    <FeatureSimpleGraphics />,
    'Bookmark in one click',
    'Organize your bookmarks however you like. Our simple drag-and-drop ' +
      'interface gives you complete control over how you manage your ' + 
      'favourite sites.',
    '#',
    'bottom-[-2.3rem] xl:bottom-[-3.75rem]',
    'xl:pl-[10.5rem] xl:pr-[1.125rem]'
  ),
  new FeatureSummaryDictionary(
    'Speedy Searching', 
    <FeatureFastGraphics />,
    'Intelligent search',
    'Our powerful search feature will help you find saved sites in no time ' +
      'at all. No need to trawl through all of your bookmarks.',
    '#',
    'bottom-7 xl:bottom-[-1.5rem]',
    'xl:pl-[15.25rem] xl:pr-0'
  ),
  new FeatureSummaryDictionary(
    'Easy Sharing', 
    <FeatureSharingGraphics />,
    'Share your bookmarks',
    'Easily share your bookmarks and collections with others. Create a ' +
      'shareable link that you can send at the click of a button.',
    '#',
    'bottom-[1.4rem] xl:bottom-[-3.75rem]',
    'xl:pl-[15.25rem] xl:pr-[2.375rem]'
  ),
];

export default function FeatureSummaryTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <ul
        className="mt-[2.625rem] flex flex-col xl:flex-row px-8 xl:px-0 w-full
          xl:w-auto"
      >
        {featureSummaries.map((dict, index) => (
          <li
            key={dict.tabLabel}
            className="border-b border-b-grayish-blue/25 first:border-t
              first:border-t-grayish-blue/25 xl:first:border-none py-3 xl:py-0 flex 
              flex-col items-center xl:justify-center relative
              xl:w-[15.1875rem] xl:h-20"
          >
            <button
              onClick={() => setActiveTab(index)}
              className={`font-rubik font-normal text-[0.9375rem]/[1.667] 
                xl:text-[1.0625rem] 
                ${activeTab === index ? 
                  'text-very-dark-blue' :
                  'text-very-dark-blue/75 hover:text-soft-red/75'}
                `}
            >
              {dict.tabLabel}
            </button>
            {activeTab !== index ||
              <div
                className="bg-soft-red h-1 w-[46%] xl:w-full absolute bottom-0"
              ></div>
            }
          </li>
        ))}
      </ul>
      <section
        className="py-[4.5rem] flex flex-col xl:flex-row
          xl:gap-[6.625rem] w-full"
      >
        <div
          className={`relative px-8
            ${featureSummaries[activeTab].graphicsContainerStyles}`}
        >
          <CapsuleBg
            extraStyles={`rounded-r-[11rem] left-0 xl:w-[40rem]
              ${featureSummaries[activeTab].capsuleBgStyles}`}
          >
            {featureSummaries[activeTab].heroGraphics}
          </CapsuleBg>
        </div>
        <div className="py-[5.25rem] xl:w-[27.5rem]">
          <h3
            className="font-rubik font-medium text-center xl:text-left text-2xl 
              xl:text-[2rem] text-very-dark-blue"
          >
            {featureSummaries[activeTab].heading}
          </h3>
          <p
            className="font-rubik font-normal text-center xl:text-left 
              text-[0.9375rem]/[1.667] xl:text-lg/[1.556] 
              text-very-dark-blue/50 mt-4 xl:mt-6"
          >
            {featureSummaries[activeTab].paragraph}
          </p>
          <a
            href={featureSummaries[activeTab].href}
            className="hidden xl:flex xl:mt-6 flex-col justify-center
              font-rubik font-medium text-center text-sm text-white
              hover:text-soft-blue/75 px-[1.15rem] hover:px-[1.025rem]
              hover:border-2 hover:border-soft-blue/75 h-12 bg-soft-blue
              hover:bg-[rgba(0,_0,_0,_0)] rounded w-fit"
          >
            More Info
          </a>
        </div>
      </section>
    </>
  );
}