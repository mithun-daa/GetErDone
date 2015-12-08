import {Task} from './task';

export class Workflow {
	_id: string;
	name: string;
	description: string;
	tasks: Task[];
}