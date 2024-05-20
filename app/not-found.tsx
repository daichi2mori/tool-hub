"use client";

import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center w-full relative">
      <Image src="/tool-hub/status-code/404.png" alt="not found" fill objectFit="contain" />
    </div>
  );
};

export default NotFound;
