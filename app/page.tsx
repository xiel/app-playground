'use client';

import { use, useState } from 'react';

const testPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('use test promise');
  });
});

export default function Page() {
  use(testPromise);
  useState(0);

  return <h1 className="text-xl font-medium text-gray-300">Test</h1>;
}
