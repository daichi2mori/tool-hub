"use client";

import Image from "next/image";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center w-full relative">
      <Image src="/tool-hub/status-code/500.png" alt="not found" fill objectFit="contain" />
    </div>
  );
};

export default ErrorPage;
