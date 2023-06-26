import FeatureSummaryTabs from './FeatureSummaryTabs';

export default function FeaturesSummary() {
  return (
    <section className="mt-[9.25rem] flex flex-col items-center">
      <div className="px-8 xl:px-[28.125rem]">
        <h2
          className="font-rubik font-medium text-center text-2xl 
            xl:text-[2rem] text-very-dark-blue"
        >
          Features
        </h2>
        <p
          className="font-rubik font-normal text-center text-[0.9375rem]/[1.667] 
            xl:text-lg/[1.556] text-very-dark-blue/50 mt-4"
        >
          Our aim is to make it quick and easy for you to access your favourite 
          websites. Your bookmarks sync between your devices so you can access 
          them on the go.
        </p>
      </div>
      <FeatureSummaryTabs />
    </section>
  );
}
