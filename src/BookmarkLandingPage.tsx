import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import Introduction from './Introduction';
import FeaturesSummary from './FeaturesSummary';
import ExtensionDownload from './ExtensionDownload';
import FAQ from './FAQ';

export default function BookmarkLandingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Introduction />
        <FeaturesSummary />
        <ExtensionDownload />
        <FAQ />
      </main>
      <SiteFooter />
    </>
  );
}