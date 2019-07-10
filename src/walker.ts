import {Component} from "react";
import {Stack} from "./types";
import {getFiberStack} from "./getStack";

export type Visitor = (element: Stack, instance: any) => void;

const walkTree = (tree: Stack, visitor: Visitor) => {
  visitor(tree, tree.instance);
  tree.children.forEach(child => walkTree(child, visitor));
};

export const walk = (entry: Component, visitor: Visitor) => {
  const tree = getFiberStack(entry);
  walkTree(tree, visitor);
};