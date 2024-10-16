'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ProfileNav({ username }: { username: string }) {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-10 mt-6 flex w-full max-w-full justify-center bg-white dark:bg-darkModePrimaryBackground">
      <Link
        href={`/${username}`}
        className={
          pathname === `/${username}`
            ? 'text-xl font-bold text-purple-600 dark:text-darkModeHeader'
            : 'text-gray-500'
        }
      >
        Posts
      </Link>
    </nav>
  );
}
