import { BaseProps } from '../interfaces/interfaces';
import React from 'react';
import Image from '../components/image';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export interface BoxProps extends BaseProps {
  image?: string;
  style?: object;
  link?: {
    to: string;
  };
}

export const Box = ({ children, className, image, style, link }: BoxProps) => {
  const node = (
    <div className={twMerge('rounded bg-primary-500 text-black overflow-hidden', className)} style={style}>
      {image && (
        <div className={'box-image'}>
          <Image src={image} className={'w-full'} />
        </div>
      )}
      <div className={'p-4 sm:-6 md:p-8'}>{children}</div>
    </div>
  );

  if (link) {
    return <Link to={link.to}>{node}</Link>;
  }

  return node;
};
