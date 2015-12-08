import {Inject} from 'angular2/angular2';
import {Http, Headers} from 'angular2/http';
import {Workflow} from '../models/workflow';
import {Task} from '../models/task';

export class WorkflowService {
	private headers: Headers = new Headers();
	
	constructor( @Inject(Http) private http: Http) {
		this.headers.append('Content-Type', 'application/json');
	}

	get() {
		return this.http.get('/api/workflow');
	}

	updateWorkflow(workflow: Workflow) {
		//send only what is needed
		var wf = {
			name: workflow.name,
			description: workflow.description
		};
		return this.http.put(`/api/Workflow/${workflow._id}`, JSON.stringify(wf), {
			headers: this.headers
		});	
	}
	
	addNewTask(id: string, newTask: Task) {
		return this.http.post(`/api/workflow/${id}/task`, JSON.stringify(newTask), {
			headers: this.headers
		});
	}
	
	delTask(id: string, task: Task) {
		return this.http.delete(`/api/workflow/${id}/task/${task._id}`);
	}
}