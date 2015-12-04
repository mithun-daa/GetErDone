import {Component, NgFor} from 'angular2/angular2';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {WorkflowComponent} from './workflow.component';

//HTTP_PROVIDERS has to be included for this to work
//And the viewProviders needs to be set up
//If not angular throws an exception
//EXCEPTION: No provider for Http

@Component({
    selector: 'workflow-list',
    templateUrl: 'templates/workflow-list.html',
    viewProviders: [HTTP_PROVIDERS],
    directives: [NgFor, WorkflowComponent]
})
export class WorkflowListComponent {
    public activeWorkflows;
    
    constructor(http: Http){
        http.get('/api/workflow')
            .map(res => res.json())
            .subscribe(
                data => this.activeWorkflows = data,
                err => console.log("Error!! ", err),
                () => console.log('Get Workflow done.')
            );
    }
    
 }
