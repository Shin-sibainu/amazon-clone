import React from "react";
import Logo from "../common/Logo";
import SearchBar from "../common/SearchBar";

const Header = () => {
  return (
    <header className="bg-[#131921] text-white">
      <div className="container mx-auto px-4 py-2 flex items-center gap-4">
        <Logo />
        <SearchBar />

        <div className="flex items-center gap-4">
          <div className="cursor-pointer">
            <div className="text-xs">こんにちは、ログイン</div>
            <div className="font-bold">アカウント＆リスト</div>
          </div>

          <div className="cursor-pointer">
            <div className="text-xs">お届け先</div>
            <div className="font-bold">153-0064</div>
          </div>

          <div className="cursor-pointer flex items-center">
            <div className="relative">
              <span className="absolute -top-2 -right-2 bg-[#f08804] rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 3h1l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H6.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H4.21l-.94-2H1v2zm16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
            </div>
            <span className="font-bold">カート</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
