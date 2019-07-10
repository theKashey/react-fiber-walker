import * as React from 'react';

export class Instance extends React.Component<{
  children: React.ReactNode;
  assignInstance: (instance: any) => void;
}> {
  componentDidMount() {
    this.props.assignInstance(this);
  }

  componentWillMount() {
    this.props.assignInstance(null);
  }

  render() {
    return this.props.children as any;
  }
}