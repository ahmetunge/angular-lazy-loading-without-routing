import { Component, OnInit, ViewContainerRef, ViewChild, Compiler, Injector } from '@angular/core';
import { NavMenu } from '../models/nav-menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;
  loaded = false;

  constructor(
    private compiler: Compiler,
    private injector: Injector
  ) { }

  ngOnInit(): void {
  }

  loadPage(menu: NavMenu) {
    this.container.remove();
    if (menu.moduleName === 'product') {
      import('../product/product.module').then(({ ProductModule }) => {
        this.compiler.compileModuleAsync(ProductModule).then(moduleFactory => {
          const moduleRef = moduleFactory.create(this.injector);
          const componentFactory = moduleRef.instance.resolveComponent(menu.component);
          const { instance } = this.container.createComponent(componentFactory);
          this.loaded = true;
        });
      });
    } else if (menu.moduleName === 'category') {
      import('../category/category.module').then(({ CategoryModule }) => {
        this.compiler.compileModuleAsync(CategoryModule).then(moduleFactory => {
          const moduleRef = moduleFactory.create(this.injector);
          const componentFactory = moduleRef.instance.resolveComponent(menu.component);
          const { instance } = this.container.createComponent(componentFactory);
          this.loaded = true;
        });
      });
    }





  }
}
