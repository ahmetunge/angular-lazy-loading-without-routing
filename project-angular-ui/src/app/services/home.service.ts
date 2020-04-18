import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavMenu } from '../models/nav-menu';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:5000/api/navbar';

  getNavMenuList() {
    return this.http.get<NavMenu[]>(this.apiUrl);
  }

}
