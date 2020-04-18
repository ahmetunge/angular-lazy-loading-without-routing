using System.Collections.Generic;
using Project.Api.Entities;

namespace Project.Api.Data
{
    public class MemoryNavbarRepository : INavbarRepository
    {
        public List<NavMenu> GelNavbarMenu()
        {
            List<NavMenu> menu = new List<NavMenu>();

            NavMenu addProduct = new NavMenu();
            addProduct.Name = "Product";
            addProduct.ModuleName = "product";
            addProduct.Component = "product-add";
            menu.Add(addProduct);

            NavMenu productList = new NavMenu();
            productList.Name = "Product List";
            productList.Component = "product-list";
            productList.ModuleName = "product";
            menu.Add(productList);

            NavMenu addCategory = new NavMenu();
            addCategory.Name = "Category";
            addCategory.ModuleName = "category";
            addCategory.Component = "category-add";
            menu.Add(addCategory);

            NavMenu categoryList = new NavMenu();
            categoryList.Name = "Category List";
            categoryList.Component = "category-list";
            categoryList.ModuleName = "category";
            menu.Add(categoryList);

            return menu;
        }
    }
}