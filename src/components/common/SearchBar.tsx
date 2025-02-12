import React from "react";

const SearchBar = () => {
  return (
    <div className="flex flex-grow items-center h-10 rounded-md bg-yellow-400 hover:bg-yellow-500">
      <select className="p-2 h-full bg-gray-100 rounded-l-md border-r border-gray-300 focus:outline-none">
        <option>すべて</option>
        <option>本</option>
        <option>DVD</option>
        <option>家電</option>
        <option>パソコン</option>
        <option>おもちゃ</option>
      </select>
      
      <input
        type="text"
        className="p-2 h-full w-6 flex-grow focus:outline-none px-4"
        placeholder="検索 Amazon.co.jp"
      />
      
      <button className="p-4 h-full bg-yellow-500 rounded-r-md hover:bg-yellow-600">
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar; 