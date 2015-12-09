import {Component, Input, Output, EventEmitter, NgFor, FORM_DIRECTIVES} from 'angular2/angular2';
import {TaskCardComponent} from './task-card.component';
import {TaskEditComponent} from './task-edit.component';
import {Workflow} from '../models/workflow';
import {Task} from '../models/task';
import {WorkflowService} from '../services/workflow.service';
import {RestoreService} from '../services/restore.service';

@Component({
  selector: 'workflow-card',
  templateUrl: 'templates/workflow-card.html',
  directives: [FORM_DIRECTIVES, NgFor, TaskCardComponent, TaskEditComponent],
  providers: [RestoreService]
})
export class WorkflowComponent {
  @Output() deleted = new EventEmitter();
  public newTask: Task = new Task();
  public hideAddNewTaskForm = true;
  public editMode = false;

  constructor(private workflowService: WorkflowService, private restoreService: RestoreService<Workflow>) {
  }

  @Input()
  get workflow() {
    return this.restoreService.getItem();
  }
  set workflow(wf: Workflow) {
    this.restoreService.setItem(wf);
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

  onTaskEdited(updatedTask: Task) {
    this.workflowService.editTask(this.workflow._id, updatedTask)
      .subscribe(
      () => console.log('Task updated'),
      err => console.log("Error while editing Task!! ", err)
      );
  };

  onTaskDeleted(task: Task) {
    this.workflowService.delTask(this.workflow._id, task)
      .map(res => res.json())
      .subscribe(
      data => this.workflow = data,
      err => console.log("Error while deleting Task!! ", err)
      );
  };

  onUpdateWorkflow() {
    this.workflowService.updateWorkflow(this.workflow)
      .map(res => res.json())
      .subscribe(
      data => {
        this.workflow = data;
      },
      err => console.log("Error while updating Task!! ", err),
      () => this.editMode = false
      );
  };

  onCancelWorkflowUpdate() {
    this.workflow = this.restoreService.restoreItem();
    this.editMode = false;
  }
  
  onDeleteWorkflow() {
    this.workflowService.deleteWorkflow(this.workflow)
      .subscribe(
        data=> this.deleted.next(null),
        err => console.log('Error while deleting Workflow')
      )
  }
}