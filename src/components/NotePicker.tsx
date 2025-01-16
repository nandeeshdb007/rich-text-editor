"use client";

import React, { useState } from "react";
import TipTap from "./TipTap";
import { v4 as uuidv4 } from "uuid";

const NotePicker = () => {
  const [content, setContent] = useState<string>("");

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Save to localStorage
    const data = {
      id: uuidv4(),
      content: content,
    };
    const existingDataString = localStorage.getItem("myData");
    const existingData = existingDataString
      ? JSON.parse(existingDataString)
      : [];
    const updatedData = [...existingData, data];
    localStorage.setItem("myData", JSON.stringify(updatedData));

    // Reset content
    setContent("");
  };

  return (
    <form
      className="max-w-3xl mx-auto w-full grid place-items-center pt-10 mb-10"
      onSubmit={handleSubmit}
    >
      <div className="text-3xl text-white text-center mb-10">
        Notes Picker
      </div>
      <TipTap
        content={content}
        onChange={(value: string) => handleContentChange(value)}
      />
    </form>
  );
};

export default NotePicker;
