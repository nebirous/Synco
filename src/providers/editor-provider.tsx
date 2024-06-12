"use client";

import { EditorNodeType } from "@/lib/types";
import {
  Dispatch,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";

export type EditorNode = EditorNodeType;

export type Editor = {
  elements: EditorNode[];
  edges: {
    id: string;
    source: string;
    target: string;
  }[];
  selectedNode: EditorNodeType;
};

export type HistoryState = {
  history: Editor[];
  currentIndex: number;
};
