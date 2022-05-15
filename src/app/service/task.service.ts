import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Task } from '../Task';
import { Observable, of } from 'rxjs';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
});

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  //private url = 'http://localhost:5000/tasks';
  private url = 'http://localhost:4000/api/task';
  constructor(private http: HttpClient) {}

  getTasks(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  deleteTask(task: Task): Observable<Task> {
    const deleteUrl = this.url + '/' + task._id;
    return this.http.delete<Task>(deleteUrl);
  }

  toggleReminder(task: Task): Observable<Task> {
    const putUrl = this.url + '/' + task._id;

    return this.http.put<Task>(putUrl, task);
  }

  addTask(task: Task): Observable<any> {
    return this.http.post<Task>(this.url, task);
  }
}
