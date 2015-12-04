import {bootstrap, Component} from 'angular2/angular2';
import {AppHeader} from './components/header.component';
import {WorkflowListComponent} from './components/workflow-list.component';

@Component({
    selector: 'get-er-done',
    templateUrl: 'templates/get-er-done.html',
    directives: [AppHeader, WorkflowListComponent]
})
class AppComponent { }
bootstrap(AppComponent);

