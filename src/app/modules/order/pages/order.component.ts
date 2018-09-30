import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProjectService, Project } from '@app/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

    projects$: Observable<Project[]>;

    constructor(
        private projectService: ProjectService
    ) { }

    ngOnInit(): void {
        this.loadProjects();
    }

    loadProjects() {
        this.projects$ = this.projectService.getAll();
    }

}
