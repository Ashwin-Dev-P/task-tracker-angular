import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  //This method is triggered when toggle button is clicked
  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  //this below method is the one all the components subscribe to.
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
