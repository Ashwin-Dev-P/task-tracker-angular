import { Component, OnInit } from '@angular/core';
import { UiService } from '../../service/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'task-tracker';
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService, private route: Router) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  ngOnInit(): void {}

  hasRoute(route: string): boolean {
    return this.route.url === route;
  }
}
