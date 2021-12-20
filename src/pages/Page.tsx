import { FunctionComponent } from "../components/FunctionComponent"
import StatefulComponent from "../components/StatefulComponent"

export const Page = () => (
  <div className="page">
    <FunctionComponent />

    <StatefulComponent requiredProp={"hello world!"} >
      <h1>Child</h1>
    </StatefulComponent>

  </div>
)