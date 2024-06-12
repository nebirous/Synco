import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const Editor = (props: Props) => {
  redirect("/workflows");
};

export default Editor;
