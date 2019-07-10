import * as React from "react";
import {TagType} from "./types";

const ContextType = React.createContext ? React.createContext(null) : null;
const ConsumerType = ContextType && ContextType.Consumer.$$typeof;
const ProviderType = ContextType && ContextType.Provider.$$typeof;
const MemoType = React.memo && React.memo(() => null).$$typeof;
const LazyType = React.lazy && React.lazy(() => null).$$typeof;
const ForwardType = React.forwardRef && React.forwardRef(() => null).$$typeof;

export const isContextConsumer = (type) =>
  type && typeof type === 'object' && '$$typeof' in type && type.$$typeof === ConsumerType && ConsumerType;
export const isContextProvider = (type) =>
  type && typeof type === 'object' && '$$typeof' in type && type.$$typeof === ProviderType && ProviderType;
export const isMemoType = (type) =>
  type && typeof type === 'object' && '$$typeof' in type && type.$$typeof === MemoType && MemoType;
export const isLazyType = (type) =>
  type && typeof type === 'object' && '$$typeof' in type && type.$$typeof === LazyType && LazyType;
export const isForwardType = (type) =>
  type && typeof type === 'object' && '$$typeof' in type && type.$$typeof === ForwardType && ForwardType;

export const getType = (type: any, instance: any): TagType => {
  if (typeof type === 'string') return 'host';

  if (typeof type === 'function' && !instance) return 'fc'
  if (typeof type === 'function' && instance) return 'class'

  if (!!isLazyType(type)) return 'lazy';
  if (!!isMemoType(type)) return 'memo';
  if (!!isContextConsumer(type)) return 'consumer';
  if (!!isContextProvider(type)) return 'provider';
  if (!!isForwardType(type)) return 'forward';

  return '';
}