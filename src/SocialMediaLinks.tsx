import FacebookLogo from './FacebookLogo';
import TwitterLogo from './TwitterLogo';

class SocialMediaLinkDictionary {
  public text: string;
  public href: string;
  public logo: JSX.Element;

  constructor(text: string, href: string, logo: JSX.Element) {
    this.text = text;
    this.href = href;
    this.logo = logo;
  }
}

const linkDictionaries: SocialMediaLinkDictionary[] = [
  new SocialMediaLinkDictionary('Facebook', '#', <FacebookLogo />),
  new SocialMediaLinkDictionary('Twitter', '#', <TwitterLogo />),
];

type SocialMediaLinksProps = {
  extraStyles?: string,
}

export default function SocialMediaLinks({
  extraStyles = ""
}: SocialMediaLinksProps) {
  return (
    <ul className={`flex flex-row justify-center gap-10 ${extraStyles}`}>
      {linkDictionaries.map((linkDict) =>
        <li key={linkDict.text}>
          <a href={linkDict.href}>
            {linkDict.logo}
          </a>
        </li>
      )}
    </ul>
  );
}
