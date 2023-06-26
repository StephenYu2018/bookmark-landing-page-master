type ArrowIconProps = {
  styles: {
    svg: string,
    stroke: string
  }
}

export default function ArrowIcon({ styles }: ArrowIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg" 
      className={styles.svg}
      width="18"
      height="12"
    >
      <path
        className={styles.stroke}
        fill="none"
        stroke="#5267DF"
        strokeWidth="3"
        d="M1 1l8 8 8-8"
      />
    </svg>
  );
}
