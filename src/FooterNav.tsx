import SiteLogo from './SiteLogo';
import SiteLinks from './SiteLinks';
import SocialMediaLinks from './SocialMediaLinks';

export default function FooterNav() {
  return (
    <nav
      className="bg-very-dark-blue py-[1.375rem] xl:py-8 xl:px-[10.25rem] flex 
        flex-col xl:flex-row items-center xl:justify-between"
    >
      <div className="flex flex-col xl:flex-row gap-11 xl:gap-16">
        <a href="#">
          <SiteLogo textColor="#FFF" />
        </a>
        <SiteLinks hasLogin={false}
          listStyles="flex flex-col xl:flex-row items-center px-8 gap-9 
            xl:gap-11"
          listItemStyles="w-full font-rubik font-normal text-center text-base 
            text-white hover:text-soft-red/80 uppercase tracking-[0.08em]"
          linkStyles=""
        />
      </div>
      <SocialMediaLinks extraStyles="mt-[3.25rem] mb-5 xl:my-0"/>
    </nav>
  );
}
