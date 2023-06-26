import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import Introduction from './page-sections/Introduction';
import FeaturesSummary from './page-sections/FeaturesSummary';
import ExtensionDownload from './page-sections/ExtensionDownload';
import FAQ from './page-sections/FAQ';

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