import React from "react";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#EDEDED] text-[#303030] p-8">
        <h1 className="text-5xl font-bold text-center mb-4">Welcome to Wareshare!</h1>
        <p className="text-xl max-w-2xl text-center mb-6">
          The ultimate solution for renting out and managing storage spaces effectively. Whether you
          need a garage, a container, or just a small lockup, Wareshare connects you with the
          perfect space for your needs.
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-gray-900 font-semibold py-2 px-6 rounded-lg shadow hover:bg-gray-200 transition">
            Get Started
          </button>
          <button className="bg-transparent border-2 border-white py-2 px-6 rounded-lg hover:bg-white hover:text-gray-900 transition">
            Learn More
          </button>
        </div>
      </main>
    </>
  );
}
