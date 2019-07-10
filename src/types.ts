export type TagType = 'host' | 'fc' | 'class' | 'lazy' | 'memo' | 'forward' | 'provider' | 'consumer' | 'portal' | '';

export interface Stack {
  type: any;
  props: object;
  elementType: any;
  instance: any;
  fiber: any;

  children: Stack[];

  tag: TagType;
}
