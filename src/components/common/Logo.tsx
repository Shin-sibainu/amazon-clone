import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center cursor-pointer pt-2">
      <Image
        src="https://m.media-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png"
        alt="Amazon Logo"
        width={100}
        height={30}
        className="object-contain"
      />
      <span className="text-white text-xs">.co.jp</span>
    </div>
  );
};

export default Logo;
