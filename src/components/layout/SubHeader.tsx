import React from "react";

const SubHeader = () => {
  return (
    <nav className="bg-[#232f3e] text-white">
      <div className="container mx-auto px-4">
        <ul className="flex items-center gap-4 py-2">
          <li className="cursor-pointer flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            すべて
          </li>
          <li className="cursor-pointer">Amazonポイント</li>
          <li className="cursor-pointer">残高を確認</li>
          <li className="cursor-pointer">ヘルプ</li>
          <li className="cursor-pointer">ネットスーパー</li>
          <li className="cursor-pointer">ランキング</li>
          <li className="cursor-pointer">Amazon Basics</li>
          <li className="cursor-pointer">ミュージック</li>
          <li className="cursor-pointer">タイムセール</li>
          <li className="cursor-pointer">Prime Video</li>
          <li className="cursor-pointer">プライム</li>
        </ul>
      </div>
    </nav>
  );
};

export default SubHeader;
