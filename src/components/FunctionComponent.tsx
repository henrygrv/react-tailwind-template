import React from "react";

interface FunctionComponentProps {
  children?: React.ReactNode
  optionalProp?: any
}

export const FunctionComponent:React.FC<FunctionComponentProps> = (props: FunctionComponentProps) => (
  <div>
    <h1 className="underline font-bold text-lg text-blue-300">Example Function Component</h1>
  </div>
)
