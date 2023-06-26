import { useState } from 'react';

import SiteLogo from './SiteLogo';
import OpenMenuIcon from './OpenMenuIcon';
import SiteLinks from './SiteLinks';
import SocialMediaLinks from './SocialMediaLinks';
import CloseMenuIcon from './CloseMenuIcon';

export default function SiteHeader() {
  const [mobileNavModalIsShown, setMobileNavModalIsShown] = useState(false);

  return (
    <header
      className="flex justify-between items-center px-8 xl:px-[10.25rem] 
        py-10 xl:py-14"
    >
      <a href="#" className={`${mobileNavModalIsShown ? 'invisible' : 'visible'}`}>
        <SiteLogo />
      </a>
      <nav className="hidden md:block">
        <SiteLinks
          listStyles="flex flex-row items-center gap-11"
          listItemStyles="group/site-links font-rubik text-[0.8125rem]
            text-very-dark-blue/75 hover:text-soft-red/60 tracking-[0.11em]
            uppercase"
          linkStyles="group-last/site-links:block
            group-last/site-links:font-medium group-last/site-links:text-white
            group-last/site-links:hover:text-soft-red/75
            group-last/site-links:hover:border-2
            group-last/site-links:hover:border-red/75
            group-last/site-links:bg-soft-red
            group-last/site-links:hover:bg-[rgba(0,_0,_0,_0)]
            group-last/site-links:h-10
            group-last/site-links:flex group-last/site-links:flex-row
            group-last/site-links:items-center group-last/site-links:px-8
            group-last/site-links:hover:px-[1.875rem]
            group-last/site-links:rounded"
        />
      </nav>
      {mobileNavModalIsShown ?
      <div
        className="md:hidden fixed z-10 top-0 left-0 w-screen h-screen bg-very-dark-blue/[0.95]"
      >
        <header className="flex justify-between items-center px-8 py-10">
          <a href="#">
            <SiteLogo
              circleColor="#FFF"
              bookmarkColor="hsl(229, 31%, 21%, 0.95)"
              textColor="#FFF"
            />
          </a>
          <button
            onClick={() => setMobileNavModalIsShown(false)}
          >
            <CloseMenuIcon />
          </button>
        </header>
        <nav className="flex flex-col justify-between h-[calc(100vh_-_6.5625rem)]">
          <SiteLinks
            listStyles="flex flex-col items-center px-8 divide-y 
              divide-grayish-blue/25"
            listItemStyles="group/site-links w-full font-rubik font-normal 
              last:font-medium text-center text-xl text-white uppercase py-5 
              tracking-[0.12em] first:border-t first:border-t-grayish-blue/25"
            linkStyles="group-last/site-links:border-2 
              group-last/site-links:border-white group-last/site-links:block 
              group-last/site-links:px-[7.25rem] group-last/site-links:py-3 
              group-last/site-links:rounded"
          />
          <SocialMediaLinks extraStyles="mb-12" />
        </nav>
      </div> :
      <button
        className="block md:hidden"
        onClick={() => setMobileNavModalIsShown(true)}
      >
        <OpenMenuIcon />
      </button>}
    </header>
  );
}
