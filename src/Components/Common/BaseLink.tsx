'use client';

import { BaseLinkProps } from '@/Types/Common';
import Link from 'next/link';

const BaseLink = ({ href, text, style }: BaseLinkProps) => (
  <Link href={href} className={style}>
    {text}
  </Link>
);

export default BaseLink;
