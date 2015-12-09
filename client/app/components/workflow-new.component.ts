import {Component, Input, Output, NgFor, EventEmitter, FORM_DIRECTIVES} from 'angular2/angular2';
import {TaskCardComponent} from './task-card.component';
import {TaskEditComponent} from './task-edit.component';
import {Workflow} from '../models/workflow';
import {WorkflowService} from '../services/workflow.service';

@Component({
  selector: 'workflow-new',
  templateUrl: 'templates/workflow-new.html',
  directives: [FORM_DIRECTIVES, NgFor, TaskCardComponent, TaskEditComponent]
})
export class NewWorkflowComponent {
  @Input() workflow: Workflow;
  @Output() created = new EventEmitter();
  @Output() canceled = new EventEmitter();
  
  constructor(private workflowService: WorkflowService) { }
  
  onSaved() {
        this.workflowService.createNewWorkflow(this.workflow)
          .map(res => res.json())
          .subscribe(
            data => {
              this.created.next(data);
            },
            err => console.log('Error while createing Workflow')
          );
  }
  
  onCanceled() {
    this.canceled.next(null);
  }
}