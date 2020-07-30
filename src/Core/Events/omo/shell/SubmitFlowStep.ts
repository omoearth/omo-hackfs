import {Event} from "../../../Data/Entities/Event"

export class SubmitFlowStep extends Event
{
    readonly _$eventType = "omo.shell.submitFlowStep";

    data: {
        processNodeId: string,
        argument:any
    } = {
        processNodeId: "",
        argument: null
    };

    constructor(processNodeId:string, argument:any)
    {
        super();
        this.data.processNodeId = processNodeId;
        this.data.argument = argument;
    }
}
