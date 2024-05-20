"use client";

import Image from "next/image";

const NotFound = () => {
  return (
    <div className="relative w-full grid place-items-center">
      <Image src="/tool-hub/status-code/404.png" alt="not found" fill objectFit="contain" />
    </div>
  );
};

export default NotFound;
