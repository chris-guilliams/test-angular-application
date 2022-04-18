import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'css-specificity';

  events$: Observable<any>
  constructor(private http: HttpClient) {
    this.events$ = this.http.get('http://spartanburgstg.prod.acquia-sites.com/api/events/list')

  }
  ngOnInit(): void {
  }


}
