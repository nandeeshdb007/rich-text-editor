/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Notes = () => {
  const [data, setData] = useState<any[]>([]); // Use `any[]` for compatibility
  const colors = ["#ffcccc", "#ccffcc", "#ccccff", "#ffffcc", "#ffccff"];

  useEffect(() => {
    const existingDataString = localStorage.getItem("myData");
    if (existingDataString) {
      const existingData = JSON.parse(existingDataString);
      setData(existingData);
    }
  }, []);

  if (!data || data.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-5">
        <p className="text-center text-white text-xl py-10">No notes available</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-5">
      <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 750: 2, 1024: 3 }}>
        <Masonry gutter="20px">
          {data.map((item: any, idx: number) => (
            <div key={idx}>
              <div
                className="px-4 py-3 font-bold text-slate-950"
                style={{ backgroundColor: colors[idx % colors.length] }}
              >
                Note - {idx + 1}
              </div>
              <div
                className="ProseMirror whitespace-pre-line border border-slate-700 px-6 py-4 rounded-lg"
                style={{ whiteSpace: "pre-line" }}
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Notes;
