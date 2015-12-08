import {Component, Input, Output, EventEmitter, FORM_DIRECTIVES} from 'angular2/angular2';
import {Task} from '../models/task';

@Component({
  selector: 'task-edit',
  templateUrl: 'templates/task-edit.html',
  directives: [FORM_DIRECTIVES]
})
export class TaskEditComponent {
  @Output() canceled = new EventEmitter();
  @Output() saved = new EventEmitter();
  
  @Input() task:Task;
  
  onSaved() {
    this.saved.next(null);
  }
  
  onCanceled() {
    this.canceled.next(null);
  }
}