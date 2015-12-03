import {Component} from 'angular2/angular2';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

//HTTP_PROVIDERS has to be included for this to work
//And the viewProviders needs to be set up
//If not angular throws an exception
//EXCEPTION: No provider for Http

@Component({
    selector: 'active-workflows',
    templateUrl: 'templates/active-workflows.html',
    viewProviders: [HTTP_PROVIDERS],
})
export class ActiveWorkflows {
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
