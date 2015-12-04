import {Component, Input} from 'angular2/angular2';
import {Task} from '../models/task';
@Component({
  selector: 'task-card',
  templateUrl: 'templates/task-card.html'
})
export class TaskCardComponent {
  @Input() task: Task;
}