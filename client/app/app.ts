import {bootstrap, Component} from 'angular2/angular2';
import {AppHeader} from './components/header.component';
import {WorkflowListComponent} from './components/workflow-list.component';
import {WorkflowService} from './services/workflow.service';
import {RestoreService} from './services/restore.service';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'get-er-done',
    templateUrl: 'templates/get-er-done.html',
    directives: [AppHeader, WorkflowListComponent]
})
class AppComponent { }
bootstrap(AppComponent, [HTTP_PROVIDERS, WorkflowService]);

