'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {
  async function getModule(moduleId: number) {
    try {
      const response = await fetch(`/api/code-modules?moduleId=${moduleId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        toast.success(data.message, {
          position: 'top-right',
        });
      } else {
        toast.error('Error processing request', {
          position: 'top-right',
        });
      }
    } catch (error) {
      toast.error('Error processing request', {
        position: 'top-right',
      });
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="w-full">
          <h1 className="text-4xl font-bold mb-8">CODE module database</h1>
          <p className="mb-8">
            CODE just added a new modules! Try finding the flag.
          </p>
          <button
            onClick={() => getModule(105)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            New STS module
          </button>
          <br />
          <br />
          <button
            onClick={() => getModule(205)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            New PM module
          </button>
          <br />
          <br />
          <button
            onClick={() => getModule(305)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            New ID module
          </button>
          <br />
          <br />
          <button
            onClick={() => getModule(405)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            New IS module
          </button>
          <br />
          <br />
          <button
            onClick={() => getModule(505)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            New SE module
          </button>
          <Toaster />
        </div>
      </div>
    </main>
  );
}
