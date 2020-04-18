import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HomeService } from '../services/home.service';
import { NavMenu } from '../models/nav-menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onPageChenge = new EventEmitter<NavMenu>();


  constructor(private homeService: HomeService) { }

  dataList: NavMenu[] = [];

  ngOnInit() {
    this.getMenu();
  }

  getMenu() {
    this.homeService.getNavMenuList().subscribe((res: any[]) => {
      this.dataList = res;
    });
  }

  goPage(item: any) {
    this.onPageChenge.emit(item);
  }
}
