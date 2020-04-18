import { NgModule, ComponentFactory, ComponentFactoryResolver } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductComponent, ProductListComponent]
})
export class ProductModule {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public resolveComponent(menu: string): ComponentFactory<any> {
    let component;
    switch (menu) {
      case 'product':
        component = this.componentFactoryResolver.resolveComponentFactory(ProductComponent);
        break;
      case 'product-list':
        component = this.componentFactoryResolver.resolveComponentFactory(ProductListComponent);
        break;
      default:
        component = this.componentFactoryResolver.resolveComponentFactory(ProductComponent);
        break;
    }
    return component;

  }
}
