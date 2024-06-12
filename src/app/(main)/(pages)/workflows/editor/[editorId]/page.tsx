import EditorProvider from "@/providers/editor-provider";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const Editor = (props: Props) => {
  return (
    <div className="h-full">
      <EditorProvider>
        <div>Hello</div>
      </EditorProvider>
    </div>
  );
};

export default Editor;
