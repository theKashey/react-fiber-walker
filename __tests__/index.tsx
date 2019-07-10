import * as React from 'react';
import {mount} from 'enzyme';
import {getFiberStack} from "../src";

describe('Specs', () => {
  it('stack', () => {
    class Comp extends React.Component {
      render() {
        return "42"
      }
    }

    class Thought extends React.Component {
      render() {
        return this.props.children;
      }
    }

    const Test = () => <div><Comp/></div>;
    const wrapper = mount(<Thought p1={1}><div><Test p2={2}/></div></Thought>);

    expect(getFiberStack(wrapper.instance())).toMatchSnapshot();

  });
});
