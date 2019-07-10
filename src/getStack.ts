import {Component} from "react";
import {Stack} from "./types";
import {getType} from "./is";

function pushStack(node: any, stack: Stack) {
  const instance = typeof node.type === 'function' ? node.stateNode : stack;

  stack.type = node.type;
  stack.props = node.memoizedProps;
  stack.elementType = node.elementType || node.type;

  stack.children = [];

  stack.tag = getType(stack.type, instance);

  Object.defineProperty(stack, 'fiber', {
    value: node,
    enumerable: false,
  });

  Object.defineProperty(stack, 'instance', {
    value: instance,
    enumerable: false,
  });
}

function hydrateFiberStack(node: any, stack: Stack) {
  pushStack(node, stack);
  if (node.child) {
    let {child} = node;
    do {
      const childStack: Stack = {} as any;
      hydrateFiberStack(child, childStack);
      stack.children.push(childStack);
      child = child.sibling;
    } while (child);
  }
}

export const getInternalInstance = instance =>
  instance._reactInternalFiber || // React 16
  instance._reactInternalInstance || // React 15
  null;

export function getFiberStack(instance: Component): Stack {
  const rootNode: any = getInternalInstance(instance);
  const stack: Stack = {} as any;
  if (rootNode) {
    hydrateFiberStack(rootNode, stack);
  }

  return stack;
}