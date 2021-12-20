import React from "react";

interface StatefulComponentProps {
  children?: React.ReactNode,
  requiredProp: any,
  optionalProp?: any
}

interface StatefulComponentState {
  count?: number
}

export default class StatefulComponent extends React.Component<StatefulComponentProps, StatefulComponentState> {

  constructor(props: StatefulComponentProps) {
    super(props)

    this.state = {
      count: 0,
    }
  }
  
  static defaultProps = {
    requiredProp: "hello world!",
    optionalProp: "hello react!"
  }

  render = () => (
    <div>
      <h1>Example Stateful Component</h1>
      <p className="text-blue-600">{this.props.children}</p>
    </div>
  )
}