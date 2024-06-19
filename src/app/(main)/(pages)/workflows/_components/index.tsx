import React from "react";
import Workflow from "./workflow";
import { onGetWorkflows } from "../_actions/workflow-connections";
import MoreCredits from "./more-credits";

type Props = {};

const Workflows = async (props: Props) => {
  const workflows = await onGetWorkflows();
  return (
    <div className="relative flex flex-col gap-4">
      <section className="m-2 flex flex-col gap-4">
        <MoreCredits />
        {workflows?.length ? (
          workflows.map((workflow) => (
            <Workflow key={workflow.id} {...workflow} />
          ))
        ) : (
          <div className="mt-28 flex items-center justify-center text-muted-foreground">
            No Workflows
          </div>
        )}
      </section>
    </div>
  );
};

export default Workflows;
