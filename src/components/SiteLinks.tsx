class SiteLinkDictionary {
  public text: string;
  public href: string;

  constructor(text: string, href: string) {
    this.text = text;
    this.href = href;
  }
}

const linkDictionaries: readonly SiteLinkDictionary[] = Object.freeze([
  new SiteLinkDictionary('Features', '#'),
  new SiteLinkDictionary('Pricing', '#'),
  new SiteLinkDictionary('Contact', '#'),
  new SiteLinkDictionary('Login', '#'),
]);

type SiteLinksProps = {
  listStyles: string,
  listItemStyles: string,
  linkStyles: string,
  hasLogin?: boolean
}

export default function SiteLinks({
  listStyles,
  listItemStyles,
  linkStyles,
  hasLogin = true
}: SiteLinksProps) {
  return (
    <ul className={listStyles}>
    {linkDictionaries.slice(0, hasLogin ?
      linkDictionaries.length :
      linkDictionaries.length - 1
    ).map((linkDict) => 
      <li
        key={linkDict.text}
        className={listItemStyles}
      >
        <a href={linkDict.href}
          className={linkStyles}
        >
          {linkDict.text}
        </a>
      </li>
    )}
    </ul>
  );
}