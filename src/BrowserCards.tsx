import ChromeLogo from './ChromeLogo';
import DotsBackground from './DotsBackground';
import FirefoxLogo from './FirefoxLogo';
import OperaLogo from './OperaLogo';

class BrowserCardDictionary {
  public name: string;
  public logo: JSX.Element;
  public minVersion: number;
  public href: string;

  constructor(name: string, logo: JSX.Element, minVersion: number, href: string) {
    this.name = name;
    this.logo = logo;
    this.minVersion = minVersion;
    this.href = href;
  }
}

const browserCards: BrowserCardDictionary[] = [
  new BrowserCardDictionary('Chrome', <ChromeLogo />, 62, '#'),
  new BrowserCardDictionary('Firefox', <FirefoxLogo />, 55, '#'),
  new BrowserCardDictionary('Opera', <OperaLogo />, 46, '#'),
];

export default function BrowserCards() {
  return (
    <ul className="flex flex-col xl:flex-row gap-12 xl:gap-8 items-center 
      xl:items-start xl:justify-center mt-[3.25rem] xl:mt-[3.75rem]"
    >
    {browserCards.map((card, index) =>
      <li
        key={card.name}
        className="flex flex-col w-[17.5rem] h-[22.5rem] rounded-2xl 
          shadow-[0_8px_12px_2px] shadow-soft-blue/[0.15]"
        style={window.innerWidth >= 1280 ? { marginTop: `${index * 2.5}rem` } : {}}
      >
        <article className="flex flex-col items-center py-9">
          {card.logo}
          <h3
            className="font-rubik font-medium text-center text-xl 
              text-very-dark-blue mt-8"
          >
            Add to {card.name}
          </h3>
          <p
            className="font-rubik font-normal text-center 
              text-[0.9375rem]/[1.667] text-very-dark-blue/50 mt-1"
          >
            Minimum version {card.minVersion}
          </p>
        </article>
        <DotsBackground />
        <nav className="p-6">
          <a
            href={card.href}
            className="flex flex-col justify-center font-rubik font-medium 
              text-center text-sm text-white hover:text-soft-blue/75 h-12
              bg-soft-blue hover:hover:bg-[rgba(0,_0,_0,_0)] hover:border-2
              hover:border-soft-blue/75 rounded"
          >
            Add & Install Extension
          </a>
        </nav>
      </li>
    )}
    </ul>
  );
}
