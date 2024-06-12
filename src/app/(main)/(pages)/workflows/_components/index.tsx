import React from "react";
import Workflow from "./workflow";

type Props = {};

const Workflows = (props: Props) => {
  return (
    <div className="relative flex flex-col gap-4">
      <section className="m-2 flex flex-col gap-4">
        <Workflow
          description="Creating a test workflow"
          id="49461687454"
          name="mockup workflow"
          publish={false}
        />
      </section>
    </div>
  );
};

export default Workflows;
