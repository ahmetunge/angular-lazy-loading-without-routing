import { NgModule, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryListComponent } from './category-list/category-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CategoryComponent, CategoryListComponent]
})
export class CategoryModule {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public resolveComponent(menu: string): ComponentFactory<any> {
    let component;
    switch (menu) {

      case 'add-category':
        component = this.componentFactoryResolver.resolveComponentFactory(CategoryComponent);
        break;
      case 'category-list':
        component = this.componentFactoryResolver.resolveComponentFactory(CategoryListComponent);
        break;
      default:
        component = this.componentFactoryResolver.resolveComponentFactory(CategoryComponent);
        break;
    }

    return component;


  }
}

