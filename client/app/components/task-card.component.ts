import {Component, Input, Output, EventEmitter, FORM_DIRECTIVES} from 'angular2/angular2';
import {Task} from '../models/task';
import {RestoreService} from '../services/restore.service';

@Component({
  selector: 'task-card',
  templateUrl: 'templates/task-card.html',
  directives: [FORM_DIRECTIVES],
  providers: [RestoreService]
})
export class TaskCardComponent {
  @Output() taskDeleted = new EventEmitter();
  @Output() taskEdited = new EventEmitter();
  public editing: Boolean = false;
  
  constructor(private restoreService: RestoreService<Task>) { }
  
  @Input() 
  set task (task:Task) {
    this.restoreService.setItem(task);
  }
  
  get task() {
    return this.restoreService.getItem();
  }
  
  onEdited() {
    this.taskEdited.next(this.restoreService.getItem());
    this.editing = false;
  }
  
  onCanceled() {
    this.editing = false;
    this.task = this.restoreService.restoreItem();
  }
  
  onDeleted() {
    this.taskDeleted.next(null);
  }
}