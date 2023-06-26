type CapsuleBgProps = {
  children: JSX.Element | JSX.Element[],
  extraStyles: string,
};

export default function CapsuleBg({ children, extraStyles }: CapsuleBgProps) {
  return (
    <>
      {children}
      <div
        className={`absolute w-[19rem] h-[12.6875rem] lg:h-[22rem] bg-soft-blue
          -z-10 ${extraStyles}`}
        ></div>
    </>
  );
} 