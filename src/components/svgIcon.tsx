type Props = {
  fill?: string,
  stroke?: string,
  className?: string;
}

const ArrowRightIcon = ({ fill, stroke = '#fff', className }: Props) => {
  return (
    <svg width='45' height='28' viewBox='0 0 45 28' fill={fill} xmlns='http://www.w3.org/2000/svg'
         className={className}>
      <path id='Vector 302' d='M42 14C38.5 12 31.5 7 26.7273 1M42 14C38.8182 15.6667 31.5 21 26.7273 27M42 14H0'
            stroke={stroke} strokeWidth='2' />
    </svg>
  );
};

export {
  ArrowRightIcon
};