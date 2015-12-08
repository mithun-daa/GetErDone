import {Component, Input, NgFor, FORM_DIRECTIVES} from 'angular2/angular2';
import {TaskCardComponent} from './task-card.component';
import {TaskEditComponent} from './task-edit.component';
import {Workflow} from '../models/workflow';
import {Task} from '../models/task';
import {WorkflowService} from '../services/workflow-service';

@Component({
  selector: 'workflow-card',
  templateUrl: 'templates/workflow-card.html',
  directives: [FORM_DIRECTIVES, NgFor, TaskCardComponent, TaskEditComponent],

})
export class WorkflowComponent {
  @Input() workflow: Workflow;
  public newTask: Task = new Task();
  public hideAddNewTaskForm = true;
  public editingWorkflow = false;

  constructor(private workflowService: WorkflowService) {
  }

  onNewTaskCanceled() {
    this.newTask = new Task();
    this.hideAddNewTaskForm = true;
  };

  onNewTaskSaved() {
    this.workflowService.addNewTask(this.workflow._id, this.newTask)
      .map(res => res.json())
      .subscribe(
        data => this.workflow = data,
        err => console.log("Error while creating new Task!! ", err)
      );

    this.hideAddNewTaskForm = true;
  };
  
  onTaskDeleted(task: Task) {
    this.workflowService.delTask(this.workflow._id, task)
    .map(res => res.json())
    .subscribe(
        data => this.workflow = data,
        err => console.log("Error while deleting Task!! ", err)
      );
  };
  
  onSaveWorkflow() {
    this.workflowService.updateWorkflow(this.workflow)
      .map(res => res.json())
      .subscribe(
        data => this.workflow = data,
        err => console.log("Error while updating Task!! ", err),
        () => this.editingWorkflow = false
      );
  };
}