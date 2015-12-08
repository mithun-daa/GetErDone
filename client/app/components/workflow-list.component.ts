import {Component, NgFor} from 'angular2/angular2';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {WorkflowComponent} from './workflow.component';
import {WorkflowService} from '../services/workflow-service';

@Component({
    selector: 'workflow-list',
    templateUrl: 'templates/workflow-list.html',
    directives: [NgFor, WorkflowComponent],
    providers: [WorkflowService]
})
export class WorkflowListComponent {
    public activeWorkflows;

    constructor(private workflowService: WorkflowService) {
        workflowService.get()
            .map(res => res.json())
            .subscribe(
                data => this.activeWorkflows = data,
                err => console.log("Error!! ", err)
            );
    }

    onNewTaskCanceled() {

    }
}
