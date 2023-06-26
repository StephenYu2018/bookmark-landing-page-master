import BrowserCards from '../components/BrowserCards';

export default function ExtensionDownload() {
  return (
    <section className="px-8 xl:px-0 xl:mt-[10.125rem]">
      <div className="xl:px-[28.125rem]">
        <h2
          className="font-rubik font-medium text-center text-2xl 
            xl:text-[2rem] text-very-dark-blue"
        >
          Download the extension
        </h2>
        <p
          className="font-rubik font-normal text-center 
            text-[0.9375rem]/[1.667] xl:text-lg/[1.556] text-very-dark-blue/50 
            mt-4"
        >
          We’ve got more browsers in the pipeline. Please do let us know if 
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
      <BrowserCards />
    </section>
  );
}