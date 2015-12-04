import {Component, Input, NgFor} from 'angular2/angular2';
import {TaskCardComponent} from './task-card.component';
import {TaskEditComponent} from './task-edit.component';
import {Workflow} from '../models/workflow';
import {Task} from '../models/task';

@Component({
  selector: 'workflow-card',
  templateUrl: 'templates/workflow-card.html',
  directives: [NgFor, TaskCardComponent, TaskEditComponent]
})
export class WorkflowComponent {
  @Input() workflow: Workflow;
  public newTask:Task = new Task();
  
  onCanceled(){
    console.log('Cancelling at parent');
    
  }
  onSaved () {
    console.log('Event recieved in parent.');
    
  }
  // onSaved($event) {
  //   console.log('Saving at parent');
    
  // }
}