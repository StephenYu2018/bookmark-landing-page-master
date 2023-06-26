import AnsweredQuestions from './AnsweredQuestions';

export default function FAQ() {
  return (
    <section
      className="px-8 xl:px-[28.125rem] pb-[7.75rem] xl:pb-[9.375rem] 
        mt-36"
    >
      <h2
        className="font-rubik font-medium text-center text-2xl 
          xl:text-[2rem] text-very-dark-blue"
      >
        Frequently Asked Questions
      </h2>
      <p
        className="font-rubik font-normal text-center text-[0.9375rem]/[1.667] 
          xl:text-lg/[1.556] text-very-dark-blue/50 mt-4 xl:mt-7"
      >
        Here are some of our FAQs. If you have any other questions you’d like 
        answered please feel free to email us.
      </p>
      <AnsweredQuestions />
      <div className="flex flex-row justify-center mt-12 xl:mt-[3.375rem]">
        <a href="#"
          className="flex flex-col justify-center font-rubik font-medium 
            text-center text-sm text-white hover:text-soft-blue/75 px-[1.65rem]
            hover:px-[1.525rem] hover:border-2 hover:border-soft-blue/75 h-12
            bg-soft-blue hover:bg-[rgba(0,_0,_0,_0)] rounded"
        >
          More Info
        </a>
      </div>
    </section>
  );
}
