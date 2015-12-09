import {Component, NgFor} from 'angular2/angular2';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {WorkflowComponent} from './workflow.component';
import {NewWorkflowComponent} from './workflow-new.component';
import {WorkflowService} from '../services/workflow.service';
import {Workflow} from '../models/workflow';

@Component({
    selector: 'workflow-list',
    templateUrl: 'templates/workflow-list.html',
    directives: [NgFor, WorkflowComponent, NewWorkflowComponent],
    providers: [WorkflowService]
})
export class WorkflowListComponent {
    public workflows: [Workflow];
    public newWorkflow: Workflow = new Workflow();
    public addMode: Boolean = false;

    constructor(private workflowService: WorkflowService) {
        workflowService.get()
            .map(res => res.json())
            .subscribe(
                data => this.workflows = data,
                err => console.log("Error!! ", err)
            );
    }

    onNewWorkflowCreated(newWorkflow: Workflow) {
        this.workflows.unshift(newWorkflow);
        this.addMode = false;
    }
    
    onNewWorkflowCanceled() {
        this.addMode = false;
    }
    
    onWorkflowDeleted(workflow: Workflow) {
        var index = this.workflows.indexOf(workflow);
        this.workflows.splice(index, 1);
    }
}
