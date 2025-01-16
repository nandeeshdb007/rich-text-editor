import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { FC } from "react";

const TipTap: FC<{
  content: string;
  onChange: (value: string) => void;
}> = ({ content, onChange }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
  });
  return <EditorContent editor={editor} />;
};

export default TipTap;
