import { useState } from 'react';

export default function CompanyNewsSignupForm() {
  const [email, setEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(true);

  function isValidInput(email: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function handleSubmit(event: any) {
    if (!isValidInput(email)) {
      setEmailIsValid(false);
      setEmail('');
      event.preventDefault();
      return;
    }
    setEmailIsValid(true);
  };

  return (
    <div className="bg-soft-blue px-8 xl:px-[31.125rem] pt-[4.5rem] xl:py-[4.625rem]">
      <hgroup className="flex flex-col-reverse gap-2 xl:gap-11">
        <h2
          className="font-rubik font-medium text-center text-[1.625rem]/[1.115] 
          xl:text-[2rem]/tight text-white tracking-[-0.04em] xl:tracking-[0.03em]"
        >
          Stay up-to-date with what we're doing
        </h2>
        <p
          className="font-rubik font-medium text-center text-sm 
            xl:text-[0.8125rem] text-white tracking-[0.26em] xl:tracking-[0.4em] uppercase"
        >
          <small>35,000+ already joined</small>
        </p>
      </hgroup>
      <form onSubmit={handleSubmit}
        className="py-[2.375rem] sm:pt-9 xl:pb-0 flex flex-col sm:flex-row 
          gap-4"
      >
        <div className="sm:flex-grow">
          <label htmlFor="email"
            className="fixed top-[-99rem] left-[-99rem]"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={emailIsValid ?
              'Enter your email address' :
              'example@email/com'}
            className={`h-[3.125rem] sm:h-12 w-full px-5 font-rubik 
              text-[0.875rem] text-very-dark-blue focus:outline-none 
              ${!emailIsValid ? 
                `border-2 border-soft-red/90 rounded-t 
                bg-[url('../icon-error.svg')] 
                bg-no-repeat bg-[right_0.875rem_center] 
                placeholder:text-very-dark-blue` :
                'rounded placeholder:text-very-dark-blue/25'
              }`}
          />
        {!emailIsValid &&
          <p className="bg-soft-red/90 rounded-b font-rubik text-[0.625rem] 
          text-white pl-[0.625rem] pt-[0.1875rem] h-[1.375rem]">
            <strong
              className="font-medium italic"
            >Whoops, make sure it's an email</strong>
          </p>
        }
        </div>
        <button type="submit"
          className="h-[3.125rem] sm:h-12 w-full sm:w-[7.875rem] flex flex-col 
            justify-center font-rubik font-medium text-center text-sm 
            text-white hover:text-soft-red/90 hover:border-2
            hover:border-soft-red/75 px-[1.15rem] hover:px-[1.025rem]
            bg-soft-red hover:bg-white rounded"
        >
          Contact us
        </button>
      </form>
    </div>
  );
}
