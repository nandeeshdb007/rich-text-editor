"use client";
import React, { useState } from "react";
import TipTap from "./TipTap";

const NotePicker = () => {
  const [content, setContent] = useState<string>("");

  const handleContentChange = (value: string) => {
    setContent(value);
  };
  return (
    <>
      <form className="max-w-3xl mx-auto w-full  grid place-items-center pt-10 mb-10">
        <div className="text-3xl text-white text-center mb-10">
          Notes Picker
        </div>
        <TipTap
          content={content}
          onChange={(value: string) => handleContentChange(value)}
        />
      </form>
    </>
  );
};

export default NotePicker;
