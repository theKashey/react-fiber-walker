react-fiber-walker
====
Fiber side analog of [react-tree-walker](https://github.com/ctrlplusb/react-tree-walker),
does the same, but requires `fiber` - a real rendered instance.

# API
- `walk(instance, visitor)` - walks the tree
- `getFiberStack(instance): tree` - returns simplified tree

See also:
- [react-hot-loader](https://github.com/gaearon/react-hot-loader) - v4 user fiber walker for "hot replacement render"
- [react-dom-reflection](https://github.com/theKashey/react-dom-reflection) - uses fiber walker to find nested portals

# License
MIT