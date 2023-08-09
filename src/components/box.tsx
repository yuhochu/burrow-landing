import { BaseProps } from '../interfaces/interfaces';
import clsx from 'clsx';
import React from 'react';
import Image from '../components/image';
import { Link } from 'react-router-dom';

export interface BoxProps extends BaseProps {
  image?: string;
  style?: object;
  link?: {
    to: string
  };
}

export const Box = ({ children, className, image, style, link }: BoxProps) => {
  const node = (
    <div className={clsx('rounded bg-primary-500 text-black overflow-hidden', className)} style={style}>
      {image && <Image src={image} className={'w-full'} />}
      <div className={'p-8'}>
        {children}
      </div>
    </div>
  );

  if (link) {
    return <Link to={link?.to}>{node}</Link>;
  }

  return node;
};